import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;

import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";


for (let i = 65; i <= 90; i++) {
  console.log(String.fromCharCode(i));
}

console.log(process.env.VERCEL);
console.log(!process.env.VERCEL);


if (!process.env.VERCEL) {
  initOpenNextCloudflareForDev();
}
