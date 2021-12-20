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
            "@types": "./src/shared/types",
            "@store": "./src/store"
          }
        }
      ]
    ]
  };
};
