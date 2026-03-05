import SectionTitle from "../components/SectionTitle";
import SiteLayout from "../components/SiteLayout";

export default function LinksPage() {
  return (
	<SiteLayout>
	  <main className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
	  	<SectionTitle level="h1">
			Link
		</SectionTitle>
		<SectionTitle level="h2">
		  神戸大学関連
		</SectionTitle>
		<ul className="mt-6 space-y-2">
			<li>・<a href="https://www.kobe-u.ac.jp/" className="text-blue-600 hover:underline dark:text-blue-400">
				神戸大学
			</a></li>
			<li>・<a href="http://www.csi.kobe-u.ac.jp/index.html" className="text-blue-600 hover:underline dark:text-blue-400">
				神戸大学 大学院 システム情報学研究科
			</a></li>
			<li>・<a href="http://www.csi.kobe-u.ac.jp/cs/site/index.html" className="text-blue-600 hover:underline dark:text-blue-400">
				神戸大学 工学部 情報知能工学科
			</a></li>
			<li>・<a href="http://www.eng.kobe-u.ac.jp/" className="text-blue-600 hover:underline dark:text-blue-400">
				神戸大学 大学院 工学研究科
			</a></li>
			<li>・<a href="http://www.oair.kobe-u.ac.jp/" className="text-blue-600 hover:underline dark:text-blue-400">
				神戸大学 先端融合研究環
			</a></li>
		</ul>
    <br />
		<SectionTitle level="h2">
		  学会関連
		</SectionTitle>
		<ul className="mt-6 space-y-2">
			<li>・<a href="http://www.iscie.or.jp/" className="text-blue-600 hover:underline dark:text-blue-400">
				システム制御情報学会
			</a></li>
			<li>・<a href="http://www.sice.jp/" className="text-blue-600 hover:underline dark:text-blue-400">
				計測自動制御学会
			</a></li>
			<li>・<a href="https://www.iee.jp/" className="text-blue-600 hover:underline dark:text-blue-400">
				電気学会
			</a></li>
			<li>・<a href="https://www.iee.jp/eiss/" className="text-blue-600 hover:underline dark:text-blue-400">
				電気学会 電子・情報・システム部門
			</a></li>
			<li>・<a href="http://www.jsme.or.jp/" className="text-blue-600 hover:underline dark:text-blue-400">
				日本機械学会
			</a></li>
			<li>・<a href="http://www.jspe.or.jp/" className="text-blue-600 hover:underline dark:text-blue-400">
				精密工学会
			</a></li>
			<li>・<a href="https://orsj.org/" className="text-blue-600 hover:underline dark:text-blue-400">
				日本オペレーションズ・リサーチ学会
			</a></li>
		</ul>
	  </main>
	</SiteLayout>
  );
}
