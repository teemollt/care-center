import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <Header />
            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative flex h-[90vh] min-h-[600px] w-full items-center justify-center overflow-hidden bg-black">
                    <div className="absolute inset-0 z-0">
                        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 z-10"></div>
                        <img
                            alt="간호사와 어르신이 밝은 거실에서 대화하는 모습"
                            className="h-full w-full object-cover object-center opacity-90"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuByw0GJYuqq2tJ0GUOrgQ0tHZDjcholnh3-R3AQpiQFMtc2fM_L6Hs_CJQI2UG1iIoICaL5FmWRmmmrYg3GhCTpmL73XT476aREeQ82Eu9NX-RdQfrvkTKZlygu0fNv0DhFXx4d50_1gCFzT5WY6acX-DDnqqEPsYbivqiNgKAnL-rf_A4iBQ0dhxSxnESYqomMJY-Gd01TMEudyuwICFVynUsHRebZ64FKWCus-NrFQk0p3C88zkWFE2TGypHT1CihockeKzOVya4"
                        />
                    </div>
                    <div className="relative z-20 flex w-full max-w-[1000px] flex-col items-center px-6 text-center">
                        <h1 className="font-display text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.2] drop-shadow-2xl break-keep animate-fade-in-up">
                            사랑하는 가족의 <br className="hidden sm:block" /> 건강한 일상을 지킵니다
                        </h1>
                        <p className="mt-6 max-w-2xl text-lg font-light leading-relaxed text-gray-200 sm:text-xl md:text-2xl break-keep animate-fade-in-up">
                            <span className="font-medium text-white">도훈방문간호 센터</span>의 전문 간호사가 직접 가정으로 방문하여 따뜻하고 체계적인 케어를 제공합니다.
                        </p>
                        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 animate-fade-in-up">
                            <a
                                href="tel:031-000-0000"
                                className="flex h-12 min-w-[180px] items-center justify-center gap-2 rounded-full bg-primary px-8 text-base font-semibold text-white transition-all hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/20"
                            >
                                <span className="material-symbols-outlined text-[20px]">call</span>
                                031-000-0000
                            </a>
                            <Link
                                href="/contact"
                                className="flex h-12 min-w-[160px] items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 text-base font-semibold text-white backdrop-blur-md transition-all hover:bg-white/20"
                            >
                                <span className="material-symbols-outlined text-[20px]">chat_bubble</span>
                                상담 신청
                            </Link>
                        </div>
                    </div>
                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
                        <span className="material-symbols-outlined text-4xl">keyboard_arrow_down</span>
                    </div>
                </section>

                {/* Trust Badges */}
                <section className="bg-surface-light py-16 border-b border-gray-100">
                    <div className="mx-auto max-w-[1200px] px-6">
                        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                            {[
                                { icon: "verified_user", title: "건강보험공단 인증", desc: "정식 인증 기관" },
                                { icon: "medical_services", title: "전문간호사 상주", desc: "면허 소지 전문가" },
                                { icon: "history", title: "오랜 신뢰와 경험", desc: "믿을 수 있는 동반자" },
                                { icon: "favorite", title: "가족 같은 세심한 케어", desc: "마음을 다하는 서비스" },
                            ].map((item) => (
                                <div key={item.icon} className="flex flex-col items-center gap-3 text-center md:items-start md:text-left group">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                                        <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 break-keep">{item.title}</h3>
                                        <p className="text-sm text-gray-500 break-keep">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Service Section Title */}
                <section className="bg-surface-light pt-20 pb-10">
                    <div className="mx-auto max-w-[1000px] px-6 text-center">
                        <span className="mb-2 inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-primary">Service</span>
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-5xl break-keep">
                            도훈방문간호 센터의 <br />종합 케어 솔루션
                        </h2>
                        <p className="mt-4 text-lg text-gray-500 break-keep">
                            어르신과 가족 모두가 편안한 일상을 누리실 수 있도록 맞춤형 전문 케어를 약속드립니다.
                        </p>
                    </div>
                </section>

                {/* Service Cards */}
                <section className="bg-surface-light pb-24">
                    <div className="mx-auto max-w-[1200px] px-6">
                        <div className="grid gap-8 md:grid-cols-3">
                            {[
                                {
                                    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDTrk8KWGnz_0PEUruK_lP4_X3GN6I3Tz02JXkC2Ji3ketEIqy5Mg1fu6uYp2YMbDb-lqpBw7jwovkMQWSQS8tWpmZBi1-Koa76I5dyRVwWX4e3sOurqAiCVjJJm_m8iDD5jpBBW0uULlCPUD4KoiA8V3WcEmtrrIi0vCe3FaPT_mw0kPmfMYz-XufpB5AddpPstcd0dCJ8NzvSLwbygND6UnSuixKklble2p7NJDkF5jHTlOqkFDUpaeySqEr0dBNoJ7QKMGyvDQU",
                                    icon: "stethoscope",
                                    iconBg: "bg-blue-50 text-primary",
                                    title: "방문간호",
                                    desc: "가정에서 편안하게 전문 간호사의 의료 체크, 투약 관리 및 건강 모니터링 서비스를 받아보세요.",
                                    label: "전문 간호사 방문",
                                    color: "text-primary",
                                },
                                {
                                    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC1c0-5VZ1kDPNJ-0kvVWmCrVklmjB-cVkfQ-TTcNf82bCU7f5XlcRVfBU0u-vKROqxGZgu68t3ln0-Rl67zeeJAJk5jyj5feUJGCA0Zp-2oIOgsGyrpa5r9BGyVACxHC_fjSnqgycQnychmLgFvcujUwLLwr3TkFvcKAZ2XsITJT7L0ojvNQdEf5jdaB3sDIp-6m1x1PmqjN7r0dUdUpfyZjnZ61t1WY94DfMZqUAi7wBW8LKGFzudBFFDDIICIesZ3Od4U5AsLkY",
                                    icon: "home_health",
                                    iconBg: "bg-teal-50 text-accent-teal",
                                    title: "가정간호",
                                    desc: "사랑하는 가족을 위한 위생 지원, 식사 준비 및 따뜻한 말벗 서비스를 포함한 일상 생활 지원을 제공합니다.",
                                    label: "일상 생활 지원",
                                    color: "text-accent-teal",
                                },
                                {
                                    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCGnEitOhWRbWz9ctEgvry9_gCJEJgQ6CyjP9167TJ1crg2vlkZ_hS6tSf6C6CYxuTz_XD6v6OoM4wje_LGJGm9DKQoHuxbGR_Hxf8nAVA2wvaC0ceHlvIfwvEZ1vCSpFD7cIzDBYL9TOByz9aeJ_DAUgMdlVNdOC3tNmZGAllkKCgskIWnENvfZ4Vt9YwqzQ4CLmrZTUTciqdEIOGdyIInkCiru2NQsu-mTccHQulX3xUVMhg4DRfCVjW4geO6fvzuhKvjzAciZm8",
                                    icon: "accessibility_new",
                                    iconBg: "bg-indigo-50 text-indigo-600",
                                    title: "재활간호",
                                    desc: "입원 또는 부상 후 빠른 회복을 돕기 위해 설계된 전문적인 재활 운동 및 신체 기능 향상 프로그램을 지원합니다.",
                                    label: "기능 회복 훈련",
                                    color: "text-indigo-600",
                                },
                            ].map((service) => (
                                <Link href="/services" key={service.title} className="group service-card">
                                    <div className="aspect-[4/3] w-full overflow-hidden">
                                        <img
                                            alt={service.title}
                                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            src={service.img}
                                        />
                                    </div>
                                    <div className="flex flex-1 flex-col justify-between p-8">
                                        <div>
                                            <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl ${service.iconBg}`}>
                                                <span className="material-symbols-outlined text-2xl">{service.icon}</span>
                                            </div>
                                            <h3 className="mb-2 text-2xl font-bold text-gray-900">{service.title}</h3>
                                            <p className="text-gray-500 leading-relaxed break-keep">{service.desc}</p>
                                        </div>
                                        <div className="mt-6 pt-6 border-t border-gray-100">
                                            <div className="flex items-center justify-between">
                                                <span className="text-sm font-medium text-gray-500">{service.label}</span>
                                                <span className={`material-symbols-outlined ${service.color}`}>chevron_right</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="w-full bg-slate-900 py-20 px-6 text-center">
                    <div className="max-w-4xl mx-auto flex flex-col items-center gap-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight break-keep">
                            망설이지 마시고 지금 상담받아보세요.
                            <span className="text-slate-400 text-2xl md:text-3xl font-medium mt-2 block">
                                오랜 신뢰와 경험으로 모시겠습니다.
                            </span>
                        </h2>
                        <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full justify-center">
                            <Link
                                href="/contact"
                                className="flex items-center justify-center rounded-full h-14 px-8 bg-primary hover:bg-blue-600 text-white text-lg font-bold shadow-lg shadow-blue-900/20 transition-all w-full sm:w-auto"
                            >
                                상담 신청하기
                            </Link>
                            <a
                                href="tel:031-000-0000"
                                className="flex items-center justify-center rounded-full h-14 px-8 bg-white/10 hover:bg-white/20 text-white border border-white/20 text-lg font-bold backdrop-blur-sm transition-all w-full sm:w-auto"
                            >
                                전화 문의 031-000-0000
                            </a>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
