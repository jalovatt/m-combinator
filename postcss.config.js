/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
const postCssPresetEnv = require('postcss-preset-env');
const postCssImport = require('postcss-import');

module.exports = {
  plugins: [
    postCssPresetEnv({
      autoprefixer: {
        flexbox: 'no-2009',
      },
    }),
    postCssImport(),
    require('postcss-nested'),
  ],
};
