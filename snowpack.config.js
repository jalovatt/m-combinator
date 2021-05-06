module.exports = {
  mount: {
    src: { url: '/' },
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
    '@snowpack/plugin-react-refresh',
  ],
  devOptions: {
    // port: 4001,
    open: 'none',
    hmr: true,
  },
};
