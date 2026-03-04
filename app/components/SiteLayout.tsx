import Link from "next/link";
import { ReactNode } from "react";

type SiteLayoutProps = {
  children: ReactNode;
};

const navItems = [
  { href: "/", label: "Home" },
  { href: "/member", label: "Member" },
  { href: "/research", label: "Research" },
  { href: "/publication", label: "Publication" },
  { href: "/contact", label: "Contact" },
];

export default function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <header className="border-b border-black/10 dark:border-white/15">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <h1 className="text-lg font-semibold sm:text-xl">CS21</h1>
          <nav className="text-sm text-zinc-600 dark:text-zinc-300">
            <ul className="flex items-center gap-4 sm:gap-6">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-foreground">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {children}

      <footer className="border-t border-black/10 dark:border-white/15">
        <div className="mx-auto w-full max-w-6xl px-4 py-4 text-center text-xs text-zinc-600 dark:text-zinc-300 sm:px-6 lg:px-8">
          所在地：〒657-0026 神戸市灘区六甲台町1-1
          <br />
          神戸大学 大学院システム情報学研究科 システム情報学専攻
          <br />
          TEL: 078-803-6250 E-mail: www@kaede.cs.kobe-u.ac.jp
        </div>
      </footer>
    </div>
  );
}