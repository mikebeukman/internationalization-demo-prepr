/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'demo-site-patterns.stream.prepr.io',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'prepr-example-content-demo-patterns.stream.prepr.io',
                port: '',
                pathname: '/**',
            },
        ],
    },
}

module.exports = nextConfig
