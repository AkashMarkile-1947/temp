/** @type {import('next').NextConfig} */
module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.mp4$/,
      use: {
        loader: "file-loader",
      },
    });
    return config;
  },
};
