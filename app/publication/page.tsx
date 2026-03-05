import SectionTitle from "../components/SectionTitle";
import SiteLayout from "../components/SiteLayout";

export default function PublicationPage() {
  return (
    <SiteLayout>
      <main className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <SectionTitle level="h1">Publication</SectionTitle>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-600 dark:text-zinc-300 sm:text-base">
          論文・発表資料・受賞歴などの公開情報ページです。年度別の一覧を配置できます。
        </p>
      </main>
    </SiteLayout>
  );
}
