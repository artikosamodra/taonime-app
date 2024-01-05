/** @type {import('next').NextConfig} */
const nextConfig = {
  //pro img from http.
  images: {
    remotePatterns: [
      {
        hostname: "cdn.myanimelist.net", //get source link from cdn animelist
      },
    ],
  },
};

module.exports = nextConfig;
