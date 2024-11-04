/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    path: '/',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
        port: '',
        pathname: '/**'
      }
    ]
  }
};

export default nextConfig;
