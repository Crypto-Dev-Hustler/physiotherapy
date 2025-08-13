module.exports = {
  async headers() {
    return [
      {
        source: '/:all*(jpg|jpeg|png|gif|svg)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=15536000, immutable',
          },
        ],
      },
    ]
  },
}
