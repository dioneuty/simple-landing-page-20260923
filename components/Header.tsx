"use client";

import { useState } from "react";
import { site } from "@/data/site";

const navLinks = [
  { href: "#about", label: "소개" },
  { href: "#menu", label: "메뉴" },
  { href: "#reviews", label: "리뷰" },
  { href: "#order", label: "주문" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <a
          href="#"
          className="text-lg font-bold text-primary"
          aria-label={`${site.name} 홈`}
        >
          {site.name}
        </a>

        <nav className="hidden items-center gap-6 md:flex" aria-label="주요 메뉴">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#order"
            className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-dark min-h-[44px] inline-flex items-center"
            aria-label="지금 주문하기"
          >
            주문하기
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg border border-border md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          aria-label={isOpen ? "메뉴 닫기" : "메뉴 열기"}
        >
          <span className="text-xl" aria-hidden="true">{isOpen ? "✕" : "☰"}</span>
        </button>
      </div>

      {isOpen && (
        <nav
          id="mobile-nav"
          className="border-t border-border bg-card px-4 py-4 md:hidden"
          aria-label="모바일 메뉴"
        >
          <ul className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-lg px-3 py-3 text-sm font-medium hover:bg-background"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#order"
                className="block rounded-lg bg-primary px-3 py-3 text-center text-sm font-medium text-white hover:bg-primary-dark"
                onClick={() => setIsOpen(false)}
                aria-label="지금 주문하기"
              >
                주문하기
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
