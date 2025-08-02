// import { NextConfig } from 'next';

// // Bundle analyzer only works with Webpack; skip if using Turbopack
// const isAnalyze = process.env.ANALYZE === 'true';
// const usingTurbopack = process.env.NEXT_RUNTIME === 'edge' || process.env.TURBOPACK === '1';

// const nextConfig: NextConfig = {
//   reactStrictMode: true,
//   images: {
//     domains: ['yourdomain.com'],
//     formats: ['image/webp'],
//   },
//   experimental: {
//     scrollRestoration: true,
//   },
//   async headers() {
//     return [
//       {
//         source: '/(.*)',
//         headers: [
//           {
//             key: 'Cache-Control',
//             value: 'public, max-age=31536000, immutable',
//           },
//         ],
//       },
//     ];
//   },
// };

// // Only apply Webpack plugins if not using Turbopack
// const config = !usingTurbopack && isAnalyze
//   ? require('@next/bundle-analyzer')({ enabled: true })(nextConfig)
//   : nextConfig;

// export default config;
