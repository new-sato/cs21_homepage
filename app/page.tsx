import Image from "next/image";
import SiteLayout from "./components/SiteLayout";
import SectionTitle from "./components/SectionTitle";

export default function Home() {
  return (
    <SiteLayout>
      <main className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:py-20">
        <section className="space-y-5 text-center lg:text-left">
          <Image
            className="mx-auto dark:invert lg:mx-0"
            src="/next.svg"
            alt="Next.js logo"
            width={120}
            height={24}
            priority
          />
		  [佐藤]
          <SectionTitle level="h2">
            スマホでもPCでも
            <br className="hidden sm:block" />
            見やすいトップページ
          </SectionTitle>
          <p className="mx-auto max-w-xl text-sm leading-7 text-zinc-600 dark:text-zinc-300 sm:text-base lg:mx-0">
            画面幅に応じて余白・文字サイズ・並び順を最適化したレスポンシブレイアウトです。
            小さい画面では縦に、大きい画面では情報を2カラムで表示します。
          </p>
          <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:justify-center lg:justify-start">
            <a
              className="inline-flex h-11 items-center justify-center rounded-full bg-foreground px-6 text-sm font-medium text-background transition-opacity hover:opacity-85"
              href="#"
            >
              はじめる
            </a>
            <a
              className="inline-flex h-11 items-center justify-center rounded-full border border-black/15 px-6 text-sm font-medium transition-colors hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/10"
              href="#"
            >
              詳しく見る
            </a>
          </div>
        </section>

        <section className="grid gap-4 sm:grid-cols-2">
          <article className="rounded-2xl border border-black/10 p-5 dark:border-white/15">
            <h3 className="text-base font-semibold">読みやすい余白</h3>
            <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
              端末ごとに余白を調整し、情報が詰まりすぎない見た目にしています。
            </p>
          </article>
          <article className="rounded-2xl border border-black/10 p-5 dark:border-white/15">
            <h3 className="text-base font-semibold">自動で文字調整</h3>
            <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
              見出しと本文のサイズをブレークポイントごとに最適化しています。
            </p>
          </article>
          <article className="rounded-2xl border border-black/10 p-5 dark:border-white/15 sm:col-span-2">
            <h3 className="text-base font-semibold">レイアウト切り替え</h3>
            <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
              スマホは縦積み、PCでは2カラムに切り替わるため、どの画面幅でも快適に閲覧できます。
            </p>
          </article>
        </section>
      </main>
    </SiteLayout>
  );
}
