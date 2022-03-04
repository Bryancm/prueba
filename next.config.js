/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.ctfassets.net", "randomuser.me"],
  },
  env: {
    API_ID: "62222f5a961f3866dd9375f0",
  },
};

module.exports = nextConfig;
