import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
export const metadata: Metadata = { title: "إخلاء المسؤولية" };
export default function Disclaimer() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-20 leading-8 text-ink/80">
      <h1 className="text-3xl font-bold text-deep">إخلاء المسؤولية</h1>
      <p className="mt-6">الموقع ده مُدار بواسطة {site.brand} كوكيل مبيعات معتمد لمشروعات تطوير مصر، وهو مش الموقع الرسمي للمطور.</p>
      <p className="mt-4">كل الأسعار وأنظمة السداد المعروضة استرشادية وقابلة للتغيير دون إشعار، والعروض متاحة على وحدات مختارة حسب المتاح وقت التعاقد. الصور والتصميمات للتوضيح فقط، والمرجع النهائي هو عقد المطور.</p>
      <Link href="/" className="mt-8 inline-block text-accent">الرجوع للرئيسية</Link>
    </main>
  );
}
