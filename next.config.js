// next.config.js
const HostsEnum = {
  GARAVITO: 'garavito.dev',
  MISSING_GATE: 'missinggate.org',
};

/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  sassOptions: {
    includePaths: [
      path.join(__dirname, 'src/app/sass'),           // Directorio global
      path.join(__dirname, 'src/app/garavito/sass'),   // Directorio específico de garavito
      path.join(__dirname, 'src/app/missinggate/sass') // Directorio específico de missinggate
    ],
  },
  images: {
    domains: ['lastfm.freetls.fastly.net'],
  },
  async rewrites() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: HostsEnum.GARAVITO,
          },
        ],
        destination: '/garavito/:path*',
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: HostsEnum.MISSING_GATE,
          },
        ],
        destination: '/missinggate/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
