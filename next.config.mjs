/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    output: 'export',
    // GitHub Pages 배포를 위한 설정 (레포지토리 이름이 care-center인 경우)
    basePath: isProd ? '/care-center' : '',
    assetPrefix: isProd ? '/care-center' : '',
    images: {
        unoptimized: true,
    },
    trailingSlash: true,
};

export default nextConfig;
