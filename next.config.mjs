/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'preview.cruip.com',
        port: '',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'youtu.be',
        port: '',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
        port: '',
        search: '',
      },
    ],
  },
};

export default nextConfig;
