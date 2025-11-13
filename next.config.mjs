/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Para SSG (Static Site Generation)
  images: {
    unoptimized: true, // Necesario para export estático
  },
};

export default nextConfig;
