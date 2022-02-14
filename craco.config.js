/* eslint-disable no-undef */
const CracoLessPlugin = require("craco-less");
const { CracoAliasPlugin, configPaths } = require("react-app-rewire-alias");

const aliasMap = configPaths("./jsconfig.paths.json");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
          },
        },
      },
    },
    {
      plugin: CracoAliasPlugin,
      options: { alias: aliasMap },
    },
  ],
};
