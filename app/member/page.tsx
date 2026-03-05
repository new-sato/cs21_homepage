import SectionTitle from "../components/SectionTitle";
import SiteLayout from "../components/SiteLayout";

export default function MemberPage() {
  return (
    <SiteLayout>
      <main className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <SectionTitle level="h1">Member</SectionTitle>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-600 dark:text-zinc-300 sm:text-base">
          メンバー情報ページです。教員・学生・スタッフなどの情報をここに掲載できます。
        </p>
      </main>
    </SiteLayout>
  );
}
