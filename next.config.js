const {i18n} = require('./next-i18next.config');

module.exports = {
  async headers() {
    return [
      {
        source: "/fonts/JetBrainsMono-Regular.woff2",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable"
          }
        ]
      }
    ];
  },
  images: {
    loader: 'akamai',
    path: ''
  },
  trailingSlash: true,
  i18n
}