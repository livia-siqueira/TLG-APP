module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            "@components": "./src/components",
            "@types": "./src/shared/utils/types",
            "@store": "./src/store",
            "@helpers": "./src/shared/utils",
            "@screens": "./src/screens/",
            "@functions": "./src/shared/utils/function",
            "@hooks": "./src/shared/utils/hooks",
            "@shared": "./src/shared"
          }
        }
      ],
      "react-native-reanimated/plugin",
    ],
   
  };
};
