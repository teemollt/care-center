import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-50 py-16 border-t border-gray-200">
            <div className="mx-auto flex max-w-[1200px] flex-col gap-10 px-6 lg:flex-row lg:justify-between lg:items-start">
                {/* Logo & Contact */}
                <div className="flex flex-col gap-6 max-w-sm">
                    <div className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white">
                            <span className="material-symbols-outlined text-[20px]">health_and_safety</span>
                        </div>
                        <span className="text-xl font-bold text-gray-900">도훈방문간호 센터</span>
                    </div>
                    <div className="flex flex-col gap-2 text-sm text-gray-600">
                        <p className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-lg">location_on</span>
                            경기도 수원시 영통구
                        </p>
                        <a href="tel:031-000-0000" className="flex items-center gap-2 font-bold text-primary text-base hover:underline">
                            <span className="material-symbols-outlined text-lg">call</span>
                            031-000-0000
                        </a>
                    </div>
                    <div className="text-sm text-gray-400">
                        © 2024 도훈방문간호 센터. All rights reserved.
                    </div>
                </div>

                {/* Links */}
                <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
                    <div className="flex flex-col gap-4">
                        <h4 className="font-bold text-gray-900">센터 소개</h4>
                        <Link href="/" className="text-sm text-gray-500 hover:text-primary">인사말</Link>
                        <Link href="/contact" className="text-sm text-gray-500 hover:text-primary">오시는 길</Link>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h4 className="font-bold text-gray-900">서비스 안내</h4>
                        <Link href="/services" className="text-sm text-gray-500 hover:text-primary">방문간호</Link>
                        <Link href="/services" className="text-sm text-gray-500 hover:text-primary">가정간호</Link>
                        <Link href="/services" className="text-sm text-gray-500 hover:text-primary">재활프로그램</Link>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h4 className="font-bold text-gray-900">고객지원</h4>
                        <Link href="/pricing" className="text-sm text-gray-500 hover:text-primary">이용 요금</Link>
                        <Link href="/contact" className="text-sm text-gray-500 hover:text-primary">상담 신청</Link>
                        <Link href="/careers" className="text-sm text-gray-500 hover:text-primary">채용 안내</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
