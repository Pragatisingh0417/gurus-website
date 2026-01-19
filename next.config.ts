// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: "export",
//   images: {
//     unoptimized: true,
//   },
// };

// module.exports = nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true, 
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
