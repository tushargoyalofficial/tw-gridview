/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/tw-gridview",
  output: "export", // <=== enables static exports
  distDir: "dist",
  reactStrictMode: true,
};

export default nextConfig;
