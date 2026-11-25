"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import { X, Loader2, ShieldCheck } from "lucide-react";
import { site, offer, waLink } from "@/lib/site";
import { captureUtm, getUtm, track } from "@/lib/track";

type Opts = { source?: string; unit?: string; title?: string; sub?: string; cta?: string };
type Ctx = { open: (o?: Opts) => void; options: string[]; project: string };

const LeadCtx = createContext<Ctx>({ open: () => {}, options: [], project: "" });
export const useLead = () => useContext(LeadCtx);

export function LeadProvider({ children, options, project }: { children: ReactNode; options: string[]; project: string }) {
  const [state, setState] = useState<Opts | null>(null);
  const shown = useRef(false);

  const open = useCallback((o: Opts = {}) => { shown.current = true; setState(o); }, []);

  useEffect(() => {
    captureUtm();
    const KEY = "lead-popup-shown";
    if (sessionStorage.getItem(KEY)) shown.current = true;
    const fire = () => {
      if (shown.current) return;
      const a = document.activeElement;
      if (a && (a.tagName === "INPUT" || a.tagName === "TEXTAREA")) return;
      shown.current = true;
      sessionStorage.setItem(KEY, "1");
      setState({ source: "auto-popup", title: offer.title, sub: offer.sub, cta: "احجز وحدتك بالعرض" });
    };
    const t = setTimeout(fire, 16000);
    const onScroll = () => {
      const h = document.documentElement;
      if ((h.scrollTop + innerHeight) / h.scrollHeight > 0.55) fire();
    };
    addEventListener("scroll", onScroll, { passive: true });
    return () => { clearTimeout(t); removeEventListener("scroll", onScroll); };
  }, []);

  return (
    <LeadCtx.Provider value={{ open, options, project }}>
      {children}
      {state && (
        <div className="fixed inset-0 z-[80] flex items-end justify-center bg-ink/70 p-0 backdrop-blur-sm sm:items-center sm:p-4" onClick={() => setState(null)}>
          <div className="cut relative w-full max-w-md bg-white p-6 shadow-2xl sm:rounded-2xl" onClick={(e) => e.stopPropagation()}>
            <button aria-label="إغلاق" onClick={() => setState(null)} className="absolute left-4 top-4 rounded-full bg-cream p-1.5 text-ink/60 hover:text-ink">
              <X size={18} />
            </button>
            <span className="offer-shine mb-3 inline-block rounded-full px-3 py-1 text-xs font-bold text-white">مقدم 10% · سنة سماح · 9 سنين</span>
            <h3 className="text-xl font-bold text-deep">{state.title ?? "سجّل واعرف الأسعار والمتاح"}</h3>
            <p className="mt-1 text-sm text-ink/70">{state.sub ?? "هنتواصل معاك خلال دقائق بالأسعار والمساحات المتاحة للاستلام الفوري."}</p>
            <LeadForm source={state.source ?? "modal"} defaultUnit={state.unit} cta={state.cta} compact />
          </div>
        </div>
      )}
    </LeadCtx.Provider>
  );
}

export function LeadButton({ children, className = "", ...o }: Opts & { children: ReactNode; className?: string }) {
  const { open } = useLead();
  return <button type="button" onClick={() => open(o)} className={className}>{children}</button>;
}

export function LeadForm({ source, defaultUnit, cta, compact = false, dark = false }: { source: string; defaultUnit?: string; cta?: string; compact?: boolean; dark?: boolean }) {
  const { options, project } = useLead();
  const [unit, setUnit] = useState(defaultUnit ?? "");
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    if (fd.get("botcheck")) return;
    const name = String(fd.get("name") || "").trim();
    const phone = String(fd.get("phone") || "").replace(/\s/g, "");
    if (name.length < 2) return setErr("من فضلك اكتب الاسم");
    if (!/^(\+?\d{8,15})$/.test(phone)) return setErr("من فضلك اكتب رقم موبايل صحيح");
    setErr(""); setBusy(true);
    const msg = `مرحباً، أنا ${name} — ${phone}\nمهتم بـ ${project}${unit ? ` (${unit})` : ""}\nعرض الاستلام الفوري: مقدم 10% وتقسيط 9 سنين مع سنة سماح`;
    track("form");
    if (!site.web3formsKey) {
      window.open(waLink(msg), "_blank");
      location.href = "/thank-you";
      return;
    }
    try {
      const r = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: site.web3formsKey,
          subject: `Lead — ${project}${unit ? ` / ${unit}` : ""}`,
          from_name: "Tatweer Misr Landing",
          name, phone, project, unit, source, page: location.pathname, ...getUtm(),
        }),
      });
      const j = await r.json();
      if (!j.success) throw new Error();
      location.href = "/thank-you";
    } catch {
      setBusy(false);
      window.open(waLink(msg), "_blank");
    }
  }

  const label = dark ? "text-white/80" : "text-ink/70";
  const input = dark
    ? "w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 outline-none focus:border-gold"
    : "w-full rounded-xl border border-ink/10 bg-cream px-4 py-3 outline-none focus:border-cta";

  return (
    <form onSubmit={submit} className={compact ? "mt-4 space-y-3" : "space-y-3"}>
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />
      {options.length > 0 && (
        <div>
          <p className={`mb-2 text-xs font-semibold ${label}`}>مهتم بـ</p>
          <div className="grid grid-cols-2 gap-2">
            {options.map((o) => (
              <button type="button" key={o} onClick={() => setUnit(o)}
                className={`rounded-lg border px-2 py-2 text-xs font-semibold transition ${unit === o
                  ? "border-cta bg-cta text-white"
                  : dark ? "border-white/15 bg-white/5 text-white/85 hover:border-gold" : "border-ink/10 bg-tint/60 text-deep hover:border-cta"}`}>
                {o}
              </button>
            ))}
          </div>
        </div>
      )}
      <input name="name" placeholder="الاسم" className={input} autoComplete="name" />
      <input name="phone" type="tel" inputMode="tel" dir="ltr" placeholder="رقم الموبايل" className={`${input} text-right`} autoComplete="tel" />
      {err && <p className="text-sm text-red-500">{err}</p>}
      <button disabled={busy} className="flex w-full items-center justify-center gap-2 rounded-xl bg-cta px-5 py-3.5 font-bold text-white transition hover:bg-cta2 disabled:opacity-70">
        {busy && <Loader2 size={18} className="animate-spin" />} {cta ?? "ابعتلي الأسعار والمتاح"}
      </button>
      <p className={`flex items-center justify-center gap-1.5 text-[11px] ${dark ? "text-white/55" : "text-ink/50"}`}>
        <ShieldCheck size={13} /> بياناتك آمنة ومش هتتشارك مع أي جهة
      </p>
    </form>
  );
}
