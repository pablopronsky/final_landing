import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  // Allow access to remote image placeholder.
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**', // This allows any path under the hostname
      },
    ],
  },
  output: 'standalone',
  transpilePackages: ['motion'],
  // Unificación de dominio → https://cotacero.ar (301).
  // NOTA: el redirect por host sólo se ejecuta si el tráfico llega al server de
  // Next. Si el hosting/DNS resuelve cotacero.com.ar por separado, configurar
  // también allí el 301 a nivel host/CDN para no depender únicamente de esto.
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{type: 'host', value: 'www.cotacero.com.ar'}],
        destination: 'https://cotacero.ar/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [{type: 'host', value: 'cotacero.com.ar'}],
        destination: 'https://cotacero.ar/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [{type: 'host', value: 'www.cotacero.ar'}],
        destination: 'https://cotacero.ar/:path*',
        permanent: true,
      },
    ];
  },
  webpack: (config, {dev}) => {
    // HMR is disabled in AI Studio via DISABLE_HMR env var.
    // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
    if (dev && process.env.DISABLE_HMR === 'true') {
      config.watchOptions = {
        ignored: /.*/,
      };
    }
    return config;
  },
};

export default nextConfig;
