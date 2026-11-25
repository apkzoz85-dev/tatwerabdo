import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects, getProject, offer } from "@/lib/site";
import { Shell } from "@/components/shell";
import { Hero, OfferBand, About, Units, Payment, Lifestyle, MidCta, Location, Brochure, Gallery, Developer, ProjectCards, Faq, FinalCta } from "@/components/sections";

export const dynamicParams = false;
export function generateStaticParams() { return projects.map((p) => ({ slug: p.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const p = getProject((await params).slug);
  if (!p) return {};
  const price = p.startsFromNum ? ` | يبدأ من ${p.startsFrom} مليون` : "";
  return {
    title: { absolute: `${p.keyword} | ${p.h1a}${price}` },
    description: `${p.keyword} من تطوير مصر — ${offer.title}، ${offer.sub}. ${p.heroSub}`,
    alternates: { canonical: `/${p.slug}` },
    openGraph: { images: [p.hero], title: `${p.keyword} — استلام فوري بمقدم 10%` },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const p = getProject((await params).slug);
  if (!p) notFound();
  const nav = [{ href: "#about", label: `عن ${p.name}` }, { href: "#units", label: "الوحدات" }, { href: "#payment", label: "السداد" }, { href: "#location", label: "الموقع" }, { href: "#projects", label: "مشروعات أخرى" }, { href: "#faq", label: "الأسئلة" }];
  const ld = { "@context": "https://schema.org", "@type": "Residence", name: p.keyword, address: p.city, image: p.hero };
  return (
    <Shell options={p.units.map((u) => u.name)} project={p.name} nav={nav}>
      <Hero p={p} />
      <OfferBand source={`offer-${p.slug}`} />
      <About p={p} />
      <Units p={p} />
      <Payment p={p} />
      <Lifestyle p={p} />
      <MidCta p={p} />
      <Location p={p} />
      <Brochure p={p} />
      <Gallery p={p} />
      <Developer />
      <ProjectCards exclude={p.slug} />
      <Faq items={p.faq} title={`أسئلة عن ${p.keyword}`} />
      <FinalCta name={p.name} source={`final-${p.slug}`} img={p.hero} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
    </Shell>
  );
}
