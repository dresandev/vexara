/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/api/auth/auth/:slug',
        destination: '#login',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
