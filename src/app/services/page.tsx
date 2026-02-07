import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "서비스 안내 | 도훈방문간호 센터",
    description: "방문간호, 가정간호, 재활간호 서비스 안내. 전문 간호사가 가정을 방문하여 체계적인 케어를 제공합니다.",
};

const services = [
    {
        id: "visiting-nursing",
        icon: "ecg_heart",
        label: "Care Service",
        title: "방문간호 서비스",
        desc: "전문 간호사가 수원 영통구 지역 가정을 정기적으로 방문하여 혈압, 혈당 등 기초 건강 상태를 확인하고 투약 관리 및 욕창/상처 치료를 제공합니다. 병원에 가지 않아도 집에서 편안하게 전문적인 케어를 받으실 수 있습니다.",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAweWcnCY-v8TyV8IncfkVlGPsDO8CARzn02P71n8Hsdnhl5xl7qggxJ_I6CVr5xbINZ17rupMUdsG8VJIh7XpI-hN0JNsVL2S6yXNN0h0aklU2r2Mnl3Bl2keT6BARgM3pG8_YcEFHzzGcIUQKI4-6dLxOQD69hkmJEeKWY_ClINwCOq4DzZF1thcvHe4RIGa5e6dgzSOewP0SXYzHndG8INErGhHJj5h-8DBZ6lvHNfftR5rRyLc08ZIAIDJdxQ7p9g5oHFR82GM",
        features: null,
        highlight: {
            icon: "savings",
            title: "건강보험 혜택 안내",
            text: "노인장기요양보험 적용 시 본인부담금의 85~100%를 국비로 지원받으실 수 있어 경제적 부담이 적습니다.",
        },
    },
    {
        id: "home-nursing",
        icon: "medication_liquid",
        label: "Medical Support",
        title: "가정간호 서비스",
        desc: "퇴원 후에도 안심하세요. 가정전문간호사가 방문하여 튜브 관리(비위관, 유치도뇨관), 주사 처치, 검체 채취 등 병원 수준의 의료 처치를 제공합니다. 오랜 임상 경험을 바탕으로 세심하게 살핍니다.",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC6msmM0Ggo7ZDu604lLWYY6MTpyKyKekVZ2FCxyPj3rFg6HxkufRrFuYTymI6ig6qe5W_Rk6osOHirFT6UvFJ5hBoscmvVs2W5asxlQnq3vrTd0XLkyaIXIptSWBpahkxq6GKESFuxoyf2VeTEIYawQGE1ijWS-p5wAjZ6_UBzag44I7fX-xsVEH8_KivUeTXobKZpeww8U-2vKybxDDkzRSYxw0pba7jC3pUK7wu6r9LpreQKom6FcGz5X5pLdyF8tVWbxTEuydA",
        features: ["퇴원 후 전문적인 처치 필요시", "콧줄(L-tube), 소변줄(Foley) 관리", "각종 수액 및 주사 요법"],
        highlight: null,
    },
    {
        id: "rehabilitation",
        icon: "accessibility_new",
        label: "Rehabilitation",
        title: "재활간호 서비스",
        desc: "뇌졸중, 파킨슨 등 노인성 질환으로 인한 신체 기능 저하를 막기 위해 관절 구축 예방 운동, 보행 훈련, 인지 재활 프로그램을 진행합니다. 어르신이 다시 일상으로 돌아오실 수 있도록 따뜻하게 돕습니다.",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCVFLAJv9pa-ofD-EukxeU1aapei-DA4rHHQPJo8ACtJ4xVJkawqiIlgtO9PxUBH-oc0wJuKuetp5hz9Fdu8ipmdtS1W1woI5yphezhHztw3Wtt1a1iy-Rdxs-T2RK7uZQoBzaAaBJkimLjv0dXjRbK3PB09Ox-J1vukAN7G20FLFlCzSKNxyWQc9mrFh2griBBVPN3TSXtpb_WYCix5aqzAX4t3xQK4eu66H-SAAu40al732kCYD2bnc3TIcb7tdpGIl2ynNIjdOo",
        features: null,
        programs: [
            { icon: "directions_walk", name: "보행 훈련" },
            { icon: "psychology", name: "인지 재활" },
        ],
    },
];

const faqs = [
    {
        q: "건강보험 적용이 되나요?",
        a: "네, 가능합니다. 노인장기요양보험 등급을 받으신 어르신의 경우, 방문간호 서비스 비용의 85%에서 최대 100%까지 국비 지원을 받으실 수 있습니다. 등급 신청 절차가 어려우시다면 저희 도훈방문간호 센터에서 대행해 드리고 있습니다.",
    },
    {
        q: "어떤 분들이 이용할 수 있나요?",
        a: "65세 이상 거동이 불편하신 어르신이나, 65세 미만이어도 노인성 질병(치매, 뇌혈관 질환 등)을 앓고 계신 분들이 이용 대상입니다. 수원 영통구 및 인근 지역 거주자라면 누구나 상담 가능합니다.",
    },
    {
        q: "간호사 선생님은 지정할 수 있나요?",
        a: "초기 상담 시 어르신의 건강 상태와 성향, 거주 지역을 고려하여 최적의 담당 간호사를 배정해 드립니다. 서비스 이용 중 담당자 교체를 원하시는 경우 센터로 문의 주시면 상담 후 조정 가능합니다.",
    },
];

export default function ServicesPage() {
    return (
        <>
            <Header />
            <main className="flex-1">
                {/* Hero */}
                <section className="relative w-full bg-[#f5f5f7] py-24 md:py-32 px-6 flex flex-col items-center justify-center text-center overflow-hidden">
                    <div className="max-w-3xl flex flex-col items-center gap-6 animate-fade-in-up">
                        <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-primary text-xs font-bold tracking-wide mb-2">
                            오랜 신뢰와 경험
                        </span>
                        <h1 className="text-slate-900 text-4xl md:text-6xl font-extrabold leading-tight tracking-tight break-keep">
                            가족 같은 세심한 케어,<br />도훈방문간호 센터
                        </h1>
                        <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed max-w-2xl break-keep">
                            경기도 수원시 영통구 중심의 프리미엄 케어 서비스.<br className="hidden md:block" />
                            내 가족을 모시는 마음으로 어르신의 건강과 행복을 책임집니다.
                        </p>
                    </div>
                </section>

                {/* Services */}
                <section className="w-full bg-white py-20 px-6">
                    <div className="max-w-6xl mx-auto flex flex-col gap-32">
                        {services.map((service, idx) => (
                            <div
                                key={service.id}
                                className={`flex flex-col ${idx % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-12 md:gap-20 group`}
                            >
                                <div className="w-full md:w-1/2 relative">
                                    <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] bg-slate-100 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-shadow duration-500">
                                        <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent z-10"></div>
                                        <img
                                            src={service.img}
                                            alt={service.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2 flex flex-col gap-6">
                                    <div className="flex items-center gap-2 text-primary font-bold tracking-wide uppercase text-sm">
                                        <span className="material-symbols-outlined text-lg">{service.icon}</span>
                                        <span>{service.label}</span>
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">{service.title}</h2>
                                    <p className="text-slate-600 text-lg leading-relaxed break-keep">{service.desc}</p>

                                    {service.highlight && (
                                        <div className="mt-4 p-6 bg-blue-50/50 border border-blue-100 rounded-2xl flex flex-col gap-3">
                                            <div className="flex items-start gap-3">
                                                <div className="p-2 bg-white rounded-full text-primary shadow-sm">
                                                    <span className="material-symbols-outlined text-xl">{service.highlight.icon}</span>
                                                </div>
                                                <div>
                                                    <h4 className="text-slate-900 font-bold text-lg">{service.highlight.title}</h4>
                                                    <p className="text-slate-600 mt-1 leading-relaxed break-keep">
                                                        {service.highlight.text.split("85~100%")[0]}
                                                        <span className="text-primary font-bold">본인부담금의 85~100%</span>
                                                        {service.highlight.text.split("85~100%")[1]}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {service.features && (
                                        <ul className="flex flex-col gap-3 mt-2">
                                            {service.features.map((f) => (
                                                <li key={f} className="flex items-center gap-3 text-slate-700 font-medium">
                                                    <span className="material-symbols-outlined text-green-500">check_circle</span>
                                                    {f}
                                                </li>
                                            ))}
                                        </ul>
                                    )}

                                    {service.programs && (
                                        <div className="grid grid-cols-2 gap-4 mt-2">
                                            {service.programs.map((p) => (
                                                <div key={p.name} className="p-4 bg-slate-50 rounded-xl border border-slate-100 text-center">
                                                    <span className="material-symbols-outlined text-3xl text-primary mb-2">{p.icon}</span>
                                                    <p className="font-bold text-slate-800">{p.name}</p>
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
                <section className="w-full bg-[#f8fafc] py-24 px-6 border-t border-slate-100">
                    <div className="max-w-3xl mx-auto flex flex-col gap-10">
                        <div className="text-center flex flex-col gap-4">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">자주 묻는 질문</h2>
                            <p className="text-slate-500">서비스 이용에 대해 궁금하신 점을 확인해보세요.</p>
                        </div>
                        <div className="flex flex-col gap-4">
                            {faqs.map((faq) => (
                                <details
                                    key={faq.q}
                                    className="group bg-white rounded-xl shadow-sm border border-slate-200 open:ring-2 open:ring-primary/10 overflow-hidden transition-all duration-300"
                                >
                                    <summary className="flex items-center justify-between p-6 cursor-pointer select-none">
                                        <h3 className="text-lg font-bold text-slate-800 group-hover:text-primary transition-colors">{faq.q}</h3>
                                        <span className="material-symbols-outlined text-slate-400 transition-transform duration-300 group-open:rotate-180">
                                            expand_more
                                        </span>
                                    </summary>
                                    <div className="px-6 pb-6 pt-0 text-slate-600 leading-relaxed border-t border-transparent group-open:border-slate-100 group-open:pt-4 transition-all break-keep">
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
