import SiteLayout from "../components/SiteLayout";

export default function ContactPage() {
  return (
    <SiteLayout>
      <main className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Contact</h2>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-600 dark:text-zinc-300 sm:text-base">
          お問い合わせページです。連絡先やアクセス情報、フォーム案内などを掲載できます。
        </p>
      </main>
    </SiteLayout>
  );
}
