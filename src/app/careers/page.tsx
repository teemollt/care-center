import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "채용 안내 | 도훈방문간호 센터",
    description: "도훈방문간호 센터에서 함께할 전문 간호사를 모십니다. 경쟁력 있는 급여와 유연한 근무 환경을 제공합니다.",
};

const benefits = [
    {
        icon: "medical_services",
        title: "방문간호 전문가",
        desc: "체계적인 시스템 속에서 방문간호 분야의 진정한 전문가로 성장할 수 있는 기회를 제공합니다.",
    },
    {
        icon: "schedule",
        title: "유연한 근무 시간",
        desc: "개인의 라이프스타일을 존중합니다. 파트타임부터 전일제까지 탄력적인 근무 조정이 가능합니다.",
    },
    {
        icon: "school",
        title: "교육 지원 프로그램",
        desc: "직무 역량 강화를 위한 정기적인 세미나와 외부 교육비 지원을 통해 성장을 돕습니다.",
    },
    {
        icon: "payments",
        title: "업계 최고 대우",
        desc: "간호사님의 헌신과 가치를 인정합니다. 경쟁력 있는 급여와 인센티브 제도를 운영합니다.",
    },
];

export default function CareersPage() {
    return (
        <>
            <Header />
            <main className="flex-1">
                {/* Hero */}
                <section className="w-full px-4 py-8 md:px-10 lg:px-20 flex justify-center">
                    <div className="w-full max-w-6xl">
                        <div
                            className="relative overflow-hidden rounded-3xl min-h-[520px] flex flex-col items-center justify-center text-center p-8 bg-cover bg-center"
                            style={{
                                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuD9Xmmxsi5pjVP5veABFOP_svTr99SzLp_y5qRrOSSJRXMrCPvMqMn44igAy35V9zEEFPFAKGsYZfonU4SEbBJM3wWFHsmGyegVJ9DNEPWK0KPCUjAe0RplBjduI4ReIeELT4aH9f6XSRlfC4LbMkkn2tygFGaQpN3PtoCEAvEKW6EJ4H6QSnAov_yVPP6KXC-YFmmMcDbkLeIk63FHu02Letdn6ADIcDayr7a4-arYvEiHzyV3md1r582_nRGLUNZzoElp6m1b5wg")`,
                            }}
                        >
                            <div className="flex flex-col gap-4 max-w-3xl z-10 animate-fade-in-up">
                                <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-semibold tracking-wider uppercase mb-2 w-fit mx-auto border border-white/10">
                                    Now Hiring
                                </span>
                                <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight break-keep">
                                    도훈방문간호 센터와 함께할<br className="hidden md:block" /> 전문 간호사를 모십니다.
                                </h1>
                                <p className="text-white/90 text-base md:text-lg font-medium leading-relaxed max-w-2xl mx-auto mt-2 break-keep">
                                    당신의 전문성이 어르신의 행복이 되는 곳.<br className="md:hidden" /> 최고의 대우와 환경에서 새로운 커리어를 시작하세요.
                                </p>
                                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                                    <a
                                        href="#apply-section"
                                        className="flex items-center justify-center h-12 px-8 bg-primary hover:bg-primary-dark text-white text-base font-bold rounded-xl transition-all shadow-lg shadow-primary/30"
                                    >
                                        지원하기
                                    </a>
                                    <a
                                        href="tel:031-000-0000"
                                        className="flex items-center justify-center h-12 px-8 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 text-base font-bold rounded-xl transition-all"
                                    >
                                        전화 문의하기
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Benefits */}
                <section className="w-full px-6 py-16 bg-background-light">
                    <div className="max-w-6xl mx-auto">
                        <div className="mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight break-keep">
                                왜 도훈방문간호 센터인가요?
                            </h2>
                            <p className="text-slate-500 text-lg mt-2 break-keep">
                                간호사님들이 오직 환자 케어에만 집중할 수 있도록 최적의 업무 환경을 제공합니다.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {benefits.map((b) => (
                                <div
                                    key={b.icon}
                                    className="group flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-lg transition-shadow duration-300"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                        <span className="material-symbols-outlined text-3xl">{b.icon}</span>
                                    </div>
                                    <div>
                                        <h3 className="text-slate-900 text-lg font-bold mb-2">{b.title}</h3>
                                        <p className="text-slate-500 text-sm leading-relaxed break-keep">{b.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Recruitment Details */}
                <section className="w-full px-6 py-16 bg-white border-y border-slate-100">
                    <div className="max-w-4xl mx-auto">
                        <div className="mb-10">
                            <span className="text-primary font-bold text-sm tracking-wider uppercase mb-2 block">Recruitment Info</span>
                            <h2 className="text-slate-900 text-3xl font-bold tracking-tight">모집 요강</h2>
                        </div>

                        <div className="bg-slate-50 rounded-2xl p-6 md:p-8">
                            <div className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-y-8 gap-x-8">
                                <div>
                                    <p className="text-slate-500 text-sm font-semibold">모집 분야</p>
                                </div>
                                <div className="pb-6 border-b border-slate-200">
                                    <p className="text-slate-900 text-base font-medium">방문 간호사 (정규직 / 파트타임)</p>
                                </div>

                                <div>
                                    <p className="text-slate-500 text-sm font-semibold">담당 업무</p>
                                </div>
                                <div className="pb-6 border-b border-slate-200">
                                    <ul className="list-disc list-outside ml-4 text-slate-900 text-base space-y-2">
                                        <li>대상자 가정 방문 간호 서비스 제공</li>
                                        <li>건강 상담 및 만성질환 관리</li>
                                        <li>간호 계획 수립 및 경과 기록</li>
                                    </ul>
                                </div>

                                <div>
                                    <p className="text-slate-500 text-sm font-semibold">자격 요건</p>
                                </div>
                                <div className="pb-6 border-b border-slate-200">
                                    <ul className="list-disc list-outside ml-4 text-slate-900 text-base space-y-2">
                                        <li><span className="font-bold text-primary">간호사 면허 소지자 (필수)</span></li>
                                        <li>임상 경력 2년 이상 (필수)</li>
                                        <li>운전 가능자 우대</li>
                                        <li>노인장기요양보험 제도에 대한 이해도가 있으신 분 우대</li>
                                    </ul>
                                </div>

                                <div>
                                    <p className="text-slate-500 text-sm font-semibold">근무 지역</p>
                                </div>
                                <div>
                                    <p className="text-slate-900 text-base">경기도 수원시 영통구 및 인근 지역</p>
                                    <p className="text-slate-500 text-sm mt-1">※ 자택에서 대상자 가정으로 바로 이동하는 경우가 많습니다.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Application Form */}
                <section id="apply-section" className="w-full px-6 py-20 bg-background-light">
                    <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20">
                        {/* Form */}
                        <div className="flex flex-col gap-8">
                            <div>
                                <h2 className="text-slate-900 text-3xl font-bold tracking-tight mb-4">간편 지원하기</h2>
                                <p className="text-slate-500 break-keep">
                                    복잡한 절차 없이 이름과 연락처만 남겨주세요.<br />
                                    담당자가 확인 후 24시간 이내에 연락드립니다.
                                </p>
                            </div>

                            <form className="flex flex-col gap-6">
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="name" className="text-slate-700 text-sm font-semibold">이름</label>
                                    <input
                                        type="text"
                                        id="name"
                                        placeholder="홍길동"
                                        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-slate-400"
                                    />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label htmlFor="phone" className="text-slate-700 text-sm font-semibold">연락처</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        placeholder="010-1234-5678"
                                        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-slate-400"
                                    />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label htmlFor="license" className="text-slate-700 text-sm font-semibold">면허/경력 요약 (선택)</label>
                                    <textarea
                                        id="license"
                                        rows={3}
                                        placeholder="예: 간호사 면허 소지, 종합병원 3년 경력"
                                        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-slate-400 resize-none"
                                    />
                                </div>

                                <div className="flex items-center gap-3 py-2">
                                    <input
                                        type="checkbox"
                                        id="privacy"
                                        className="w-5 h-5 rounded border-slate-300 text-primary focus:ring-primary"
                                    />
                                    <label htmlFor="privacy" className="text-sm text-slate-500">
                                        <span className="underline cursor-pointer">개인정보 수집 및 이용</span>에 동의합니다.
                                    </label>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-primary/20 text-lg"
                                >
                                    지원 완료하기
                                </button>
                            </form>
                        </div>

                        {/* Contact Box */}
                        <div className="flex flex-col justify-center">
                            <div className="bg-white border border-slate-200 rounded-2xl p-8 lg:p-10 shadow-sm relative overflow-hidden">
                                <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
                                <h3 className="text-xl font-bold text-slate-900 mb-6 relative z-10">궁금한 점이 있으신가요?</h3>
                                <p className="text-slate-500 mb-8 relative z-10 break-keep">
                                    채용과 관련하여 궁금한 점이 있으시면 언제든 편하게 연락주세요.<br />
                                    센터장이 직접 친절하게 안내해 드립니다.
                                </p>

                                <div className="flex flex-col gap-4 relative z-10">
                                    <a
                                        href="tel:031-000-0000"
                                        className="group flex items-center gap-4 p-4 rounded-xl bg-primary/5 hover:bg-primary/10 border border-primary/10 transition-colors"
                                    >
                                        <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                                            <span className="material-symbols-outlined">call</span>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-xs font-semibold text-primary uppercase tracking-wider">채용 문의 전화</span>
                                            <span className="text-lg font-bold text-slate-900">031-000-0000</span>
                                        </div>
                                    </a>
                                    <div className="flex items-center gap-3 px-2">
                                        <span className="material-symbols-outlined text-slate-400 text-sm">schedule</span>
                                        <span className="text-sm text-slate-500">평일 09:00 - 18:00 (점심시간 12:00-13:00)</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 p-6 rounded-2xl bg-white border border-slate-100">
                                <div className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-slate-400 mt-1">location_on</span>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-sm mb-1">근무지 및 면접 장소</h4>
                                        <p className="text-slate-500 text-sm">경기도 수원시 영통구</p>
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
