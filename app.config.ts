export default defineAppConfig({
  title: 'STD::AC',
  description: `#include <std.ac>`,
  image: 'https://std.ac/banner.png',
  previewTTL: 24 * 3600, // 24h
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
