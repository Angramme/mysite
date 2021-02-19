require("dotenv").config();

module.exports = {
  webpack: function (config) {
    config.module.rules.push({
      test: /\.ya?ml$/,
      use: "js-yaml-loader",
    });
    return config;
  },
  images: {
    domains: [
      "github.com",
      "githubusercontent.com",
      "raw.githubusercontent.com",
    ]
  },
};
