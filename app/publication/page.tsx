"use client";

import { useMemo, useState } from "react";
import SectionTitle from "../components/SectionTitle";
import SiteLayout from "../components/SiteLayout";
import publications from "./publications.json";

const formatLabels: Record<string, string> = {
  paper: "論文",
  report: "報告",
  book: "著書",
  presentation: "講演",
  "doctor-thesis": "博士論文",
  "master-thesis": "修士論文",
  "bachelor-thesis": "卒業論文",
};

export default function PublicationPage() {
  const [selectedFormat, setSelectedFormat] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  const yearOptions = useMemo(() => {
    const years = Array.from(new Set(publications.map((publication) => publication.year)));
    return years.sort((leftYear, rightYear) => rightYear - leftYear);
  }, []);

  const filteredPublications = useMemo(() => {
    return publications.filter((publication) => {
      const isFormatMatched = selectedFormat === "" || publication.format === selectedFormat;
      const isYearMatched = selectedYear === "" || String(publication.year) === selectedYear;
      return isFormatMatched && isYearMatched;
    });
  }, [selectedFormat, selectedYear]);

  return (
    <SiteLayout>
      <main className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <SectionTitle level="h1">Publication</SectionTitle>
        {/* プルダウン */}
        <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-end">
          <div className="inline-flex flex-col">
            <label htmlFor="format">
              形式
            </label>
            <select
              id="format"
              name="format"
              value={selectedFormat}
              onChange={(event) => setSelectedFormat(event.target.value)}
              className="mt-1 w-fit min-w-[11rem] rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            >
              <option value="">すべての形式</option>
              {Object.entries(formatLabels).map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </div>
          <div className="inline-flex flex-col">
            <label htmlFor="year">
              年度
            </label>
            <select
              id="year"
              name="year"
              value={selectedYear}
              onChange={(event) => setSelectedYear(event.target.value)}
              className="mt-1 w-fit min-w-[11rem] rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            >
              <option value="">すべての年度</option>
              {yearOptions.map((year) => (
                <option key={year} value={String(year)}>
                  {year}年度
                </option>
              ))}
            </select>
          </div>
        </div>

        <section className="mt-8">
          <p className="text-sm text-zinc-600 dark:text-zinc-300">検索結果: {filteredPublications.length} 件</p>
          {filteredPublications.length === 0 ? (
            <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-300">条件に一致する業績はありません。</p>
          ) : (
            <ul className="mt-4 grid gap-3 lg:grid-cols-2">
              {filteredPublications.map((publication) => (
                <li key={publication.id} className="rounded-xl border border-black/10 p-4 dark:border-white/15">
                  <p className="text-base font-semibold">{publication.title}</p>
                  <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">{publication.authors}</p>
                  <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
                    {publication.year}年度 / {formatLabels[publication.format] ?? publication.format} / {publication.venue}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>
    </SiteLayout>
  );
}
