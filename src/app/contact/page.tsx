import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "상담 신청 | 도훈방문간호센터",
    description: "방문간호 서비스 무료 상담 신청. 전화 031-000-0000 또는 온라인으로 상담 예약하세요.",
};

export default function ContactPage() {
    return (
        <>
            <Header />
            <main className="flex-1">
                {/* Hero */}
                <section className="page-hero">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <span className="section-label mb-3">상담 안내</span>
                        <h1 className="page-hero-title">
                            무료 상담 신청
                        </h1>
                        <p className="page-hero-desc max-w-xl mx-auto">
                            궁금하신 점이 있으시면 언제든 연락주세요.<br />
                            전문 상담사가 친절하게 안내해 드립니다.
                        </p>
                    </div>
                </section>

                {/* Contact Info + Form */}
                <section className="w-full bg-white py-14 px-6">
                    <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-14">
                        {/* Contact Info */}
                        <div className="flex flex-col gap-6">
                            <div>
                                <h2 className="text-xl font-semibold text-slate-800 mb-2">연락처 안내</h2>
                                <p className="text-sm text-slate-500 break-keep">
                                    전화, 카카오톡, 방문 등 편하신 방법으로 상담받으세요.
                                </p>
                            </div>

                            <div className="flex flex-col gap-4">
                                {/* Phone */}
                                <a
                                    href="tel:031-000-0000"
                                    className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                                        <span className="material-symbols-outlined text-lg text-white">call</span>
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500">전화 상담</p>
                                        <p className="text-base font-semibold text-slate-800">031-000-0000</p>
                                    </div>
                                </a>

                                {/* KakaoTalk */}
                                <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                                    <div className="w-10 h-10 rounded-lg bg-yellow-400 flex items-center justify-center">
                                        <span className="material-symbols-outlined text-lg text-slate-800">chat_bubble</span>
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500">카카오톡 상담</p>
                                        <p className="text-base font-semibold text-slate-800">@도훈방문간호</p>
                                    </div>
                                </div>

                                {/* Location */}
                                <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                                    <div className="w-10 h-10 rounded-lg bg-slate-200 flex items-center justify-center">
                                        <span className="material-symbols-outlined text-lg text-slate-600">location_on</span>
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500">방문 상담</p>
                                        <p className="text-base font-semibold text-slate-800">경기도 수원시 영통구</p>
                                        <p className="text-xs text-slate-400 mt-0.5">※ 방문 전 미리 연락 바랍니다.</p>
                                    </div>
                                </div>

                                {/* Hours */}
                                <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                                    <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                                        <span className="material-symbols-outlined text-lg text-green-600">schedule</span>
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500">상담 가능 시간</p>
                                        <p className="text-base font-semibold text-slate-800">평일 09:00 - 18:00</p>
                                        <p className="text-xs text-slate-400">(점심시간 12:00-13:00)</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                            <h3 className="text-lg font-semibold text-slate-800 mb-1">온라인 상담 신청</h3>
                            <p className="text-sm text-slate-500 mb-5">
                                양식을 작성해 주시면 24시간 내 연락드립니다.
                            </p>

                            <form className="flex flex-col gap-4">
                                <div className="flex flex-col gap-1.5">
                                    <label htmlFor="name" className="text-slate-700 text-sm font-medium">
                                        이름 <span className="text-red-400">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        placeholder="홍길동"
                                        className="w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-800 focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none transition-colors placeholder:text-slate-400"
                                        required
                                    />
                                </div>

                                <div className="flex flex-col gap-1.5">
                                    <label htmlFor="phone" className="text-slate-700 text-sm font-medium">
                                        연락처 <span className="text-red-400">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        placeholder="010-1234-5678"
                                        className="w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-800 focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none transition-colors placeholder:text-slate-400"
                                        required
                                    />
                                </div>

                                <div className="flex flex-col gap-1.5">
                                    <label htmlFor="service" className="text-slate-700 text-sm font-medium">
                                        관심 서비스
                                    </label>
                                    <select
                                        id="service"
                                        className="w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-800 focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none transition-colors"
                                    >
                                        <option value="">선택해주세요</option>
                                        <option value="visiting">방문간호</option>
                                        <option value="home">가정간호</option>
                                        <option value="rehab">재활간호</option>
                                        <option value="other">기타 문의</option>
                                    </select>
                                </div>

                                <div className="flex flex-col gap-1.5">
                                    <label htmlFor="message" className="text-slate-700 text-sm font-medium">
                                        상담 내용
                                    </label>
                                    <textarea
                                        id="message"
                                        rows={3}
                                        placeholder="궁금하신 내용이나 어르신 상태를 간략히 적어주세요."
                                        className="w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-800 focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none transition-colors placeholder:text-slate-400 resize-none"
                                    />
                                </div>

                                <div className="flex items-center gap-2 py-1">
                                    <input
                                        type="checkbox"
                                        id="privacy"
                                        className="w-4 h-4 rounded border-slate-300 text-primary focus:ring-primary/20"
                                        required
                                    />
                                    <label htmlFor="privacy" className="text-xs text-slate-500">
                                        <span className="underline cursor-pointer">개인정보 수집 및 이용</span>에 동의합니다. <span className="text-red-400">*</span>
                                    </label>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-primary hover:bg-primary-dark text-white font-medium py-2.5 rounded-lg transition-colors text-sm mt-1"
                                >
                                    상담 신청하기
                                </button>
                            </form>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
