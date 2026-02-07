import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "이용 요금 안내 | 도훈방문간호 센터",
    description: "방문간호 서비스 이용 요금 안내. 노인장기요양보험 적용 시 본인부담금 15% 이하로 이용 가능합니다.",
};

const pricingPlans = [
    {
        grade: "1등급",
        desc: "일상생활 전반에 도움 필요",
        monthlyLimit: "약 170만원",
        selfPay: "최대 15%",
        highlight: false,
    },
    {
        grade: "2등급",
        desc: "일상생활 상당 부분 도움 필요",
        monthlyLimit: "약 150만원",
        selfPay: "최대 15%",
        highlight: true,
    },
    {
        grade: "3-5등급",
        desc: "일상생활 일부 도움 필요",
        monthlyLimit: "약 90~130만원",
        selfPay: "최대 15%",
        highlight: false,
    },
];

const visitTypes = [
    { type: "30분 미만 방문", price: "약 39,400원", selfPay: "약 5,900원" },
    { type: "30분~60분 방문", price: "약 47,600원", selfPay: "약 7,100원" },
    { type: "60분 이상 방문", price: "약 56,100원", selfPay: "약 8,400원" },
];

export default function PricingPage() {
    return (
        <>
            <Header />
            <main className="flex-1">
                {/* Hero */}
                <section className="relative w-full bg-gradient-to-br from-primary/5 to-blue-50 py-20 px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wide mb-4">
                            Pricing
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight break-keep">
                            합리적인 이용 요금
                        </h1>
                        <p className="mt-4 text-lg text-slate-600 break-keep max-w-2xl mx-auto">
                            노인장기요양보험 적용 시 <span className="text-primary font-bold">본인부담금 15% 이하</span>로
                            전문 방문간호 서비스를 이용하실 수 있습니다.
                        </p>
                    </div>
                </section>

                {/* Insurance Info */}
                <section className="w-full bg-white py-16 px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-blue-50 border border-blue-100 rounded-3xl p-8 md:p-12">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-white rounded-2xl text-primary shadow-sm">
                                    <span className="material-symbols-outlined text-3xl">verified_user</span>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-slate-900 mb-3">건강보험 혜택 안내</h2>
                                    <p className="text-slate-600 leading-relaxed break-keep">
                                        노인장기요양보험 등급 판정을 받으신 분은 월 한도액 내에서 방문간호 서비스를 이용하실 수 있습니다.
                                        <strong className="text-primary"> 일반 수급자는 15%, 경감 대상자는 9~6%, 기초생활수급자는 무료</strong>로 이용 가능합니다.
                                        등급 신청이 필요하시면 저희 센터에서 무료로 대행해 드립니다.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Grade-based Pricing */}
                <section className="w-full bg-slate-50 py-20 px-6">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-slate-900 mb-3">등급별 월 한도액</h2>
                            <p className="text-slate-500">장기요양등급에 따른 월 이용 가능 금액입니다.</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            {pricingPlans.map((plan) => (
                                <div
                                    key={plan.grade}
                                    className={`relative rounded-3xl p-8 ${plan.highlight
                                            ? "bg-primary text-white shadow-xl shadow-primary/20"
                                            : "bg-white border border-slate-200"
                                        }`}
                                >
                                    {plan.highlight && (
                                        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-slate-900 text-xs font-bold px-3 py-1 rounded-full">
                                            가장 많이 이용
                                        </span>
                                    )}
                                    <div className="text-center">
                                        <h3 className={`text-2xl font-bold ${plan.highlight ? "text-white" : "text-slate-900"}`}>
                                            {plan.grade}
                                        </h3>
                                        <p className={`text-sm mt-1 ${plan.highlight ? "text-white/80" : "text-slate-500"}`}>
                                            {plan.desc}
                                        </p>
                                        <div className={`mt-6 text-4xl font-bold ${plan.highlight ? "text-white" : "text-primary"}`}>
                                            {plan.monthlyLimit}
                                        </div>
                                        <p className={`text-sm mt-2 ${plan.highlight ? "text-white/80" : "text-slate-500"}`}>
                                            월 한도액
                                        </p>
                                        <div className={`mt-6 py-3 px-4 rounded-xl ${plan.highlight ? "bg-white/20" : "bg-slate-50"}`}>
                                            <span className={`font-bold ${plan.highlight ? "text-white" : "text-slate-700"}`}>
                                                본인부담금 {plan.selfPay}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Visit-based Pricing */}
                <section className="w-full bg-white py-20 px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-slate-900 mb-3">방문 시간별 요금</h2>
                            <p className="text-slate-500">1회 방문 기준 서비스 비용입니다. (2024년 기준)</p>
                        </div>

                        <div className="overflow-hidden rounded-2xl border border-slate-200">
                            <table className="w-full">
                                <thead className="bg-slate-50">
                                    <tr>
                                        <th className="text-left px-6 py-4 font-bold text-slate-700">방문 유형</th>
                                        <th className="text-center px-6 py-4 font-bold text-slate-700">서비스 비용 (1회)</th>
                                        <th className="text-center px-6 py-4 font-bold text-slate-700">본인부담금 (15%)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {visitTypes.map((v, idx) => (
                                        <tr key={v.type} className={idx !== visitTypes.length - 1 ? "border-b border-slate-100" : ""}>
                                            <td className="px-6 py-5 font-medium text-slate-900">{v.type}</td>
                                            <td className="px-6 py-5 text-center text-slate-600">{v.price}</td>
                                            <td className="px-6 py-5 text-center font-bold text-primary">{v.selfPay}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <p className="mt-4 text-sm text-slate-500 text-center">
                            * 위 금액은 일반 수급자 기준이며, 경감 대상자 및 기초생활수급자는 본인부담금이 감면됩니다.
                        </p>
                    </div>
                </section>

                {/* CTA */}
                <section className="w-full bg-slate-900 py-16 px-6 text-center">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 break-keep">
                            정확한 비용이 궁금하신가요?
                        </h2>
                        <p className="text-slate-400 mb-8 break-keep">
                            어르신의 장기요양등급과 필요한 서비스에 따라 비용이 달라질 수 있습니다.<br />
                            무료 상담을 통해 정확한 견적을 확인해보세요.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/contact"
                                className="flex items-center justify-center rounded-full h-12 px-8 bg-primary hover:bg-blue-600 text-white font-bold transition-all"
                            >
                                무료 상담 신청
                            </Link>
                            <a
                                href="tel:031-000-0000"
                                className="flex items-center justify-center gap-2 rounded-full h-12 px-8 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold transition-all"
                            >
                                <span className="material-symbols-outlined text-lg">call</span>
                                031-000-0000
                            </a>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
