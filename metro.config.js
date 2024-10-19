/* eslint-env node */
const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname);

const nativeWindConfig = withNativeWind(config, {
  input: './src/global.css',
  configPath: './tailwind.config.ts',
});

module.exports = nativeWindConfig;
