import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      zipFrom,
      zipTo,
      locationFrom,
      locationTo,
      transportType,
      vehicles,
      fullName,
      email,
      phone,
      pickupDate,
      calculatedPrice,
      distance,
    } = body;

    const vehicleSummary = vehicles
      .map((v: any) => `${v.year} ${v.make} ${v.model} (${v.condition})`)
      .join(", ");

    // 1. Console Log on Server
    console.log("==========================================");
    console.log("🚗 NEW CAR SHIPPING LEAD RECEIVED");
    console.log("==========================================");
    console.log(`Name: ${fullName}`);
    console.log(`Phone: ${phone}`);
    console.log(`Email: ${email}`);
    console.log(`Pickup Date: ${pickupDate}`);
    console.log(`Origin: ${zipFrom} (${locationFrom?.city}, ${locationFrom?.state})`);
    console.log(`Destination: ${zipTo} (${locationTo?.city}, ${locationTo?.state})`);
    console.log(`Distance: ${distance} miles | Estimated Quote: $${calculatedPrice}`);
    console.log(`Transport Type: ${transportType}`);
    console.log(`Vehicles: ${vehicleSummary}`);
    console.log("==========================================");

    // 2. Free Google Sheets / Zapier / Webhook Integration
    const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL || process.env.WEBHOOK_URL || process.env.ZAPIER_WEBHOOK_URL;
    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          dateSubmitted: new Date().toLocaleString("en-US", { timeZone: "America/New_York" }),
          fullName,
          phone,
          email,
          pickupDate,
          origin: `${zipFrom} (${locationFrom?.city || ""}, ${locationFrom?.state || ""})`,
          destination: `${zipTo} (${locationTo?.city || ""}, ${locationTo?.state || ""})`,
          distance: `${distance} miles`,
          calculatedPrice: typeof calculatedPrice === "string" ? calculatedPrice : `$${calculatedPrice}`,
          transportType,
          vehicles: vehicleSummary,
        }),
      }).catch((err) => console.error("Webhook dispatch error:", err));
    }

    // 3. Formspree Email Fallback (If FORMSPREE_URL is set)
    if (process.env.FORMSPREE_URL) {
      await fetch(process.env.FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          name: fullName,
          phone,
          email,
          pickupDate,
          origin: `${zipFrom} (${locationFrom?.city || ""}, ${locationFrom?.state || ""})`,
          destination: `${zipTo} (${locationTo?.city || ""}, ${locationTo?.state || ""})`,
          distance: `${distance} miles`,
          priceEstimate: typeof calculatedPrice === "string" ? calculatedPrice : `$${calculatedPrice}`,
          transportType,
          vehicles: vehicleSummary,
        }),
      }).catch((err) => console.error("Formspree dispatch error:", err));
    }

    // 4. Resend Email Delivery (If RESEND_API_KEY is set)
    if (process.env.RESEND_API_KEY) {
      const recipientEmail = process.env.LEAD_NOTIFICATION_EMAIL || process.env.NOTIFICATION_EMAIL || "support@americacartransport.com";
      const senderEmail = process.env.RESEND_SENDER_EMAIL || "onboarding@resend.dev";

      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: senderEmail,
          to: recipientEmail,
          subject: `🚗 New Lead: ${fullName} (${locationFrom?.city || zipFrom} -> ${locationTo?.city || zipTo})`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px; background-color: #ffffff;">
              <h2 style="color: #1e293b; margin-top: 0;">🚗 New Car Shipping Quote Lead</h2>
              <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                <tr><td style="padding: 8px 0; font-weight: bold; color: #475569;">Customer Name:</td><td style="padding: 8px 0; color: #0f172a; font-weight: bold;">${fullName}</td></tr>
                <tr><td style="padding: 8px 0; font-weight: bold; color: #475569;">Phone Number:</td><td style="padding: 8px 0;"><a href="tel:${phone}" style="color: #2563eb; font-weight: bold;">${phone}</a></td></tr>
                <tr><td style="padding: 8px 0; font-weight: bold; color: #475569;">Email Address:</td><td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #2563eb;">${email}</a></td></tr>
                <tr><td style="padding: 8px 0; font-weight: bold; color: #475569;">Preferred Pickup:</td><td style="padding: 8px 0; color: #0f172a;">${pickupDate}</td></tr>
                <tr><td style="padding: 8px 0; font-weight: bold; color: #475569;">Origin:</td><td style="padding: 8px 0; color: #0f172a;">${zipFrom} (${locationFrom?.city || ""}, ${locationFrom?.state || ""})</td></tr>
                <tr><td style="padding: 8px 0; font-weight: bold; color: #475569;">Destination:</td><td style="padding: 8px 0; color: #0f172a;">${zipTo} (${locationTo?.city || ""}, ${locationTo?.state || ""})</td></tr>
                <tr><td style="padding: 8px 0; font-weight: bold; color: #475569;">Distance:</td><td style="padding: 8px 0; color: #0f172a;">${distance} miles</td></tr>
                <tr><td style="padding: 8px 0; font-weight: bold; color: #475569;">Transport Type:</td><td style="padding: 8px 0; color: #0f172a; text-transform: capitalize;">${transportType} Carrier</td></tr>
                <tr><td style="padding: 8px 0; font-weight: bold; color: #475569;">Estimated Quote:</td><td style="padding: 8px 0; color: #16a34a; font-size: 18px; font-weight: bold;">${typeof calculatedPrice === "string" ? calculatedPrice : `$${calculatedPrice}`}</td></tr>
                <tr><td style="padding: 8px 0; font-weight: bold; color: #475569;">Vehicles:</td><td style="padding: 8px 0; color: #0f172a;">${vehicleSummary}</td></tr>
              </table>
            </div>
          `,
        }),
      }).catch((err) => console.error("Resend API error:", err));
    }

    return NextResponse.json({ success: true, message: "Lead recorded successfully" });
  } catch (error) {
    console.error("Error processing quote lead:", error);
    return NextResponse.json(
      { success: false, error: "Failed to process lead" },
      { status: 500 }
    );
  }
}
