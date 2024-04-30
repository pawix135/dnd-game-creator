/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "localhost",
        pathname: "/image",
        protocol: "http",
      },
    ],
  },
};

export default nextConfig;
