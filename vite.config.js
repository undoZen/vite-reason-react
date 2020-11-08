// @ts-check
const { configureServer, transforms } = require('vite-plugin-react')

/**
 * @type { import('vite').UserConfig }
 */
const config = {
  jsx: 'react',
  plugins: [{
    configureServer,
    transforms,
    resolvers: [{
      alias(id) {
          const isProd = process.env.NODE_ENV === 'production';
          if (id === 'react') {
              return isProd ? 'react/esm/react.production.min.js' : 'react/esm/react.development.js';
          }
          if (id === 'react-dom') {
              return isProd ? 'react-dom/esm/react-dom.production.min.js' : 'react-dom/esm/react-dom.development.js';
          }
      }
    }]
  }]
}

module.exports = config
