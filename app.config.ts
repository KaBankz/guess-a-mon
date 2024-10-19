import type { ExpoConfig } from '@expo/config';

const config: ExpoConfig = {
  name: 'Guess-a-MON',
  slug: 'guess-a-mon',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './src/assets/images/icon.png',
  scheme: 'myapp',
  userInterfaceStyle: 'automatic',
  ios: {
    supportsTablet: true,
    bundleIdentifier: 'com.kabanks.guess-a-mon',
    splash: {
      image: './src/assets/images/splash_light.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
      dark: {
        image: './src/assets/images/splash_dark.png',
        resizeMode: 'contain',
        backgroundColor: '#000000',
      },
    },
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './src/assets/images/icon.png',
      backgroundColor: '#ffffff',
    },
    splash: {
      image: './src/assets/images/splash_light.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
      dark: {
        image: './src/assets/images/splash_dark.png',
        resizeMode: 'contain',
        backgroundColor: '#000000',
      },
    },
  },
  web: {
    bundler: 'metro',
    output: 'static',
    favicon: './src/assets/images/favicon.png',
  },
  plugins: ['expo-router'],
  experiments: {
    typedRoutes: true,
  },
};

export default config;
