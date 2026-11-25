import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { site, waLink } from "@/lib/site";
export const metadata: Metadata = { title: "شكراً لتسجيلك", robots: { index: false, follow: false } };
export default function ThankYou() {
  return (
    <main className="grid min-h-screen place-items-center bg-cream px-4 text-center">
      <div className="cut-lg max-w-lg rounded-3xl bg-white p-10 shadow-xl">
        <CheckCircle2 size={56} className="mx-auto text-cta" />
        <h1 className="mt-4 text-3xl font-bold text-deep">تم استلام طلبك</h1>
        <p className="mt-3 text-ink/70">مستشار المبيعات هيتواصل معاك خلال دقائق بأسعار الوحدات الجاهزة وتفاصيل العرض.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a href={waLink("مرحباً، سجلت بياناتي وعايز أكمل على الواتساب")} className="rounded-xl bg-wa px-5 py-3 font-bold text-white">كمّل على الواتساب</a>
          <a href={`tel:${site.phone}`} className="rounded-xl bg-deep px-5 py-3 font-bold text-white" dir="ltr">{site.phone}</a>
        </div>
        <Link href="/" className="mt-6 inline-block text-sm text-accent">الرجوع للمشروعات</Link>
      </div>
    </main>
  );
}
