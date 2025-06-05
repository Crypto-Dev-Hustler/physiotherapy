// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// module.exports = {
//   env: {
//     customKey: "customValue",
//   }
// }

// export default nextConfig;


import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  devIndicators: false,  // <-- disable all dev indicators (build activity, etc.)
};

export default nextConfig;
