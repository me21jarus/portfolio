// next.config.mjs
import { config } from 'dotenv';
config(); // Load environment variables from .env.local

const nextConfig = {
  reactStrictMode: true,
  env: {
    MONGODB_URI: process.env.MONGODB_URI
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'example.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;