import Link from "next/link";
import { MapPin, Phone, ArrowLeft, Check, ChevronDown, FileDown, Building2, Sparkles, KeyRound, CalendarClock, Percent, CalendarRange } from "lucide-react";
import { site, offer, projects, waLink, type Project } from "@/lib/site";
import { LeadButton, LeadForm } from "./lead";
import { WaIcon, Calculator } from "./chrome";

const W = "mx-auto max-w-7xl px-4 lg:px-8";

export function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <p className={`eyebrow ${light ? "!text-gold" : ""}`}>{children}</p>;
}

/* ---------- Offer band (يظهر في كل الصفحات) ---------- */
export function OfferBand({ source }: { source: string }) {
  const icons = [Percent, KeyRound, CalendarClock, CalendarRange];
  return (
    <section className="relative z-10 -mt-10">
      <div className={W}>
        <div className="reveal overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-ink/5">
          <div className="offer-shine flex flex-wrap items-center justify-between gap-3 px-6 py-3 text-white">
            <p className="font-[family-name:var(--font-head)] font-bold"><Sparkles size={16} className="me-1 inline" /> العرض الأقوى من تطوير مصر — وحدات جاهزة للاستلام الفوري</p>
            <LeadButton source={source} title={offer.title} sub={offer.sub} cta="احجز بالعرض قبل انتهائه" className="rounded-full bg-white px-4 py-1.5 text-sm font-bold text-accent">احجز بالعرض</LeadButton>
          </div>
          <div className="grid grid-cols-2 divide-ink/5 md:grid-cols-4 md:divide-x md:divide-x-reverse">
            {offer.points.map((p, i) => {
              const I = icons[i];
              return (
                <div key={p.v} className="flex items-center gap-3 p-5">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-tint text-cta"><I size={20} /></span>
                  <div><p className="text-xl font-bold text-deep">{p.k}</p><p className="text-sm text-ink/60">{p.v}</p></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Hero ---------- */
export function Hero({ p }: { p: Project }) {
  const msg = `مرحباً، عايز تفاصيل ${p.keyword} وعرض الاستلام الفوري`;
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden bg-ink pb-20 pt-32 text-white">
      <img src={p.hero} alt={p.keyword} className="absolute inset-0 h-full w-full object-cover" fetchPriority="high" />
      <div className="absolute inset-0 bg-gradient-to-l from-ink/90 via-ink/60 to-ink/20" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink/70" />
      <div className={`${W} relative grid items-center gap-10 lg:grid-cols-[1.25fr_1fr]`}>
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm backdrop-blur"><MapPin size={15} className="text-gold" /> {p.locationPill}</span>
          <p className="latin mt-6 text-sm text-gold">{p.latin} · TATWEER MISR</p>
          <h1 className="mt-3 text-4xl font-bold leading-tight md:text-5xl xl:text-[3.4rem]">{p.h1a}<span className="mt-2 block text-gold">{p.h1b}</span></h1>
          <p className="mt-5 max-w-xl text-lg text-white/85">{p.heroSub}</p>
          <div className="mt-7 grid max-w-xl grid-cols-3 overflow-hidden rounded-2xl bg-white/10 ring-1 ring-white/15 backdrop-blur">
            {[
              { k: p.startsFromNum ? `${p.startsFrom} مليون` : "اطلب السعر", v: "يبدأ من" },
              { k: "10%", v: "مقدم فقط" },
              { k: "9 + 1", v: "سنين + سنة سماح" },
            ].map((s) => (
              <div key={s.v} className="border-white/10 p-4 text-center [&:not(:last-child)]:border-l">
                <p className="text-xs text-white/70">{s.v}</p><p className="mt-1 text-xl font-bold">{s.k}</p>
              </div>
            ))}
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href={waLink(msg)} target="_blank" rel="noopener" className="flex items-center gap-2 rounded-xl bg-wa px-6 py-3.5 font-bold"><WaIcon /> واتساب</a>
            <a href={`tel:${site.phone}`} className="flex items-center gap-2 rounded-xl bg-white/10 px-6 py-3.5 font-bold ring-1 ring-white/25 backdrop-blur"><Phone size={18} /> <span dir="ltr">{site.phone}</span></a>
          </div>
        </div>
        <div className="cut-lg rounded-3xl bg-white p-6 text-ink shadow-2xl md:p-8">
          <span className="offer-shine inline-block rounded-full px-3 py-1 text-xs font-bold text-white">استلام فوري · سنة سماح</span>
          <h2 className="mt-3 text-2xl font-bold text-deep">سجّل واعرف المتاح في {p.name}</h2>
          <p className="mt-1 mb-4 text-sm text-ink/60">الأسعار والمساحات المتاحة للاستلام الفوري بمقدم 10%.</p>
          <LeadForm source={`hero-${p.slug}`} />
        </div>
      </div>
    </section>
  );
}

/* ---------- About ---------- */
export function About({ p }: { p: Project }) {
  return (
    <section id="about" className="py-24">
      <div className={`${W} grid items-center gap-12 lg:grid-cols-2`}>
        <div className="reveal">
          <Eyebrow>عن {p.name}</Eyebrow>
          <h2 className="mt-3 text-3xl font-bold text-deep md:text-4xl">{p.about.title}</h2>
          {p.about.body.map((b, i) => <p key={i} className="mt-4 leading-8 text-ink/75">{b}</p>)}
          <div className="mt-8 grid grid-cols-3 gap-3">
            {p.stats.map((s) => (
              <div key={s.v} className="rounded-2xl bg-white p-4 text-center ring-1 ring-ink/5">
                <p className="text-2xl font-bold text-cta">{s.k}</p><p className="mt-1 text-xs text-ink/60">{s.v}</p>
              </div>
            ))}
          </div>
          <LeadButton source={`about-${p.slug}`} className="mt-8 inline-flex items-center gap-2 rounded-xl bg-cta px-6 py-3.5 font-bold text-white hover:bg-cta2">اعرف الأسعار والمتاح <ArrowLeft size={18} /></LeadButton>
        </div>
        <div className="reveal relative">
          <img src={p.about.img} alt={`${p.keyword} - تطوير مصر`} loading="lazy" className="cut-lg aspect-[4/3] w-full rounded-3xl object-cover" />
          <div className="absolute -bottom-6 right-6 rounded-2xl bg-deep px-6 py-4 text-white shadow-xl">
            <p className="latin text-xs text-gold">{p.about.badge}</p>
            <p className="mt-1 font-bold">{p.city}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Units ---------- */
export function Units({ p }: { p: Project }) {
  return (
    <section id="units" className="bg-white py-24">
      <div className={W}>
        <div className="reveal mx-auto max-w-2xl text-center">
          <Eyebrow>الوحدات الجاهزة للاستلام</Eyebrow>
          <h2 className="mt-3 text-3xl font-bold text-deep md:text-4xl">وحدات {p.name} المتاحة</h2>
          <p className="mt-3 text-ink/65">كل الوحدات بعرض مقدم 10% وتقسيط 9 سنين مع سنة سماح قبل أول قسط.</p>
        </div>
        <div className={`mt-12 grid gap-6 sm:grid-cols-2 ${p.units.length >= 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>
          {p.units.map((u) => (
            <article key={u.name} className="reveal flex flex-col overflow-hidden rounded-2xl bg-cream ring-1 ring-ink/5">
              <div className="relative">
                <img src={u.img} alt={`${u.name} ${p.name}`} loading="lazy" className="aspect-[4/3] w-full object-cover" />
                <span className="latin absolute right-3 top-3 rounded-full bg-ink/70 px-3 py-1 text-[10px] text-gold backdrop-blur">{u.latin}</span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-bold text-deep">{u.name}</h3>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {[u.area, ...u.chips].map((c) => <span key={c} className="rounded-full bg-tint px-2.5 py-1 text-xs text-deep">{c}</span>)}
                </div>
                <div className="mt-4 rounded-xl bg-white p-3">
                  <p className="text-xs text-ink/55">{u.price ? "يبدأ من" : "السعر"}</p>
                  <p className="text-lg font-bold text-cta">{u.price ? <><span dir="ltr">{u.price}</span> ج.م</> : "اطلب أحدث سعر"}</p>
                  {u.priceNum && <p className="text-xs text-ink/55">مقدم 10%: <span dir="ltr">{Math.round(u.priceNum * 0.1).toLocaleString("en-US")}</span> ج.م</p>}
                </div>
                <div className="mt-auto pt-4">
                  <LeadButton source={`unit-${p.slug}`} unit={u.name} title={`${u.name} — ${p.name}`} sub="ابعتلنا رقمك ونبعتلك المساحات المتاحة والأسعار وخطة السداد." className="w-full rounded-xl bg-cta py-3 font-bold text-white hover:bg-cta2">اعرف المساحات والمتاح</LeadButton>
                  <div className="mt-2 grid grid-cols-2 gap-2">
                    <a href={waLink(`مرحباً، عايز تفاصيل ${u.name} في ${p.name}`)} target="_blank" rel="noopener" className="flex items-center justify-center gap-1.5 rounded-xl bg-wa/10 py-2.5 text-sm font-bold text-wa"><WaIcon size={16} /> واتساب</a>
                    <a href={`tel:${site.phone}`} className="flex items-center justify-center gap-1.5 rounded-xl bg-deep/5 py-2.5 text-sm font-bold text-deep"><Phone size={16} /> اتصل</a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Payment ---------- */
export function Payment({ p }: { p: Project }) {
  const steps = [
    { t: "ادفع 10% مقدم", d: "وتعاقد على وحدتك الجاهزة مباشرة." },
    { t: "استلم فوراً", d: "الوحدة جاهزة — تسكنها أو تأجرها من أول يوم." },
    { t: "سنة سماح كاملة", d: "مفيش ولا قسط في أول سنة بعد التعاقد." },
    { t: "قسّط على 9 سنين", d: "الباقي على أقساط مريحة بدون فوايد." },
  ];
  return (
    <section id="payment" className="bg-deep py-24 text-white">
      <div className={`${W} grid items-center gap-12 lg:grid-cols-2`}>
        <div className="reveal">
          <Eyebrow light>نظام السداد</Eyebrow>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">استلم النهارده.. <span className="text-gold">وابدأ تدفع السنة الجاية</span></h2>
          <p className="mt-4 text-white/75">عرض تطوير مصر على الوحدات الجاهزة في {p.name}.</p>
          <ol className="mt-8 space-y-4">
            {steps.map((s, i) => (
              <li key={s.t} className="flex gap-4 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gold font-bold text-ink">{i + 1}</span>
                <div><p className="font-bold">{s.t}</p><p className="text-sm text-white/65">{s.d}</p></div>
              </li>
            ))}
          </ol>
        </div>
        <div className="reveal"><Calculator units={p.units} fallback={p.startsFromNum} /></div>
      </div>
    </section>
  );
}

/* ---------- Lifestyle ---------- */
export function Lifestyle({ p }: { p: Project }) {
  return (
    <section id="lifestyle" className="py-24">
      <div className={W}>
        <div className="reveal max-w-2xl">
          <Eyebrow>الحياة في {p.name}</Eyebrow>
          <h2 className="mt-3 text-3xl font-bold text-deep md:text-4xl">كل اللي محتاجه.. جوه الكمبوند</h2>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {p.lifestyle.map((l, i) => (
            <figure key={l.title} className={`reveal group relative overflow-hidden rounded-2xl ${i === 0 ? "cut" : ""}`}>
              <img src={l.img} alt={`${l.title} - ${p.name}`} loading="lazy" className="aspect-[3/4] w-full object-cover transition duration-700 group-hover:scale-105" />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 to-transparent p-4 pt-16 font-bold text-white">{l.title}</figcaption>
            </figure>
          ))}
        </div>
        <div className="reveal mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {p.amenities.map((a) => (
            <div key={a} className="flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-medium text-deep ring-1 ring-ink/5"><Check size={16} className="text-cta" /> {a}</div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Mid CTA ---------- */
export function MidCta({ p }: { p: Project }) {
  return (
    <section className="relative overflow-hidden py-24 text-white">
      <img src={p.gallery[1] ?? p.hero} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-ink/75" />
      <div className={`${W} reveal relative text-center`}>
        <p className="latin text-sm text-gold">LIMITED READY UNITS</p>
        <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-bold md:text-5xl">الوحدات الجاهزة بالعرض ده عددها محدود</h2>
        <p className="mx-auto mt-4 max-w-xl text-white/80">{offer.title} — {offer.sub}.</p>
        <LeadButton source={`mid-${p.slug}`} title="احجز وحدتك الجاهزة" sub="هنبعتلك المتاح حالياً بالعرض قبل ما يخلص." className="mt-8 rounded-xl bg-gold px-8 py-4 font-bold text-ink">احجز مكانك دلوقتي</LeadButton>
      </div>
    </section>
  );
}

/* ---------- Location ---------- */
export function Location({ p }: { p: Project }) {
  return (
    <section id="location" className="bg-white py-24">
      <div className={`${W} grid gap-10 lg:grid-cols-2`}>
        <div className="reveal">
          <Eyebrow>الموقع</Eyebrow>
          <h2 className="mt-3 text-3xl font-bold text-deep md:text-4xl">موقع {p.keyword}</h2>
          <p className="mt-3 flex items-center gap-2 text-ink/70"><MapPin size={18} className="text-accent" /> {p.city}</p>
          <div className="mt-8 grid grid-cols-2 gap-3">
            {p.location.distances.map((d) => (
              <div key={d.v} className="rounded-2xl bg-cream p-4"><p className="text-xl font-bold text-cta">{d.k}</p><p className="text-sm text-ink/65">{d.v}</p></div>
            ))}
          </div>
          <p className="mt-6 text-sm font-semibold text-ink/60">بالقرب من</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {p.location.nearby.map((n) => <span key={n} className="rounded-full bg-tint px-3 py-1.5 text-sm text-deep">{n}</span>)}
          </div>
        </div>
        <div className="reveal cut-lg overflow-hidden rounded-3xl ring-1 ring-ink/5">
          <iframe title={`خريطة ${p.name}`} loading="lazy" className="h-full min-h-[380px] w-full" src={`https://maps.google.com/maps?q=${encodeURIComponent(p.location.mapQuery)}&z=13&output=embed`} />
        </div>
      </div>
    </section>
  );
}

/* ---------- Brochure ---------- */
export function Brochure({ p }: { p: Project }) {
  return (
    <section className="relative overflow-hidden py-20">
      <img src={p.gallery[2] ?? p.hero} alt="" loading="lazy" className="absolute inset-0 h-full w-full scale-110 object-cover blur-md" />
      <div className="absolute inset-0 bg-cream/80" />
      <div className={`${W} reveal relative text-center`}>
        <FileDown size={40} className="mx-auto text-accent" />
        <h2 className="mt-4 text-3xl font-bold text-deep">حمّل بروشور وماستر بلان {p.name}</h2>
        <p className="mx-auto mt-3 max-w-xl text-ink/70">المساحات، المخططات، وأسعار الوحدات الجاهزة — توصلك على الواتساب.</p>
        <LeadButton source={`brochure-${p.slug}`} title={`بروشور ${p.name}`} sub="اكتب رقمك ونبعتلك البروشور والماستر بلان على الواتساب." cta="ابعتلي البروشور" className="mt-6 rounded-xl bg-deep px-8 py-4 font-bold text-white">ابعتلي البروشور</LeadButton>
      </div>
    </section>
  );
}

/* ---------- Gallery ---------- */
export function Gallery({ p }: { p: Project }) {
  if (p.gallery.length < 4) return null;
  const g = p.gallery.slice(0, 7);
  const span = ["md:col-span-2 md:row-span-2", "", "", "md:col-span-2", "", "", "md:col-span-2"];
  return (
    <section id="gallery" className="py-24">
      <div className={W}>
        <div className="reveal text-center"><Eyebrow>معرض الصور</Eyebrow><h2 className="mt-3 text-3xl font-bold text-deep md:text-4xl">صور {p.keyword}</h2></div>
        <div className="mt-10 grid auto-rows-[180px] grid-cols-2 gap-3 md:auto-rows-[220px] md:grid-cols-4">
          {g.map((src, i) => <div key={src + i} className={`reveal min-w-0 overflow-hidden rounded-2xl ${span[i] ?? ""}`}><img src={src} alt={`${p.keyword} صورة ${i + 1}`} loading="lazy" className="h-full w-full object-cover" /></div>)}
        </div>
      </div>
    </section>
  );
}

/* ---------- Developer ---------- */
export function Developer() {
  const stats = [{ k: "2014", v: "سنة التأسيس" }, { k: "+11K", v: "عائلة ساكنة" }, { k: "+8M م²", v: "محفظة أراضي" }, { k: "5", v: "مشروعات كبرى" }];
  return (
    <section id="developer" className="bg-white py-24">
      <div className={`${W} grid items-center gap-10 lg:grid-cols-2`}>
        <div className="reveal">
          <Eyebrow>المطور</Eyebrow>
          <h2 className="mt-3 text-3xl font-bold text-deep md:text-4xl">تطوير مصر <span className="latin block text-base text-accent">TATWEER MISR</span></h2>
          <p className="mt-4 leading-8 text-ink/75">من 2014 وتطوير مصر بتبني مجتمعات متكاملة في العين السخنة والمستقبل سيتي ورأس الحكمة والشيخ زايد الجديدة، بشراكات مع معماريين عالميين زي جيانلوكا بيلوفو و5+1AA، وتقنية Crystal Lagoons في مشروعاتها الساحلية.</p>
        </div>
        <div className="reveal grid grid-cols-2 gap-3">
          {stats.map((s) => <div key={s.v} className="rounded-2xl bg-cream p-6 text-center"><p className="text-3xl font-bold text-cta">{s.k}</p><p className="mt-1 text-sm text-ink/60">{s.v}</p></div>)}
        </div>
      </div>
    </section>
  );
}

/* ---------- Other projects ---------- */
export function ProjectCards({ exclude, title = "مشروعات تطوير مصر بنفس العرض" }: { exclude?: string; title?: string }) {
  const list = projects.filter((x) => x.slug !== exclude);
  return (
    <section id="projects" className="py-24">
      <div className={W}>
        <div className="reveal text-center">
          <Eyebrow>استلام فوري · مقدم 10% · 9 سنين</Eyebrow>
          <h2 className="mt-3 text-3xl font-bold text-deep md:text-4xl">{title}</h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((x) => (
            <article key={x.slug} className="reveal group flex flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-ink/5">
              <Link href={`/${x.slug}`} className="relative block overflow-hidden">
                <img src={x.cardImg} alt={x.keyword} loading="lazy" className="aspect-[16/10] w-full object-cover transition duration-700 group-hover:scale-105" />
                <span className="offer-shine absolute right-3 top-3 rounded-full px-3 py-1 text-xs font-bold text-white">استلام فوري</span>
                <span className="latin absolute bottom-3 left-3 rounded bg-ink/70 px-2 py-1 text-[10px] text-gold">{x.latin}</span>
              </Link>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-xl font-bold text-deep">{x.name}</h3>
                <p className="mt-1 flex items-center gap-1.5 text-sm text-ink/60"><MapPin size={14} className="text-accent" /> {x.city}</p>
                <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="rounded-lg bg-cream p-2"><p className="text-ink/55">يبدأ من</p><p className="font-bold text-deep">{x.startsFromNum ? `${x.startsFrom} مليون` : "اطلب السعر"}</p></div>
                  <div className="rounded-lg bg-cream p-2"><p className="text-ink/55">مقدم</p><p className="font-bold text-deep">10%</p></div>
                  <div className="rounded-lg bg-cream p-2"><p className="text-ink/55">تقسيط</p><p className="font-bold text-deep">9 سنين</p></div>
                </div>
                <div className="mt-auto grid grid-cols-2 gap-2 pt-5">
                  <Link href={`/${x.slug}`} className="rounded-xl bg-deep/5 py-3 text-center text-sm font-bold text-deep">تفاصيل المشروع</Link>
                  <LeadButton source={`card-${x.slug}`} unit={x.name} title={`${x.name} — استلام فوري`} sub={offer.sub} className="rounded-xl bg-cta py-3 text-sm font-bold text-white hover:bg-cta2">الأسعار والمتاح</LeadButton>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
export function Faq({ items, title }: { items: { q: string; a: string }[]; title: string }) {
  const ld = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: items.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };
  return (
    <section id="faq" className="py-24">
      <div className="mx-auto max-w-3xl px-4">
        <div className="reveal text-center"><Eyebrow>أسئلة شائعة</Eyebrow><h2 className="mt-3 text-3xl font-bold text-deep">{title}</h2></div>
        <div className="mt-10 space-y-3">
          {items.map((f) => (
            <details key={f.q} className="reveal rounded-2xl bg-white p-5 ring-1 ring-ink/5">
              <summary className="flex items-center justify-between gap-4 font-bold text-deep">{f.q}<ChevronDown size={18} className="chev shrink-0 transition" /></summary>
              <p className="mt-3 leading-7 text-ink/70">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
    </section>
  );
}

/* ---------- Final CTA ---------- */
export function FinalCta({ name, source, img }: { name: string; source: string; img: string }) {
  return (
    <section id="contact" className="relative overflow-hidden bg-ink py-24 text-white">
      <img src={img} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-25" />
      <div className={`${W} relative grid items-center gap-10 lg:grid-cols-2`}>
        <div className="reveal">
          <Eyebrow light>سجّل اهتمامك</Eyebrow>
          <h2 className="mt-3 text-3xl font-bold md:text-5xl">احجز وحدتك الجاهزة في {name}</h2>
          <p className="mt-4 text-white/75">{offer.title} — {offer.sub}.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={`tel:${site.phone}`} className="flex items-center gap-2 rounded-xl bg-white/10 px-5 py-3 font-bold ring-1 ring-white/20"><Phone size={18} /> <span dir="ltr">{site.phone}</span></a>
            <a href={waLink(`مرحباً، عايز تفاصيل ${name}`)} target="_blank" rel="noopener" className="flex items-center gap-2 rounded-xl bg-wa px-5 py-3 font-bold"><WaIcon /> واتساب</a>
          </div>
        </div>
        <div className="reveal cut-lg rounded-3xl bg-white/10 p-6 ring-1 ring-white/15 backdrop-blur md:p-8">
          <LeadForm source={source} dark />
        </div>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
export function Footer() {
  return (
    <footer className="bg-ink pb-24 pt-14 text-sm text-white/60 md:pb-10">
      <div className={`${W} grid gap-8 md:grid-cols-3`}>
        <div>
          <p className="font-[family-name:var(--font-head)] text-lg font-bold text-white">{site.brand}</p>
          <p className="mt-2 leading-6">وكيل مبيعات معتمد لمشروعات تطوير مصر. الموقع مُدار بواسطة {site.brand} وليس الموقع الرسمي للمطور.</p>
        </div>
        <div>
          <p className="font-bold text-white">مشروعات تطوير مصر</p>
          <ul className="mt-3 grid grid-cols-2 gap-2">
            {projects.map((p) => <li key={p.slug}><Link href={`/${p.slug}`} className="hover:text-gold">{p.name}</Link></li>)}
          </ul>
        </div>
        <div>
          <p className="font-bold text-white">تواصل معنا</p>
          <p className="mt-3"><a href={`tel:${site.phone}`} dir="ltr" className="hover:text-gold">{site.phone}</a></p>
          <p className="mt-1">{site.email}</p>
          <div className="mt-3 flex gap-4"><Link href="/privacy" className="hover:text-gold">سياسة الخصوصية</Link><Link href="/disclaimer" className="hover:text-gold">إخلاء المسؤولية</Link></div>
        </div>
      </div>
      <div className={`${W} mt-10 border-t border-white/10 pt-6 text-xs leading-6`}>
        <p><Building2 size={12} className="me-1 inline" /> الأسعار المعروضة أسعار استرشادية وقابلة للتغيير دون إشعار، والعرض متاح على وحدات جاهزة مختارة وحسب المتاح وقت التعاقد. الصور للتوضيح فقط.</p>
        <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} {site.brand}</p>
          <a href={site.agencyUrl} target="_blank" rel="nofollow noopener" className="hover:text-gold">Designed &amp; Managed by One Click</a>
        </div>
      </div>
    </footer>
  );
}
