import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

const basePath = process.env.NODE_ENV === 'production' ? '/care-center' : '';

export const metadata: Metadata = {
    title: "채용 안내 | 도훈방문간호센터",
    description: "도훈방문간호센터에서 함께할 전문 간호사를 모십니다. 경쟁력 있는 급여와 유연한 근무 환경을 제공합니다.",
};

const benefits = [
    {
        icon: "medical_services",
        title: "전문성 성장",
        desc: "방문간호 분야의 진정한 전문가로 성장할 수 있는 체계적인 시스템을 제공합니다.",
    },
    {
        icon: "schedule",
        title: "유연한 근무",
        desc: "파트타임부터 전일제까지, 개인의 라이프스타일에 맞춘 탄력적 근무가 가능합니다.",
    },
    {
        icon: "school",
        title: "교육 지원",
        desc: "정기적인 세미나와 외부 교육비 지원으로 지속적인 역량 강화를 돕습니다.",
    },
    {
        icon: "payments",
        title: "경쟁력 있는 대우",
        desc: "간호사님의 헌신과 가치를 인정하는 급여와 인센티브 제도를 운영합니다.",
    },
];

export default function CareersPage() {
    return (
        <>
            <Header />
            <main className="flex-1">
                {/* Hero */}
                <section className="bg-slate-800 py-14 md:py-16">
                    <div className="max-w-5xl mx-auto px-6">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <span className="section-label bg-slate-700 text-slate-300 mb-4">채용 안내</span>
                                <h1 className="text-2xl md:text-3xl font-semibold text-white leading-tight tracking-tight break-keep mt-3">
                                    함께 성장할<br />전문 간호사를 찾습니다
                                </h1>
                                <p className="mt-4 text-slate-400 leading-relaxed break-keep">
                                    당신의 전문성이 어르신의 행복이 되는 곳.<br className="hidden md:block" />
                                    최고의 대우와 환경에서 새로운 커리어를 시작하세요.
                                </p>
                                <div className="mt-6 flex flex-wrap gap-3">
                                    <a
                                        href="#apply-section"
                                        className="inline-flex items-center h-10 px-5 bg-primary hover:bg-primary-dark text-white text-sm font-medium rounded-lg transition-colors"
                                    >
                                        지원하기
                                    </a>
                                    <a
                                        href="tel:031-000-0000"
                                        className="inline-flex items-center h-10 px-5 bg-slate-700 hover:bg-slate-600 text-white border border-slate-600 text-sm font-medium rounded-lg transition-colors"
                                    >
                                        전화 문의
                                    </a>
                                </div>
                            </div>
                            <div className="hidden md:block">
                                <div className="aspect-[4/3] rounded-xl overflow-hidden bg-slate-700">
                                    <img
                                        src={`${basePath}/images/careers_new.jpg`}
                                        alt="의료진 팀"
                                        className="w-full h-full object-cover object-top"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Benefits */}
                <section className="py-14 bg-white">
                    <div className="max-w-5xl mx-auto px-6">
                        <div className="mb-8">
                            <h2 className="section-title break-keep">왜 도훈방문간호센터인가요?</h2>
                            <p className="mt-2 section-subtitle break-keep">
                                간호사님들이 환자 케어에만 집중할 수 있도록 최적의 환경을 제공합니다.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {benefits.map((b) => (
                                <div
                                    key={b.icon}
                                    className="flex flex-col gap-3 rounded-xl border border-slate-100 bg-slate-50 p-4"
                                >
                                    <div className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center text-primary">
                                        <span className="material-symbols-outlined text-lg">{b.icon}</span>
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-semibold text-slate-800 mb-1">{b.title}</h3>
                                        <p className="text-xs text-slate-500 leading-relaxed break-keep">{b.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Recruitment Details */}
                <section className="py-14 bg-slate-50 border-y border-slate-100">
                    <div className="max-w-3xl mx-auto px-6">
                        <div className="mb-6">
                            <span className="section-label mb-3">모집 요강</span>
                            <h2 className="section-title mt-2">채용 정보</h2>
                        </div>

                        <div className="bg-white rounded-xl border border-slate-100 divide-y divide-slate-50 text-sm">
                            <div className="p-4 flex flex-col md:flex-row md:items-start gap-1.5 md:gap-6">
                                <span className="text-slate-400 font-medium md:w-20 shrink-0">모집 분야</span>
                                <span className="text-slate-700">방문 간호사 (정규직 / 파트타임)</span>
                            </div>
                            <div className="p-4 flex flex-col md:flex-row md:items-start gap-1.5 md:gap-6">
                                <span className="text-slate-400 font-medium md:w-20 shrink-0">담당 업무</span>
                                <ul className="text-slate-700 space-y-1">
                                    <li>• 대상자 가정 방문 간호 서비스 제공</li>
                                    <li>• 건강 상담 및 만성질환 관리</li>
                                    <li>• 간호 계획 수립 및 경과 기록</li>
                                </ul>
                            </div>
                            <div className="p-4 flex flex-col md:flex-row md:items-start gap-1.5 md:gap-6">
                                <span className="text-slate-400 font-medium md:w-20 shrink-0">자격 요건</span>
                                <ul className="text-slate-700 space-y-1">
                                    <li><span className="text-primary font-medium">• 간호사 면허 소지자 (필수)</span></li>
                                    <li>• 임상 경력 2년 이상 (필수)</li>
                                    <li>• 운전 가능자 우대</li>
                                    <li>• 노인장기요양보험 제도 이해자 우대</li>
                                </ul>
                            </div>
                            <div className="p-4 flex flex-col md:flex-row md:items-start gap-1.5 md:gap-6">
                                <span className="text-slate-400 font-medium md:w-20 shrink-0">근무 지역</span>
                                <div>
                                    <p className="text-slate-700">경기도 수원시 영통구 및 인근 지역</p>
                                    <p className="text-slate-400 text-xs mt-0.5">※ 자택에서 대상자 가정으로 직접 이동</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Application Form */}
                <section id="apply-section" className="py-14 bg-white">
                    <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-2 gap-10">
                        {/* Form */}
                        <div>
                            <h2 className="section-title mb-2">간편 지원</h2>
                            <p className="section-subtitle mb-5 break-keep">
                                이름과 연락처를 남겨주시면 24시간 이내 연락드립니다.
                            </p>

                            <form className="flex flex-col gap-4">
                                <div className="flex flex-col gap-1.5">
                                    <label htmlFor="name" className="text-slate-600 text-sm font-medium">이름</label>
                                    <input
                                        type="text"
                                        id="name"
                                        placeholder="홍길동"
                                        className="w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-800 focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none transition-colors placeholder:text-slate-400"
                                    />
                                </div>

                                <div className="flex flex-col gap-1.5">
                                    <label htmlFor="phone" className="text-slate-600 text-sm font-medium">연락처</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        placeholder="010-1234-5678"
                                        className="w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-800 focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none transition-colors placeholder:text-slate-400"
                                    />
                                </div>

                                <div className="flex flex-col gap-1.5">
                                    <label htmlFor="license" className="text-slate-600 text-sm font-medium">경력 요약 (선택)</label>
                                    <textarea
                                        id="license"
                                        rows={3}
                                        placeholder="예: 간호사 면허, 종합병원 3년 경력"
                                        className="w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-800 focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none transition-colors placeholder:text-slate-400 resize-none"
                                    />
                                </div>

                                <div className="flex items-center gap-2 py-1">
                                    <input
                                        type="checkbox"
                                        id="privacy"
                                        className="w-4 h-4 rounded border-slate-300 text-primary focus:ring-primary/20"
                                    />
                                    <label htmlFor="privacy" className="text-xs text-slate-500">
                                        <span className="underline cursor-pointer">개인정보 수집 및 이용</span>에 동의합니다.
                                    </label>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-primary hover:bg-primary-dark text-white font-medium py-2.5 rounded-lg transition-colors text-sm"
                                >
                                    지원하기
                                </button>
                            </form>
                        </div>

                        {/* Contact Box */}
                        <div className="flex flex-col justify-center">
                            <div className="bg-slate-50 border border-slate-100 rounded-xl p-5">
                                <h3 className="text-base font-semibold text-slate-800 mb-3">문의하기</h3>
                                <p className="text-sm text-slate-500 mb-4 break-keep">
                                    채용 관련 궁금한 점이 있으시면 연락주세요.
                                </p>

                                <a
                                    href="tel:031-000-0000"
                                    className="flex items-center gap-3 p-3 rounded-lg bg-white border border-slate-100 hover:border-slate-200 transition-colors"
                                >
                                    <div className="w-8 h-8 rounded-lg bg-primary text-white flex items-center justify-center">
                                        <span className="material-symbols-outlined text-base">call</span>
                                    </div>
                                    <div>
                                        <span className="text-xs text-slate-400">채용 문의</span>
                                        <span className="text-sm font-semibold text-slate-800 block">031-000-0000</span>
                                    </div>
                                </a>

                                <p className="text-xs text-slate-400 mt-3">
                                    평일 09:00 - 18:00 (점심 12:00-13:00)
                                </p>
                            </div>

                            <div className="mt-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                                <div className="flex items-start gap-2">
                                    <span className="material-symbols-outlined text-slate-400 text-base">location_on</span>
                                    <div>
                                        <span className="text-xs text-slate-400">근무지/면접 장소</span>
                                        <p className="text-sm text-slate-600">경기도 수원시 영통구</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
