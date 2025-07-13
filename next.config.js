/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  experimental: {
    // Enable better CSS hot reloading
    optimizeCss: false,
  },
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      // Force recompilation when CSS files change
      config.watchOptions = {
        ...config.watchOptions,
        poll: 1000, // Check for changes every second
        aggregateTimeout: 300, // Delay rebuild by 300ms
      };
    }
    return config;
  },
};

module.exports = nextConfig; 