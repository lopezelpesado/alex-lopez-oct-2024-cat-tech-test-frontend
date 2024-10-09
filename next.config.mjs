// @ts-check

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/welcome/ff535484-6880-4653-b06e-89983ecf4ed5",
        permanent: true,
      },
    ];
  },
  /* config options here */
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
