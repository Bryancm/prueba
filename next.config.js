/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["randomuser.me", "img.dummyapi.io"],
  },
  env: {
    API_ID: "62222f5a961f3866dd9375f0", // cambiar en prod
  },
};

module.exports = nextConfig;
