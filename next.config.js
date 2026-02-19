'use client';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['example.com'], // Add your image domains here
  },
  env: {
    AI_API_KEY: process.env.AI_API_KEY,
    ANOTHER_ENV_VARIABLE: process.env.ANOTHER_ENV_VARIABLE,
  },
};

module.exports = nextConfig;