import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  // eslint :{
  //   ignoreDuringBuilds: true
  // },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'landingfoliocom.imgix.net',
        port: ''
      },
      {
        protocol: 'https',
        hostname: 'cdn.rareblocks.xyz',
        port: ''
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        port: ''
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**'
      }
    ]
  }
}

export default nextConfig
