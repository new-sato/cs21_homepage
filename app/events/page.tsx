import SiteLayout from "../components/SiteLayout";

export default function EventsPage() {
  return (
	<SiteLayout>
	  <main className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Events
      </h1>
      <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-300">
        イベントのページ
      </p>
    </main>
  </SiteLayout>
  );
}