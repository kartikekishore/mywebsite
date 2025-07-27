import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',

  // // Set the base path to your GitHub repository name
  basePath: '/mywebsite',

  // Optional: assetPrefix can be the same as basePath for simplicity
  assetPrefix: '/mywebsite',

  // Optional: Disable image optimization if you are not using a custom loader
  // This is required for static exports ('next export')
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
