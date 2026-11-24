"use client";

import { useEffect } from "react";

// Remembers where a visitor first arrived from (landing page, referrer, UTM tags)
// for the rest of the browser session, so the quote form can send it with the lead.
export const LEAD_SOURCE_KEY = "act_lead_source";

export interface LeadSource {
  landingPage: string;
  referrer: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmTerm?: string;
}

export function readLeadSource(): LeadSource | null {
  try {
    const raw = window.sessionStorage.getItem(LEAD_SOURCE_KEY);
    return raw ? (JSON.parse(raw) as LeadSource) : null;
  } catch {
    return null;
  }
}

export default function LeadSourceTracker() {
  useEffect(() => {
    try {
      if (window.sessionStorage.getItem(LEAD_SOURCE_KEY)) return;
      const params = new URLSearchParams(window.location.search);
      let referrer = "";
      try {
        const ref = document.referrer ? new URL(document.referrer) : null;
        // Internal navigation isn't a source.
        if (ref && ref.hostname !== window.location.hostname) referrer = ref.hostname;
      } catch {
        referrer = "";
      }
      const source: LeadSource = {
        landingPage: window.location.pathname,
        referrer,
        utmSource: params.get("utm_source") || undefined,
        utmMedium: params.get("utm_medium") || undefined,
        utmCampaign: params.get("utm_campaign") || undefined,
        utmTerm: params.get("utm_term") || undefined,
      };
      window.sessionStorage.setItem(LEAD_SOURCE_KEY, JSON.stringify(source));
    } catch {
      // sessionStorage can be unavailable (private mode); the lead still submits without it.
    }
  }, []);
  return null;
}
