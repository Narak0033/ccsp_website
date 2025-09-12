import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
import createMDX from '@next/mdx';

const withNextIntl = createNextIntlPlugin();
const withMDX = createMDX({ extension: /\.mdx?$/ });

const nextConfig: NextConfig = {
  pageExtensions: ['ts', 'tsx', 'mdx'],
  experimental: { mdxRs: true },
  reactStrictMode: true,
};

export default withNextIntl(withMDX(nextConfig));
