// next.config.js
module.exports = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "uploads.pixecurity.com",
      },
    ],
  },
};
