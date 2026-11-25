import { MapPin, Phone } from "lucide-react";
import { site, offer, projects, waLink } from "@/lib/site";
import { Shell } from "@/components/shell";
import { LeadForm } from "@/components/lead";
import { WaIcon, Calculator } from "@/components/chrome";
import { OfferBand, ProjectCards, Developer, Faq, FinalCta, Eyebrow } from "@/components/sections";

const faq = [
  { q: "إيه عرض تطوير مصر الحالي؟", a: "وحدات جاهزة للاستلام الفوري بمقدم 10% فقط، وتقسيط الباقي على 9 سنين، مع سنة كاملة سماح قبل أول قسط." },
  { q: "العرض ساري على أنهي مشروعات؟", a: "على الوحدات الجاهزة في سينز المستقبل سيتي، المونت جلالة، بلوم فيلدز، فوكا باي، وريفرز الشيخ زايد — حسب المتاح." },
  { q: "أسعار تطوير مصر بتبدأ من كام؟", a: "بتختلف حسب المشروع ونوع الوحدة؛ مثلاً سينز المستقبل سيتي بيبدأ من 15 مليون جنيه. سجّل بياناتك ونبعتلك أحدث الأسعار." },
  { q: "هل التقسيط بفوايد؟", a: "التقسيط مباشر مع المطور على 9 سنين بدون فوايد بنكية، والتفاصيل النهائية حسب عقد كل مشروع." },
];

export default function Home() {
  const hero = projects[0];
  const nav = [{ href: "#projects", label: "المشروعات" }, { href: "#payment", label: "نظام السداد" }, { href: "#developer", label: "المطور" }, { href: "#faq", label: "الأسئلة" }];
  return (
    <Shell options={projects.map((p) => p.name)} project="مشروعات تطوير مصر" nav={nav}>
      <section className="relative min-h-[100svh] overflow-hidden bg-ink pb-24 pt-32 text-white">
        <img src={hero.hero} alt="مشروعات تطوير مصر" className="absolute inset-0 h-full w-full object-cover" fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-to-l from-ink/90 via-ink/60 to-ink/20" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 lg:grid-cols-[1.25fr_1fr] lg:px-8">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm backdrop-blur"><MapPin size={15} className="text-gold" /> القاهرة الجديدة · الشيخ زايد · السخنة · الساحل</span>
            <p className="latin mt-6 text-sm text-gold">TATWEER MISR · READY TO MOVE</p>
            <h1 className="mt-3 text-4xl font-bold leading-tight md:text-5xl xl:text-[3.4rem]">مشروعات تطوير مصر<span className="mt-2 block text-gold">استلم فوراً بمقدم 10%</span></h1>
            <p className="mt-5 max-w-xl text-lg text-white/85">{offer.sub} — في سينز، المونت جلالة، بلوم فيلدز، فوكا باي وريفرز.</p>
            <div className="mt-7 flex flex-wrap gap-2">
              {projects.map((p) => <a key={p.slug} href={`/${p.slug}`} className="rounded-full bg-white/10 px-4 py-2 text-sm ring-1 ring-white/20 backdrop-blur hover:bg-white/20">{p.name}</a>)}
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={waLink("مرحباً، عايز أعرف عرض تطوير مصر للاستلام الفوري")} target="_blank" rel="noopener" className="flex items-center gap-2 rounded-xl bg-wa px-6 py-3.5 font-bold"><WaIcon /> واتساب</a>
              <a href={`tel:${site.phone}`} className="flex items-center gap-2 rounded-xl bg-white/10 px-6 py-3.5 font-bold ring-1 ring-white/25"><Phone size={18} /> <span dir="ltr">{site.phone}</span></a>
            </div>
          </div>
          <div className="cut-lg rounded-3xl bg-white p-6 text-ink shadow-2xl md:p-8">
            <span className="offer-shine inline-block rounded-full px-3 py-1 text-xs font-bold text-white">مقدم 10% · سنة سماح · 9 سنين</span>
            <h2 className="mt-3 text-2xl font-bold text-deep">اختار المشروع واعرف المتاح</h2>
            <p className="mb-4 mt-1 text-sm text-ink/60">نبعتلك أسعار الوحدات الجاهزة للاستلام الفوري.</p>
            <LeadForm source="hero-hub" />
          </div>
        </div>
      </section>
      <OfferBand source="offer-hub" />
      <ProjectCards title="اختار مشروعك من تطوير مصر" />
      <section id="payment" className="bg-deep py-24 text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2 lg:px-8">
          <div className="reveal">
            <Eyebrow light>نظام السداد</Eyebrow>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">استلم النهارده.. <span className="text-gold">وأول قسط بعد سنة</span></h2>
            <p className="mt-4 leading-8 text-white/75">بدل ما تستنى سنين للاستلام، تطوير مصر بتقدم وحدات جاهزة تسكنها أو تأجرها فوراً، بمقدم 10% بس وباقي المبلغ على 9 سنين تبدأ بعد سنة سماح كاملة.</p>
          </div>
          <div className="reveal"><Calculator units={[]} fallback={15_000_000} /></div>
        </div>
      </section>
      <Developer />
      <Faq items={faq} title="أسئلة عن عرض تطوير مصر" />
      <FinalCta name="مشروعات تطوير مصر" source="final-hub" img={hero.gallery[3]} />
    </Shell>
  );
}
