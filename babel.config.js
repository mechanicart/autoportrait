module.exports = {
  presets: [
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
      },
    ],
    '@babel/preset-typescript',
    [
      '@babel/preset-env',
      {
        corejs: 3,
        useBuiltIns: 'entry',
        targets: '> 0.25%, not dead',
      },
    ],
  ],
  plugins: [
    'macros',
    'babel-plugin-styled-components',
    '@babel/plugin-transform-runtime',
  ],
};
