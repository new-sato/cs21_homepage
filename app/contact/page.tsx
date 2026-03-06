import SectionTitle from "../components/SectionTitle";
import SiteLayout from "../components/SiteLayout";

export default function ContactPage() {
  return (
    <SiteLayout>
      <main className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <SectionTitle level="h1">Contact</SectionTitle>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-600 dark:text-zinc-300 sm:text-base">
          所在地：〒657-0026 神戸市灘区六甲台町1-1
          <br />
          神戸大学 大学院システム情報学研究科 システム情報学専攻
          <br />
          TEL: 078-803-6250 E-mail: www@kaede.cs.kobe-u.ac.jp
        </p>
		<div className="mx-auto mt-4 w-full max-w-3xl overflow-hidden rounded-xl border border-black/10 dark:border-white/15">
		<iframe
			title="神戸大学 六甲台キャンパス周辺地図"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3279.1894156402323!2d135.236112!3d34.72561960000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60008d8c36df8021%3A0x4f3680e09eacbee6!2z56We5oi45aSn5a2m5aSn5a2m6Zmi44K344K544OG44Og5oOF5aCx5a2m56CU56m256eR!5e0!3m2!1sja!2sjp!4v1772779574218!5m2!1sja!2sjp"
			className="h-64 w-full sm:h-80"
			loading="lazy"
			referrerPolicy="no-referrer-when-downgrade"
		/>
		</div>
      </main>
    </SiteLayout>
  );
}
