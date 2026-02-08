import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

const basePath = process.env.NODE_ENV === 'production' ? '/care-center' : '';

export default function Home() {
    return (
        <>
            <Header />
            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative w-full bg-slate-800">
                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center min-h-[480px]">
                        {/* 텍스트 영역 */}
                        <div className="order-2 md:order-1 px-6 py-12 md:py-16">
                            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white leading-tight tracking-tight break-keep">
                                사랑하는 가족의<br />건강한 일상을 지킵니다
                            </h1>
                            <p className="mt-4 text-base text-slate-300 leading-relaxed break-keep max-w-md">
                                <span className="text-white font-medium">도훈방문간호센터</span>의 전문 간호사가 가정으로 방문하여 따뜻하고 체계적인 케어를 제공합니다.
                            </p>
                            <div className="mt-6 flex flex-wrap items-center gap-3">
                                <a
                                    href="tel:031-000-0000"
                                    className="inline-flex h-10 items-center gap-2 rounded-lg bg-primary px-4 text-sm font-medium text-white transition-colors hover:bg-primary-dark"
                                >
                                    <span className="material-symbols-outlined text-lg">call</span>
                                    031-000-0000
                                </a>
                                <Link
                                    href="/contact"
                                    className="inline-flex h-10 items-center gap-2 rounded-lg border border-slate-500 bg-slate-700 px-4 text-sm font-medium text-white transition-colors hover:bg-slate-600"
                                >
                                    상담 신청
                                </Link>
                            </div>
                        </div>
                        {/* 이미지 영역 - 세로 이미지를 온전히 보여줌 */}
                        <div className="order-1 md:order-2 h-64 md:h-full">
                            <img
                                alt="방문간호 서비스"
                                className="w-full h-full object-cover md:object-contain md:object-right"
                                src={`${basePath}/images/hero_new.jpg`}
                            />
                        </div>
                    </div>
                </section>

                {/* Trust Badges */}
                <section className="bg-white py-10 border-b border-slate-100">
                    <div className="mx-auto max-w-5xl px-6">
                        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
                            {[
                                { icon: "verified_user", title: "건강보험공단 인증", desc: "정식 인증 기관" },
                                { icon: "medical_services", title: "전문간호사 상주", desc: "면허 소지 전문가" },
                                { icon: "schedule", title: "신속한 방문", desc: "빠르고 정확한 케어" },
                                { icon: "favorite", title: "가족같은 케어", desc: "마음을 다하는 서비스" },
                            ].map((item) => (
                                <div key={item.icon} className="flex flex-col items-center text-center gap-2">
                                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-primary">
                                        <span className="material-symbols-outlined text-lg">{item.icon}</span>
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-medium text-slate-700 break-keep">{item.title}</h3>
                                        <p className="text-xs text-slate-400 break-keep">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Service Section */}
                <section className="bg-slate-50 py-14 md:py-16">
                    <div className="mx-auto max-w-5xl px-6">
                        <div className="text-center mb-10">
                            <span className="section-label mb-3">서비스 안내</span>
                            <h2 className="section-title break-keep">
                                종합 케어 솔루션
                            </h2>
                            <p className="mt-3 section-subtitle max-w-lg mx-auto break-keep">
                                어르신과 가족 모두가 편안한 일상을 누리실 수 있도록 맞춤형 전문 케어를 제공합니다.
                            </p>
                        </div>
                        <div className="grid gap-5 md:grid-cols-3">
                            {[
                                {
                                    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop",
                                    icon: "stethoscope",
                                    title: "방문간호",
                                    desc: "가정에서 편안하게 전문 간호사의 의료 체크, 투약관리 및 건강 모니터링 서비스를 받아보세요.",
                                },
                                {
                                    img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop",
                                    icon: "home_health",
                                    title: "가정간호",
                                    desc: "위생 지원, 식사 준비 및 따뜻한 말벗 서비스를 포함한 일상 생활 지원을 제공합니다.",
                                },
                                {
                                    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop",
                                    icon: "accessibility_new",
                                    title: "재활간호",
                                    desc: "입원 또는 부상 후 빠른 회복을 돕기 위한 전문적인 재활 운동 프로그램을 지원합니다.",
                                },
                            ].map((service) => (
                                <Link href="/services" key={service.title} className="service-card group">
                                    <div className="aspect-[3/2] w-full overflow-hidden">
                                        <img
                                            alt={service.title}
                                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                            src={service.img}
                                        />
                                    </div>
                                    <div className="p-5">
                                        <div className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-primary">
                                            <span className="material-symbols-outlined text-base">{service.icon}</span>
                                        </div>
                                        <h3 className="text-base font-semibold text-slate-800 mb-1">{service.title}</h3>
                                        <p className="text-sm text-slate-500 leading-relaxed break-keep">{service.desc}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="bg-slate-800 py-14 px-6">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-xl md:text-2xl font-semibold text-white leading-tight break-keep">
                            지금 바로 상담받아보세요
                        </h2>
                        <p className="mt-2 text-slate-400 text-sm break-keep">
                            오랜 신뢰와 경험으로 정성껏 모시겠습니다.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 mt-6 justify-center">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center h-10 px-5 bg-primary hover:bg-primary-dark text-white text-sm font-medium rounded-lg transition-colors"
                            >
                                상담 신청하기
                            </Link>
                            <a
                                href="tel:031-000-0000"
                                className="inline-flex items-center justify-center h-10 px-5 bg-slate-700 hover:bg-slate-600 text-white border border-slate-600 text-sm font-medium rounded-lg transition-colors"
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
