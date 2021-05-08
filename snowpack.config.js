module.exports = {
  mount: {
    src: { url: '/' },
    assets: { url: '/assets', static: true },
  },
  routes: [
    {
      match: 'routes',
      src: '.*',
      dest: '/index.html',
    },
  ],
  env: {
    apikey: '08b1964f2885f6335cd92b41514e33ec',
  },
  plugins: [
    '@snowpack/plugin-postcss',
  ],
  devOptions: {
    open: 'none',
  },
};
