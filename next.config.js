const webpack = require("webpack");
const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");
const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = withVanillaExtract({
  reactStrictMode: true,
  poweredByHeader: false,
  webpack: (config) => {
    config.plugins.push(new webpack.EnvironmentPlugin(process.env));
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
});

module.exports = nextConfig;
