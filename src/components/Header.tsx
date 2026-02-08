"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
    { href: "/", label: "홈" },
    { href: "/services", label: "서비스" },
    { href: "/pricing", label: "이용요금" },
    { href: "/contact", label: "상담신청" },
    { href: "/careers", label: "채용" },
];

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full bg-white border-b border-slate-100">
            <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary text-white">
                        <span className="material-symbols-outlined text-base">health_and_safety</span>
                    </div>
                    <span className="text-sm font-semibold text-slate-800">도훈방문간호센터</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-5">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-sm text-slate-500 hover:text-slate-800 transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* CTA */}
                <div className="flex items-center gap-3">
                    <a
                        href="tel:031-000-0000"
                        className="hidden lg:flex items-center gap-1 text-sm text-primary font-medium"
                    >
                        <span className="material-symbols-outlined text-base">call</span>
                        031-000-0000
                    </a>
                    <Link
                        href="/contact"
                        className="hidden sm:flex h-8 items-center px-3.5 rounded-md bg-primary text-xs font-medium text-white hover:bg-primary-dark transition-colors"
                    >
                        상담신청
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-slate-600 p-1"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="메뉴"
                    >
                        <span className="material-symbols-outlined text-xl">
                            {mobileMenuOpen ? "close" : "menu"}
                        </span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-white border-t border-slate-100">
                    <nav className="flex flex-col px-6 py-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sm text-slate-600 hover:text-slate-800 py-2.5 border-b border-slate-50 last:border-0"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <a
                            href="tel:031-000-0000"
                            className="flex items-center gap-1.5 text-primary font-medium text-sm py-2.5 mt-1"
                        >
                            <span className="material-symbols-outlined text-base">call</span>
                            031-000-0000
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
}
