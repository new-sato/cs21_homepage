"use client";

import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";

type SiteLayoutProps = {
  children: ReactNode;
};

const navItems = [
  { href: "/", label: "Home" },
  { href: "/research", label: "Research" },
  { href: "/publication", label: "Publication" },
  { href: "/events", label: "Events" },
  { href: "/links", label: "Links" },
  { href: "/contact", label: "Contact" },
  { href: "/for_new_students", label: "For new students" },
];

export default function SiteLayout({ children }: SiteLayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMenuOpen) return;

    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <header className="border-b border-black/10 dark:border-white/15">
        <div className="mx-auto flex min-h-[72px] w-full max-w-6xl items-center justify-between px-4 py-4">
          <Link href="/" className="text-lg font-semibold hover:text-foreground">
            <img src="/components/logo.svg" alt="CS21 Logo" className="h-13 w-56 object-cover" />
          </Link>

          <nav className="text-sm text-zinc-600 dark:text-zinc-300 max-[800px]:hidden">
            <ul className="flex items-center gap-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-foreground">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <button
            type="button"
            aria-label="Open navigation menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(true)}
            className="hidden rounded-md p-2 text-zinc-700 transition hover:bg-black/5 hover:text-foreground dark:text-zinc-200 dark:hover:bg-white/10 max-[800px]:inline-flex"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 max-[800px]:block ${
          isMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        } min-[801px]:hidden`}
        onClick={closeMenu}
        aria-hidden={!isMenuOpen}
      />

      <nav
        className={`fixed right-0 top-0 z-50 h-full w-72 max-w-[85vw] overflow-y-auto bg-background px-6 py-6 shadow-xl transition-transform duration-300 ease-out min-[801px]:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Mobile navigation"
      >
        <div className="mb-6 flex items-center justify-between">
          <span className="text-base font-semibold">Menu</span>
          <button
            type="button"
            aria-label="Close navigation menu"
            onClick={closeMenu}
            className="rounded-md p-2 text-zinc-700 transition hover:bg-black/5 hover:text-foreground dark:text-zinc-200 dark:hover:bg-white/10"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        <ul className="space-y-4 text-base text-zinc-700 dark:text-zinc-200">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="block py-1 hover:text-foreground" onClick={closeMenu}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {children}

      <footer className="border-t border-black/10 dark:border-white/15">
        <div className="mx-auto w-full max-w-6xl px-4 py-4 text-center text-xs text-zinc-600 dark:text-zinc-300 sm:px-6 lg:px-8">
          <p>
            神戸大学 大学院システム情報学研究科 システム情報学専攻
            <br />
            CS21 システム計画講座
            <br />
            所在地：〒657-0026 神戸市灘区六甲台町1-1
            <br />
            TEL: 078-803-6250 E-mail: www@kaede.cs.kobe-u.ac.jp
          </p>
        </div>
      </footer>
    </div>
  );
}