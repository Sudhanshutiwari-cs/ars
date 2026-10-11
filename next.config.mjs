/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      { source: '/about-us', destination: '/about' },
      { source: '/about-us/', destination: '/about' },
      { source: '/contact-us', destination: '/contact' },
      { source: '/contact-us/', destination: '/contact' },
      { source: '/ventures/ars-global-automotive', destination: '/global-automotive' },
      { source: '/ventures/ars-global-automotive/', destination: '/global-automotive' },
      { source: '/ventures/ars-motocorp', destination: '/ars-motocorp' },
      { source: '/ventures/ars-motocorp/', destination: '/ars-motocorp' },
      { source: '/ventures/ars-commercial-mobility', destination: '/commercial-mobility' },
      { source: '/ventures/ars-commercial-mobility/', destination: '/commercial-mobility' },
    ]
  },
}

export default nextConfig
