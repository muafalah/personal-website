/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "picsum.photos",
      "res.cloudinary.com",
      "miro.medium.com",
      "media2.dev.to",
    ],
  },
};

module.exports = nextConfig;
