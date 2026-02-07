import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "상담 신청 | 도훈방문간호 센터",
    description: "방문간호 서비스 무료 상담 신청. 전화 031-000-0000 또는 온라인으로 상담 예약하세요.",
};

export default function ContactPage() {
    return (
        <>
            <Header />
            <main className="flex-1">
                {/* Hero */}
                <section className="relative w-full bg-gradient-to-br from-primary to-primary-dark py-20 px-6 text-white">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="inline-block py-1 px-3 rounded-full bg-white/20 text-white text-xs font-bold tracking-wide mb-4">
                            Contact Us
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight break-keep">
                            무료 상담 신청
                        </h1>
                        <p className="mt-4 text-lg text-white/80 break-keep max-w-2xl mx-auto">
                            궁금하신 점이 있으시면 언제든 연락주세요.<br />
                            전문 상담사가 친절하게 안내해 드립니다.
                        </p>
                    </div>
                </section>

                {/* Contact Info + Form */}
                <section className="w-full bg-white py-20 px-6">
                    <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20">
                        {/* Contact Info */}
                        <div className="flex flex-col gap-8">
                            <div>
                                <h2 className="text-3xl font-bold text-slate-900 mb-4">연락처 안내</h2>
                                <p className="text-slate-600 break-keep">
                                    전화, 카카오톡, 방문 등 편하신 방법으로 상담받으세요.
                                </p>
                            </div>

                            <div className="flex flex-col gap-6">
                                {/* Phone */}
                                <a
                                    href="tel:031-000-0000"
                                    className="group flex items-center gap-4 p-5 rounded-2xl bg-blue-50 hover:bg-primary transition-colors"
                                >
                                    <div className="w-14 h-14 rounded-2xl bg-primary group-hover:bg-white flex items-center justify-center shadow-md transition-colors">
                                        <span className="material-symbols-outlined text-2xl text-white group-hover:text-primary">call</span>
                                    </div>
                                    <div>
                                        <p className="text-sm text-primary group-hover:text-white/80 font-medium">전화 상담</p>
                                        <p className="text-2xl font-bold text-slate-900 group-hover:text-white">031-000-0000</p>
                                    </div>
                                </a>

                                {/* KakaoTalk */}
                                <div className="flex items-center gap-4 p-5 rounded-2xl bg-yellow-50 border border-yellow-100">
                                    <div className="w-14 h-14 rounded-2xl bg-yellow-400 flex items-center justify-center shadow-md">
                                        <span className="material-symbols-outlined text-2xl text-slate-900">chat_bubble</span>
                                    </div>
                                    <div>
                                        <p className="text-sm text-yellow-700 font-medium">카카오톡 상담</p>
                                        <p className="text-lg font-bold text-slate-900">@도훈방문간호</p>
                                    </div>
                                </div>

                                {/* Location */}
                                <div className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100">
                                    <div className="w-14 h-14 rounded-2xl bg-slate-200 flex items-center justify-center">
                                        <span className="material-symbols-outlined text-2xl text-slate-600">location_on</span>
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500 font-medium">방문 상담</p>
                                        <p className="text-base font-bold text-slate-900">경기도 수원시 영통구</p>
                                        <p className="text-sm text-slate-500 mt-1">※ 방문 전 미리 연락 바랍니다.</p>
                                    </div>
                                </div>

                                {/* Hours */}
                                <div className="flex items-center gap-4 p-5 rounded-2xl bg-green-50 border border-green-100">
                                    <div className="w-14 h-14 rounded-2xl bg-green-500 flex items-center justify-center shadow-md">
                                        <span className="material-symbols-outlined text-2xl text-white">schedule</span>
                                    </div>
                                    <div>
                                        <p className="text-sm text-green-700 font-medium">상담 가능 시간</p>
                                        <p className="text-base font-bold text-slate-900">평일 09:00 - 18:00</p>
                                        <p className="text-sm text-slate-500">(점심시간 12:00-13:00)</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="bg-slate-50 rounded-3xl p-8 lg:p-10 border border-slate-100">
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">온라인 상담 신청</h3>
                            <p className="text-slate-500 mb-8">
                                아래 양식을 작성해 주시면 24시간 내 연락드립니다.
                            </p>

                            <form className="flex flex-col gap-6">
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="name" className="text-slate-700 text-sm font-semibold">
                                        이름 <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        placeholder="홍길동"
                                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-slate-400"
                                        required
                                    />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label htmlFor="phone" className="text-slate-700 text-sm font-semibold">
                                        연락처 <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        placeholder="010-1234-5678"
                                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-slate-400"
                                        required
                                    />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label htmlFor="service" className="text-slate-700 text-sm font-semibold">
                                        관심 서비스
                                    </label>
                                    <select
                                        id="service"
                                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                    >
                                        <option value="">선택해주세요</option>
                                        <option value="visiting">방문간호</option>
                                        <option value="home">가정간호</option>
                                        <option value="rehab">재활간호</option>
                                        <option value="other">기타 문의</option>
                                    </select>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label htmlFor="message" className="text-slate-700 text-sm font-semibold">
                                        상담 내용
                                    </label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        placeholder="궁금하신 내용이나 어르신 상태를 간략히 적어주세요."
                                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-slate-400 resize-none"
                                    />
                                </div>

                                <div className="flex items-center gap-3">
                                    <input
                                        type="checkbox"
                                        id="privacy"
                                        className="w-5 h-5 rounded border-slate-300 text-primary focus:ring-primary"
                                        required
                                    />
                                    <label htmlFor="privacy" className="text-sm text-slate-600">
                                        <span className="underline cursor-pointer">개인정보 수집 및 이용</span>에 동의합니다. <span className="text-red-500">*</span>
                                    </label>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-primary/20 text-lg mt-2"
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
