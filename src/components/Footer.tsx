import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-slate-50 py-10 border-t border-slate-100">
            <div className="mx-auto max-w-5xl px-6">
                <div className="flex flex-col md:flex-row md:justify-between gap-8">
                    {/* Logo & Contact */}
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-2">
                            <div className="flex h-6 w-6 items-center justify-center rounded bg-primary text-white">
                                <span className="material-symbols-outlined text-sm">health_and_safety</span>
                            </div>
                            <span className="text-sm font-semibold text-slate-700">도훈방문간호센터</span>
                        </div>
                        <div className="flex flex-col gap-1 text-xs text-slate-500">
                            <p className="flex items-center gap-1">
                                <span className="material-symbols-outlined text-sm">location_on</span>
                                경기도 수원시 영통구
                            </p>
                            <a href="tel:031-000-0000" className="flex items-center gap-1 font-medium text-primary hover:underline">
                                <span className="material-symbols-outlined text-sm">call</span>
                                031-000-0000
                            </a>
                        </div>
                    </div>

                    {/* Links */}
                    <div className="grid grid-cols-3 gap-6 text-xs">
                        <div className="flex flex-col gap-1.5">
                            <h4 className="font-medium text-slate-700">서비스</h4>
                            <Link href="/services" className="text-slate-400 hover:text-slate-600">방문간호</Link>
                            <Link href="/services" className="text-slate-400 hover:text-slate-600">가정간호</Link>
                            <Link href="/services" className="text-slate-400 hover:text-slate-600">재활간호</Link>
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <h4 className="font-medium text-slate-700">이용안내</h4>
                            <Link href="/pricing" className="text-slate-400 hover:text-slate-600">이용요금</Link>
                            <Link href="/contact" className="text-slate-400 hover:text-slate-600">상담신청</Link>
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <h4 className="font-medium text-slate-700">채용</h4>
                            <Link href="/careers" className="text-slate-400 hover:text-slate-600">채용안내</Link>
                        </div>
                    </div>
                </div>

                <div className="mt-8 pt-5 border-t border-slate-100 text-xs text-slate-400">
                    © 2024 도훈방문간호센터. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
