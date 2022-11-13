/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
    // {
    //   displayName: true,
    //   ssr: true,
    //   fileName: true,
    //   topLevelImportPaths: [],
    //   meaninglessFileNames: ["index"],
    //   cssProp: true,
    //   namespace: "",
    // },
  },
};

module.exports = nextConfig;
