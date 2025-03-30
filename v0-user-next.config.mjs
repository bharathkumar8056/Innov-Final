/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable image optimization for external images
  images: {
    domains: ['v0.dev', 'placeholder.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    // Disable image optimization to ensure direct loading of images
    unoptimized: true,
  },
  // Add redirects for domain-specific routes
  async redirects() {
    return [
      {
        source: '/',
        destination: '/agro',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;

