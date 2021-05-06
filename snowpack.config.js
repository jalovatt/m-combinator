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
  plugins: ['@snowpack/plugin-react-refresh'],
  devOptions: {
    // port: 4001,
    open: 'none',
    hmr: true,
  },
};
