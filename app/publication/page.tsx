import SectionTitle from "../components/SectionTitle";
import SiteLayout from "../components/SiteLayout";
import styles from "./page.module.css";

export default function PublicationPage() {
  return (
    <SiteLayout>
      <main className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <SectionTitle level="h1">Publication</SectionTitle>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-600 dark:text-zinc-300 sm:text-base">
          論文・発表資料・受賞歴などの公開情報ページです。年度別の一覧を配置できます。
        </p>
        {/* 下線を引く */}
        <h1 className={styles.sectionHeading}>研究業績</h1>
        {/* プルダウン */}
        <div className="mt-4">
          <label htmlFor="year" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
            形式
          </label>
          <select
            id="year"
            name="year"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            <option value="">すべての形式</option>
            <option value="paper">論文</option>
            <option value="report">報告</option>
            <option value="book">著書</option>
            <option value="presentation">講演</option>
            <option value="doctor-thesis">博士論文</option>
            <option value="master-thesis">修士論文</option>
            <option value="bachelor-thesis">卒業論文</option>
          </select>
        </div>
        <div className="mt-4">
          <label htmlFor="year" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
            年度
          </label>
          <select
            id="year"
            name="year"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            <option value="">すべての年度</option>
            <option value="2024">2024年度</option>
            <option value="2023">2023年度</option>
            <option value="2022">2022年度</option>
          </select>
        </div>
      </main>
    </SiteLayout>
  );
}
