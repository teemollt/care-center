"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
    { href: "/", label: "홈" },
    { href: "/services", label: "서비스 안내" },
    { href: "/pricing", label: "이용 요금" },
    { href: "/contact", label: "상담 신청" },
    { href: "/careers", label: "채용 안내" },
];

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full glass-header transition-all duration-300">
            <div className="mx-auto flex h-20 max-w-[1200px] items-center justify-between px-6 lg:px-8">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 cursor-pointer">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-white">
                        <span className="material-symbols-outlined text-[24px]">health_and_safety</span>
                    </div>
                    <span className="text-xl font-bold tracking-tight text-gray-900">도훈방문간호 센터</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-base font-medium text-gray-600 hover:text-primary transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Contact & CTA */}
                <div className="flex items-center gap-6">
                    <div className="hidden lg:flex flex-col items-end leading-tight">
                        <span className="text-xs text-gray-500 font-medium">상담 문의</span>
                        <span className="text-lg font-bold text-primary tracking-tight">031-000-0000</span>
                    </div>
                    <Link
                        href="/contact"
                        className="hidden sm:flex h-10 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-white shadow-sm transition-transform hover:scale-105 active:scale-95"
                    >
                        상담 신청
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-gray-800 p-2"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="메뉴 열기"
                    >
                        <span className="material-symbols-outlined text-3xl">
                            {mobileMenuOpen ? "close" : "menu"}
                        </span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-100">
                    <nav className="flex flex-col px-6 py-4 gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-lg font-medium text-gray-700 hover:text-primary py-2"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <a
                            href="tel:031-000-0000"
                            className="flex items-center gap-2 text-primary font-bold text-lg py-2"
                        >
                            <span className="material-symbols-outlined">call</span>
                            031-000-0000
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
}
