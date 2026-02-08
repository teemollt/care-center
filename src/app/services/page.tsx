import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "서비스 안내 | 도훈방문간호센터",
    description: "방문간호, 가정간호, 재활간호 서비스 안내. 전문 간호사가 가정을 방문하여 체계적인 케어를 제공합니다.",
};

const services = [
    {
        id: "visiting-nursing",
        icon: "ecg_heart",
        title: "방문간호 서비스",
        desc: "전문 간호사가 가정을 정기적으로 방문하여 혈압, 혈당 등 기초 건강 상태를 확인하고 투약 관리 및 욕창·상처 치료를 제공합니다. 병원에 가지 않아도 집에서 편안하게 전문적인 케어를 받으실 수 있습니다.",
        img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop",
        highlight: {
            icon: "savings",
            title: "건강보험 혜택",
            text: "노인장기요양보험 적용 시 본인부담금의 85~100%를 국비로 지원받으실 수 있습니다.",
        },
    },
    {
        id: "home-nursing",
        icon: "medication_liquid",
        title: "가정간호 서비스",
        desc: "퇴원 후에도 안심하세요. 가정전문간호사가 방문하여 튜브 관리(비위관, 유치도뇨관), 주사 처치, 검체 채취 등 병원 수준의 의료 처치를 제공합니다.",
        img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop",
        features: ["퇴원 후 전문적인 처치 필요시", "콧줄(L-tube), 소변줄(Foley) 관리", "각종 수액 및 주사 요법"],
    },
    {
        id: "rehabilitation",
        icon: "accessibility_new",
        title: "재활간호 서비스",
        desc: "뇌졸중, 파킨슨 등 노인성 질환으로 인한 신체 기능 저하를 막기 위해 관절 구축 예방 운동, 보행 훈련, 인지 재활 프로그램을 진행합니다.",
        img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop",
        programs: [
            { icon: "directions_walk", name: "보행 훈련" },
            { icon: "psychology", name: "인지 재활" },
        ],
    },
];

const faqs = [
    {
        q: "건강보험 적용이 되나요?",
        a: "네, 가능합니다. 노인장기요양보험 등급을 받으신 어르신의 경우, 방문간호 서비스 비용의 85%에서 최대 100%까지 국비 지원을 받으실 수 있습니다.",
    },
    {
        q: "어떤 분들이 이용할 수 있나요?",
        a: "65세 이상 거동이 불편하신 어르신이나, 65세 미만이어도 노인성 질병(치매, 뇌혈관 질환 등)을 앓고 계신 분들이 이용 대상입니다.",
    },
    {
        q: "간호사 선생님은 지정할 수 있나요?",
        a: "초기 상담 시 어르신의 건강 상태와 성향, 거주 지역을 고려하여 최적의 담당 간호사를 배정해 드립니다.",
    },
];

export default function ServicesPage() {
    return (
        <>
            <Header />
            <main className="flex-1">
                {/* Hero */}
                <section className="page-hero">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <span className="section-label mb-3">서비스 안내</span>
                        <h1 className="page-hero-title">
                            가족 같은 세심한 케어
                        </h1>
                        <p className="page-hero-desc max-w-xl mx-auto">
                            경기도 수원시 영통구 중심의 프리미엄 케어 서비스.<br />
                            내 가족을 모시는 마음으로 어르신의 건강과 행복을 책임집니다.
                        </p>
                    </div>
                </section>

                {/* Services */}
                <section className="w-full bg-white py-14 px-6">
                    <div className="max-w-5xl mx-auto flex flex-col gap-16">
                        {services.map((service, idx) => (
                            <div
                                key={service.id}
                                className={`flex flex-col ${idx % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-8 md:gap-12`}
                            >
                                <div className="w-full md:w-1/2">
                                    <div className="rounded-xl overflow-hidden aspect-[4/3] bg-slate-100">
                                        <img
                                            src={service.img}
                                            alt={service.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2 flex flex-col gap-4">
                                    <div className="flex items-center gap-2 text-primary text-sm font-medium">
                                        <span className="material-symbols-outlined text-base">{service.icon}</span>
                                        <span>{service.title}</span>
                                    </div>
                                    <h2 className="text-xl md:text-2xl font-semibold text-slate-800">{service.title}</h2>
                                    <p className="text-slate-500 leading-relaxed break-keep">{service.desc}</p>

                                    {service.highlight && (
                                        <div className="mt-2 p-4 bg-slate-50 border border-slate-100 rounded-lg">
                                            <div className="flex items-start gap-3">
                                                <span className="material-symbols-outlined text-primary text-lg">{service.highlight.icon}</span>
                                                <div>
                                                    <h4 className="text-sm font-semibold text-slate-700">{service.highlight.title}</h4>
                                                    <p className="text-sm text-slate-500 mt-0.5 break-keep">{service.highlight.text}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {service.features && (
                                        <ul className="flex flex-col gap-1.5 mt-1">
                                            {service.features.map((f) => (
                                                <li key={f} className="flex items-center gap-2 text-sm text-slate-600">
                                                    <span className="material-symbols-outlined text-green-500 text-sm">check</span>
                                                    {f}
                                                </li>
                                            ))}
                                        </ul>
                                    )}

                                    {service.programs && (
                                        <div className="grid grid-cols-2 gap-3 mt-1">
                                            {service.programs.map((p) => (
                                                <div key={p.name} className="p-3 bg-slate-50 rounded-lg border border-slate-100 text-center">
                                                    <span className="material-symbols-outlined text-xl text-primary">{p.icon}</span>
                                                    <p className="text-sm font-medium text-slate-700 mt-1">{p.name}</p>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* FAQ */}
                <section className="w-full bg-slate-50 py-14 px-6 border-t border-slate-100">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-8">
                            <h2 className="section-title">자주 묻는 질문</h2>
                            <p className="section-subtitle mt-2">서비스 이용에 대해 궁금하신 점을 확인해보세요.</p>
                        </div>
                        <div className="flex flex-col gap-3">
                            {faqs.map((faq) => (
                                <details
                                    key={faq.q}
                                    className="group bg-white rounded-lg border border-slate-100 overflow-hidden"
                                >
                                    <summary className="flex items-center justify-between p-4 cursor-pointer select-none">
                                        <h3 className="text-sm font-medium text-slate-700 group-hover:text-slate-900">{faq.q}</h3>
                                        <span className="material-symbols-outlined text-slate-400 text-lg group-open:rotate-180 transition-transform">
                                            expand_more
                                        </span>
                                    </summary>
                                    <div className="px-4 pb-4 text-sm text-slate-500 leading-relaxed break-keep border-t border-slate-50 pt-3">
                                        {faq.a}
                                    </div>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
