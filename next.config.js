/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.dicebear.com",
        port: "",
        pathname: "**",
      },
    ],
    // enable dangerous use of SVG images
    dangerouslyAllowSVG: true,
  },
};

module.exports = nextConfig;
