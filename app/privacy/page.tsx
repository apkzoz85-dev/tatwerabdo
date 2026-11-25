import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
export const metadata: Metadata = { title: "سياسة الخصوصية" };
export default function Privacy() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-20 leading-8 text-ink/80">
      <h1 className="text-3xl font-bold text-deep">سياسة الخصوصية</h1>
      <p className="mt-6">البيانات اللي بتسجلها (الاسم ورقم الموبايل) بتستخدمها {site.brand} للتواصل معاك بخصوص مشروعات تطوير مصر فقط، ومش بتتباع أو تتشارك مع أي طرف تالت غير المطور لإتمام الحجز.</p>
      <p className="mt-4">بنستخدم الكوكيز وأدوات قياس زي Google Ads لتحسين الإعلانات وقياس أدائها. تقدر تطلب مسح بياناتك في أي وقت عن طريق {site.email}.</p>
      <Link href="/" className="mt-8 inline-block text-accent">الرجوع للرئيسية</Link>
    </main>
  );
}
