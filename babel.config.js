module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: '.',
        alias: {
          '@api': './src/api',
          '@components': './src/components',
          '@context': './src/context',
          '@domain': './src/domain',
          '@hooks': './src/hooks',
          '@infra': './src/infra',
          '@routes': './src/routes',
          '@screens': './src/screens',
          '@services': './src/services/*',
          '@tests': './test/*',
          '@theme': './src/theme',
          '@types': './src/types',
          '@utils': './src/utils',
          '@assets': './src/assets/*',
        },
      },
    ],
  ],
};
