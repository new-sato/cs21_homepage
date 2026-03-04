import SiteLayout from "../components/SiteLayout";

export default function ContactPage() {
  return (
    <SiteLayout>
      <main className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Contact</h2>
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
			src="https://www.google.com/maps?q=%E3%80%92657-0026%20%E7%A5%9E%E6%88%B8%E5%B8%82%E7%81%98%E5%8C%BA%E5%85%AD%E7%94%B2%E5%8F%B0%E7%94%BA1-1&output=embed"
			className="h-64 w-full sm:h-80"
			loading="lazy"
			referrerPolicy="no-referrer-when-downgrade"
		/>
		</div>
      </main>
    </SiteLayout>
  );
}
