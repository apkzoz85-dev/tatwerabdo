import { site } from "./site";

declare global {
  interface Window { gtag?: (...a: unknown[]) => void; dataLayer?: unknown[] }
}

export function track(kind: "form" | "whatsapp" | "call") {
  const label = site.conversions[kind];
  if (typeof window === "undefined" || !window.gtag || !site.googleAdsId || !label) return;
  window.gtag("event", "conversion", { send_to: `${site.googleAdsId}/${label}` });
}

const KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid"];

export function captureUtm() {
  if (typeof window === "undefined") return;
  const p = new URLSearchParams(window.location.search);
  KEYS.forEach((k) => { const v = p.get(k); if (v) sessionStorage.setItem(k, v); });
}

export function getUtm(): Record<string, string> {
  const o: Record<string, string> = {};
  if (typeof window === "undefined") return o;
  KEYS.forEach((k) => { const v = sessionStorage.getItem(k); if (v) o[k] = v; });
  return o;
}
