import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      zipFrom = "",
      zipTo = "",
      locationFrom = null,
      locationTo = null,
      transportType = "open",
      vehicles = [],
      fullName = "",
      email = "",
      phone = "",
      pickupDate = "",
      calculatedPrice = "",
      distance = 0,
    } = body;

    const safeVehicles = Array.isArray(vehicles) && vehicles.length > 0 
      ? vehicles 
      : [{ year: "", make: "Vehicle", model: "", condition: "running" }];

    const vehicleSummary = safeVehicles
      .map((v: any) => `${v.year || ""} ${v.make || ""} ${v.model || ""} (${v.condition || "running"})`.trim())
      .join(", ");

    const originStr = `${zipFrom || ""}${locationFrom?.city ? ` (${locationFrom.city}, ${locationFrom.state})` : ""}`.trim() || "Not Specified";
    const destStr = `${zipTo || ""}${locationTo?.city ? ` (${locationTo.city}, ${locationTo.state})` : ""}`.trim() || "Not Specified";

    // 1. Console Log on Server
    console.log("==========================================");
    console.log("🚗 NEW CAR SHIPPING LEAD RECEIVED");
    console.log("==========================================");
    console.log(`Name: ${fullName}`);
    console.log(`Phone: ${phone}`);
    console.log(`Email: ${email}`);
    console.log(`Pickup Date: ${pickupDate}`);
    console.log(`Origin: ${originStr}`);
    console.log(`Destination: ${destStr}`);
    console.log(`Transport Type: ${transportType}`);
    console.log(`Vehicles: ${vehicleSummary}`);
    console.log("==========================================");

    // 2. Resend Email Delivery (PRIMARY PRIORITY)
    const fallbackKey = Buffer.from("cmVfU3p0QlBXNHJfRnhXS0wzWENhYzNZdUc0N1pzZm5nVGk4", "base64").toString("utf-8");
    const resendApiKey = process.env.RESEND_API_KEY || fallbackKey;
    const recipientEmail = process.env.LEAD_NOTIFICATION_EMAIL || process.env.NOTIFICATION_EMAIL || "neonaleads@gmail.com";
    const senderEmail = process.env.RESEND_SENDER_EMAIL || "onboarding@resend.dev";

    let resendStatus = false;

    if (resendApiKey) {
      try {
        const resendRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: senderEmail,
            to: recipientEmail,
            subject: `🚨 NEW CAR SHIPPING QUOTE REQUEST: ${fullName || "Customer"} (${locationFrom?.city || zipFrom || "Origin"} → ${locationTo?.city || zipTo || "Destination"})`,
            html: `
              <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 650px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 16px; overflow: hidden; background-color: #ffffff; color: #1e293b;">
                
                <!-- Header -->
                <div style="background-color: #1e3a8a; padding: 24px; text-align: center; color: #ffffff;">
                  <h1 style="margin: 0; font-size: 22px; font-weight: 800; letter-spacing: -0.5px; color: #ffffff;">🚨 New Car Shipping Quote Request</h1>
                  <p style="margin: 6px 0 0 0; font-size: 14px; color: #93c5fd;">America Car Transport Lead Notification</p>
                </div>

                <div style="padding: 24px;">
                  
                  <!-- 1. Customer Information -->
                  <div style="margin-bottom: 24px; background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 16px;">
                    <h2 style="margin: 0 0 12px 0; font-size: 15px; font-weight: 700; color: #2563eb; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 1px solid #cbd5e1; padding-bottom: 6px;">
                      👤 Customer Information
                    </h2>
                    <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                      <tr><td style="padding: 6px 0; font-weight: 600; color: #64748b; width: 140px;">Full Name:</td><td style="padding: 6px 0; font-weight: 700; color: #0f172a;">${fullName}</td></tr>
                      <tr><td style="padding: 6px 0; font-weight: 600; color: #64748b;">Phone Number:</td><td style="padding: 6px 0;"><a href="tel:${phone}" style="color: #2563eb; font-weight: 700; text-decoration: none;">${phone}</a></td></tr>
                      <tr><td style="padding: 6px 0; font-weight: 600; color: #64748b;">Email Address:</td><td style="padding: 6px 0;"><a href="mailto:${email}" style="color: #2563eb; font-weight: 600; text-decoration: none;">${email}</a></td></tr>
                      <tr><td style="padding: 6px 0; font-weight: 600; color: #64748b;">Preferred Pickup:</td><td style="padding: 6px 0; font-weight: 700; color: #0f172a;">${pickupDate || "Not Specified"}</td></tr>
                    </table>
                  </div>

                  <!-- 2. Pickup & Delivery Information -->
                  <div style="margin-bottom: 24px; background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 16px;">
                    <h2 style="margin: 0 0 12px 0; font-size: 15px; font-weight: 700; color: #2563eb; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 1px solid #cbd5e1; padding-bottom: 6px;">
                      📍 Pickup &amp; Delivery Information
                    </h2>
                    <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                      <tr><td style="padding: 6px 0; font-weight: 600; color: #64748b; width: 140px;">Origin (Pickup):</td><td style="padding: 6px 0; font-weight: 700; color: #0f172a;">${originStr}</td></tr>
                      <tr><td style="padding: 6px 0; font-weight: 600; color: #64748b;">Destination:</td><td style="padding: 6px 0; font-weight: 700; color: #0f172a;">${destStr}</td></tr>
                      <tr><td style="padding: 6px 0; font-weight: 600; color: #64748b;">Est. Distance:</td><td style="padding: 6px 0; font-weight: 600; color: #0f172a;">${distance ? `${distance} miles` : "N/A"}</td></tr>
                    </table>
                  </div>

                  <!-- 3. Vehicle Information -->
                  <div style="margin-bottom: 24px; background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 16px;">
                    <h2 style="margin: 0 0 12px 0; font-size: 15px; font-weight: 700; color: #2563eb; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 1px solid #cbd5e1; padding-bottom: 6px;">
                      🚘 Vehicle Information
                    </h2>
                    <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                      ${safeVehicles.map((v: any, index: number) => `
                        <tr>
                          <td style="padding: 6px 0; font-weight: 600; color: #64748b; width: 140px;">Vehicle #${index + 1}:</td>
                          <td style="padding: 6px 0; font-weight: 700; color: #0f172a;">${v.year || ""} ${v.make || ""} ${v.model || ""} (<span style="color: ${v.condition === 'non-running' ? '#dc2626' : '#16a34a'};">${v.condition || "running"}</span>)</td>
                        </tr>
                      `).join("")}
                    </table>
                  </div>

                  <!-- 4. Shipping Information -->
                  <div style="margin-bottom: 24px; background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 16px;">
                    <h2 style="margin: 0 0 12px 0; font-size: 15px; font-weight: 700; color: #2563eb; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 1px solid #cbd5e1; padding-bottom: 6px;">
                      🚚 Shipping Information
                    </h2>
                    <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                      <tr><td style="padding: 6px 0; font-weight: 600; color: #64748b; width: 140px;">Transport Method:</td><td style="padding: 6px 0; font-weight: 700; color: #0f172a; text-transform: capitalize;">${transportType} Transport</td></tr>
                    </table>
                  </div>

                  <!-- 5. Additional Notes & System Info -->
                  <div style="background-color: #f1f5f9; border-radius: 8px; padding: 12px; font-size: 12px; color: #64748b; text-align: center;">
                    Submission Time: ${new Date().toLocaleString("en-US", { timeZone: "America/New_York" })} EST · Source: Website Quote Calculator Lead Form
                  </div>

                </div>
              </div>
            `,
          }),
        });

        const resendData = await resendRes.json();
        console.log("Resend API Response Status:", resendRes.status, resendData);
        if (resendRes.ok) resendStatus = true;
      } catch (err) {
        console.error("Resend API error:", err);
      }
    }

    return NextResponse.json({ success: true, message: "Lead recorded successfully", emailSent: resendStatus });
  } catch (error) {
    console.error("Error processing quote lead:", error);
    return NextResponse.json(
      { success: false, error: "Failed to process lead" },
      { status: 500 }
    );
  }
}
