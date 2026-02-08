import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "이용 요금 안내 | 도훈방문간호센터",
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
                <section className="page-hero">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <span className="section-label mb-3">이용 안내</span>
                        <h1 className="page-hero-title">
                            합리적인 이용 요금
                        </h1>
                        <p className="page-hero-desc max-w-xl mx-auto">
                            노인장기요양보험 적용 시 <span className="text-primary font-medium">본인부담금 15% 이하</span>로
                            전문 방문간호 서비스를 이용하실 수 있습니다.
                        </p>
                    </div>
                </section>

                {/* Insurance Info */}
                <section className="w-full bg-white py-12 px-6">
                    <div className="max-w-3xl mx-auto">
                        <div className="bg-slate-50 border border-slate-100 rounded-xl p-5 md:p-6">
                            <div className="flex items-start gap-3">
                                <div className="p-2 bg-white rounded-lg text-primary border border-slate-100">
                                    <span className="material-symbols-outlined text-xl">verified_user</span>
                                </div>
                                <div>
                                    <h2 className="text-base font-semibold text-slate-800 mb-1">건강보험 혜택 안내</h2>
                                    <p className="text-sm text-slate-500 leading-relaxed break-keep">
                                        노인장기요양보험 등급 판정을 받으신 분은 월 한도액 내에서 방문간호 서비스를 이용하실 수 있습니다.
                                        <span className="text-primary font-medium"> 일반 수급자 15%, 경감 대상자 9~6%, 기초생활수급자 무료</span>로 이용 가능합니다.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Grade-based Pricing */}
                <section className="w-full bg-slate-50 py-14 px-6 border-y border-slate-100">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-10">
                            <h2 className="section-title">등급별 월 한도액</h2>
                            <p className="section-subtitle mt-2">장기요양등급에 따른 월 이용 가능 금액입니다.</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-4">
                            {pricingPlans.map((plan) => (
                                <div
                                    key={plan.grade}
                                    className={`relative rounded-xl p-6 ${plan.highlight
                                        ? "bg-primary text-white"
                                        : "bg-white border border-slate-100"
                                        }`}
                                >
                                    {plan.highlight && (
                                        <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-yellow-400 text-slate-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                                            인기
                                        </span>
                                    )}
                                    <div className="text-center">
                                        <h3 className={`text-lg font-semibold ${plan.highlight ? "text-white" : "text-slate-800"}`}>
                                            {plan.grade}
                                        </h3>
                                        <p className={`text-xs mt-0.5 ${plan.highlight ? "text-white/70" : "text-slate-400"}`}>
                                            {plan.desc}
                                        </p>
                                        <div className={`mt-4 text-2xl font-bold ${plan.highlight ? "text-white" : "text-primary"}`}>
                                            {plan.monthlyLimit}
                                        </div>
                                        <p className={`text-xs mt-1 ${plan.highlight ? "text-white/70" : "text-slate-400"}`}>
                                            월 한도액
                                        </p>
                                        <div className={`mt-4 py-2 px-3 rounded-lg text-sm ${plan.highlight ? "bg-white/15" : "bg-slate-50"}`}>
                                            <span className={`font-medium ${plan.highlight ? "text-white" : "text-slate-600"}`}>
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
                <section className="w-full bg-white py-14 px-6">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-10">
                            <h2 className="section-title">방문 시간별 요금</h2>
                            <p className="section-subtitle mt-2">1회 방문 기준 서비스 비용입니다. (2024년 기준)</p>
                        </div>

                        <div className="overflow-hidden rounded-xl border border-slate-100">
                            <table className="w-full text-sm">
                                <thead className="bg-slate-50">
                                    <tr>
                                        <th className="text-left px-4 py-3 font-medium text-slate-600">방문 유형</th>
                                        <th className="text-center px-4 py-3 font-medium text-slate-600">서비스 비용</th>
                                        <th className="text-center px-4 py-3 font-medium text-slate-600">본인부담금</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {visitTypes.map((v, idx) => (
                                        <tr key={v.type} className={idx !== visitTypes.length - 1 ? "border-b border-slate-50" : ""}>
                                            <td className="px-4 py-3 font-medium text-slate-700">{v.type}</td>
                                            <td className="px-4 py-3 text-center text-slate-500">{v.price}</td>
                                            <td className="px-4 py-3 text-center font-medium text-primary">{v.selfPay}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <p className="mt-3 text-xs text-slate-400 text-center">
                            * 위 금액은 일반 수급자 기준이며, 경감 대상자 및 기초생활수급자는 본인부담금이 감면됩니다.
                        </p>
                    </div>
                </section>

                {/* CTA */}
                <section className="bg-slate-800 py-12 px-6">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-xl font-semibold text-white mb-2 break-keep">
                            정확한 비용이 궁금하신가요?
                        </h2>
                        <p className="text-slate-400 text-sm mb-6 break-keep">
                            무료 상담을 통해 정확한 견적을 확인해보세요.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center h-10 px-5 bg-primary hover:bg-primary-dark text-white text-sm font-medium rounded-lg transition-colors"
                            >
                                무료 상담 신청
                            </Link>
                            <a
                                href="tel:031-000-0000"
                                className="inline-flex items-center justify-center gap-2 h-10 px-5 bg-slate-700 hover:bg-slate-600 text-white text-sm font-medium rounded-lg transition-colors"
                            >
                                <span className="material-symbols-outlined text-base">call</span>
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
