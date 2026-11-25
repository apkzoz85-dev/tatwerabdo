"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Phone, Menu, X, Tag } from "lucide-react";
import { site, offer, projects, waLink } from "@/lib/site";
import { track } from "@/lib/track";
import { LeadButton } from "./lead";

export function WaIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35M12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.32l-.34-.2-3.56.94.95-3.47-.22-.36a9.4 9.4 0 0 1-1.44-5.01c0-5.2 4.23-9.43 9.43-9.43a9.4 9.4 0 0 1 9.43 9.44c0 5.2-4.23 9.42-9.43 9.42m8.02-17.45A11.27 11.27 0 0 0 12.05.72C5.8.72.7 5.8.7 12.06c0 2 .52 3.95 1.52 5.67L.6 23.62l6.03-1.58a11.3 11.3 0 0 0 5.42 1.38h.01c6.25 0 11.34-5.09 11.34-11.34 0-3.03-1.18-5.88-3.33-8.02" />
    </svg>
  );
}

export function RevealInit() {
  useEffect(() => {
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return null;
}

export function Header({ nav, project }: { nav: { href: string; label: string }[]; project: string }) {
  const [solid, setSolid] = useState(false);
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    const f = () => setSolid(scrollY > 40);
    f(); addEventListener("scroll", f, { passive: true });
    return () => removeEventListener("scroll", f);
  }, []);
  const dark = solid || menu;
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition ${dark ? "bg-cream/95 shadow-sm backdrop-blur" : "bg-transparent"}`}>
      <div className="offer-shine hidden py-1.5 text-center text-xs font-bold text-white md:block">
        <Tag size={12} className="me-1 inline" /> {offer.title} — {offer.sub}
      </div>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8">
        <Link href="/" className={`leading-none ${dark ? "text-deep" : "text-white"}`}>
          <span className="block font-[family-name:var(--font-head)] text-lg font-bold">تطوير مصر</span>
          <span className={`latin block text-[10px] ${dark ? "text-accent" : "text-gold"}`}>TATWEER MISR</span>
        </Link>
        <nav className={`hidden items-center gap-6 text-sm font-medium lg:flex ${dark ? "text-ink/80" : "text-white/90"}`}>
          {nav.map((n) => <a key={n.href} href={n.href} className="hover:text-accent">{n.label}</a>)}
        </nav>
        <div className="flex items-center gap-2">
          <a href={`tel:${site.phone}`} onClick={() => track("call")} className={`hidden items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold sm:flex ${dark ? "text-deep" : "text-white"}`}>
            <Phone size={16} /> <span dir="ltr">{site.phone}</span>
          </a>
          <LeadButton source={`header-${project}`} className="rounded-full bg-cta px-4 py-2 text-sm font-bold text-white hover:bg-cta2">احجز بالعرض</LeadButton>
          <button aria-label="القائمة" onClick={() => setMenu(!menu)} className={`rounded-lg p-2 lg:hidden ${dark ? "text-deep" : "text-white"}`}>
            {menu ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {menu && (
        <div className="border-t border-ink/5 bg-cream px-4 pb-4 lg:hidden">
          {nav.map((n) => <a key={n.href} href={n.href} onClick={() => setMenu(false)} className="block border-b border-ink/5 py-3 text-deep">{n.label}</a>)}
          <p className="mt-3 text-xs font-semibold text-accent">مشروعات تطوير مصر</p>
          <div className="mt-2 grid grid-cols-2 gap-2">
            {projects.map((p) => <Link key={p.slug} href={`/${p.slug}`} className="rounded-lg bg-white px-3 py-2 text-sm text-deep ring-1 ring-ink/5">{p.name}</Link>)}
          </div>
        </div>
      )}
    </header>
  );
}

export function Floating({ project }: { project: string }) {
  const msg = `مرحباً، عايز أعرف تفاصيل ${project} وعرض الاستلام الفوري بمقدم 10%`;
  return (
    <>
      <div className="fixed bottom-6 left-6 z-40 hidden flex-col gap-3 md:flex">
        <a href={waLink(msg)} target="_blank" rel="noopener" onClick={() => track("whatsapp")} aria-label="واتساب" className="pulse grid h-14 w-14 place-items-center rounded-full bg-wa text-white shadow-lg"><WaIcon size={28} /></a>
        <a href={`tel:${site.phone}`} onClick={() => track("call")} aria-label="اتصل" className="grid h-14 w-14 place-items-center rounded-full bg-deep text-white shadow-lg"><Phone size={24} /></a>
      </div>
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-ink/10 bg-white text-xs font-bold md:hidden">
        <a href={`tel:${site.phone}`} onClick={() => track("call")} className="flex flex-col items-center gap-1 py-2.5 text-deep"><Phone size={20} /> اتصل</a>
        <a href={waLink(msg)} target="_blank" rel="noopener" onClick={() => track("whatsapp")} className="flex flex-col items-center gap-1 py-2.5 text-wa"><WaIcon size={20} /> واتساب</a>
        <LeadButton source={`mobile-bar-${project}`} className="flex flex-col items-center justify-center gap-1 bg-cta py-2.5 text-white"><Tag size={20} /> الأسعار</LeadButton>
      </div>
    </>
  );
}

export function Cookie() {
  const [show, setShow] = useState(false);
  useEffect(() => { try { setShow(!localStorage.getItem("cookie-ok")); } catch {} }, []);
  if (!show) return null;
  return (
    <div className="fixed inset-x-3 bottom-20 z-[60] mx-auto max-w-lg rounded-2xl bg-ink p-4 text-sm text-white/85 shadow-xl md:bottom-6">
      بنستخدم الكوكيز لتحسين تجربتك وقياس أداء الإعلانات.
      <div className="mt-3 flex gap-2">
        <button onClick={() => { try { localStorage.setItem("cookie-ok", "1"); } catch {} setShow(false); }} className="rounded-lg bg-cta px-4 py-1.5 font-bold text-white">موافق</button>
        <button onClick={() => setShow(false)} className="rounded-lg px-4 py-1.5 text-white/60">لاحقاً</button>
      </div>
    </div>
  );
}

export function Calculator({ units, fallback }: { units: { name: string; priceNum?: number }[]; fallback: number }) {
  const priced = units.filter((u) => u.priceNum);
  const [price, setPrice] = useState(priced[0]?.priceNum ?? fallback ?? 15_000_000);
  const down = price * offer.downPct;
  const rest = price - down;
  const monthly = rest / (offer.years * 12);
  const quarterly = rest / (offer.years * 4);
  const f = (n: number) => Math.round(n).toLocaleString("en-US");
  return (
    <div className="cut rounded-2xl bg-white p-6 text-ink shadow-xl">
      <p className="eyebrow">احسب قسطك</p>
      <label className="mt-3 block text-sm text-ink/70">سعر الوحدة (جنيه)</label>
      <input type="range" min={5_000_000} max={60_000_000} step={250_000} value={price} onChange={(e) => setPrice(+e.target.value)} className="mt-3 w-full accent-[var(--color-cta)]" />
      <p className="mt-1 text-2xl font-bold text-deep" dir="ltr">{f(price)} EGP</p>
      {priced.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {priced.map((u) => <button key={u.name} onClick={() => setPrice(u.priceNum!)} className="rounded-full bg-tint px-3 py-1 text-xs font-semibold text-deep">{u.name}</button>)}
        </div>
      )}
      <div className="mt-5 grid grid-cols-2 gap-3 text-center">
        <div className="rounded-xl bg-cream p-3"><p className="text-xs text-ink/60">مقدم 10%</p><p className="font-bold text-deep" dir="ltr">{f(down)}</p></div>
        <div className="rounded-xl bg-cream p-3"><p className="text-xs text-ink/60">سنة سماح</p><p className="font-bold text-deep">بدون أقساط</p></div>
        <div className="rounded-xl bg-cream p-3"><p className="text-xs text-ink/60">قسط شهري تقريبي</p><p className="font-bold text-cta" dir="ltr">{f(monthly)}</p></div>
        <div className="rounded-xl bg-cream p-3"><p className="text-xs text-ink/60">أو ربع سنوي</p><p className="font-bold text-cta" dir="ltr">{f(quarterly)}</p></div>
      </div>
      <p className="mt-3 text-[11px] text-ink/50">حساب تقريبي بأقساط متساوية على 9 سنين بعد سنة السماح، والجدول النهائي حسب عقد المطور.</p>
    </div>
  );
}
