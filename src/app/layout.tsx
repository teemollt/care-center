import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "도훈방문간호 센터 | 수원 영통구 전문 방문간호",
    description: "경기도 수원시 영통구 전문 방문간호 서비스. 가족 같은 세심한 케어, 건강보험 적용 가능. 무료 상담 031-000-0000",
    keywords: "방문간호, 수원, 영통구, 가정간호, 재활간호, 노인장기요양보험",
    openGraph: {
        title: "도훈방문간호 센터",
        description: "사랑하는 가족의 건강한 일상을 지킵니다",
        type: "website",
        locale: "ko_KR",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko">
            <head>
                <link rel="stylesheet" as="style" crossOrigin="anonymous" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body className="flex min-h-screen flex-col">
                {children}
            </body>
        </html>
    );
}
