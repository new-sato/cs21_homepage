import SiteLayout from "../components/SiteLayout";

export default function ResearchPage() {
  return (
    <SiteLayout>
      <main className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Research</h2>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-600 dark:text-zinc-300 sm:text-base">
          研究テーマやプロジェクトの紹介ページです。研究分野ごとの説明を追加できます。
        </p>
      </main>
    </SiteLayout>
  );
}
