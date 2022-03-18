const path = require('path');
const PATH_SRC = path.resolve(`${__dirname}/../src`);

module.exports = {
  webpack: {
    alias: {
      '@app': path.resolve(__dirname, `${PATH_SRC}/app/`),
      '@features': path.resolve(__dirname, `${PATH_SRC}/features/`),
      '@entities': path.resolve(__dirname, `${PATH_SRC}/entities/`),
      '@shared': path.resolve(__dirname, `${PATH_SRC}/shared/`),
      '@pages': path.resolve(__dirname, `${PATH_SRC}/pages/`),
    },
  },
};
