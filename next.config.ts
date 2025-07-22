import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
   images: {
    formats: ['image/avif', 'image/webp'], // Modern formats
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840], // Standard device sizes
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], // Image variants
  },
};

export default nextConfig;
