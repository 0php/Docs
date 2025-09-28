import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/get/latest.zip',
        destination: 'https://github.com/0php/Zero/archive/refs/heads/main.zip',
      },
    ];
  },
};

export default withMDX(config);
