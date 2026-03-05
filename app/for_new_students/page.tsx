import SectionTitle from "../components/SectionTitle";
import SiteLayout from "../components/SiteLayout";

export default function ForNewStudentsPage() {
  return (
	<SiteLayout>
	  <main className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
		<SectionTitle level="h1">For new students</SectionTitle>
		<p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-600 dark:text-zinc-300 sm:text-base">
		  新入生・新B4向けの情報を掲載するページです。入学に関する手順や研究室紹介、サポート情報などを掲載できます。
		</p>
	  </main>
	</SiteLayout>
  );
}
