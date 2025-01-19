module.exports = ({
  pageExtensions: ["tsx"],
  output: "export", // Enable static export mode
  distDir: "dist",  // Set the output folder to /dist
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push(
      ...[
        {
          test: /\.yml$/,
          type: "json",
          use: "yaml-loader",
        },
        {
          test: /\.svg$/,
          use: "@svgr/webpack",
        },
      ]
    );
    
    return config;
  },
});
