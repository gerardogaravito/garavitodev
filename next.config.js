/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['lastfm.freetls.fastly.net'], // Agrega aquí el host de la imagen
  },
};

module.exports = nextConfig;
