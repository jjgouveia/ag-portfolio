/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.gnatus.com.br',
                port: '',
                pathname: '/**',
            },
        ],
    },
}

module.exports = nextConfig
