const SEO_CONFIG = {
  title: 'Dar Al Nujoom Textiles & Tailoring | Uniforms & Custom Stitching',
  description:
    'Dar Al Nujoom — Premium tailoring & stitching for school uniforms, restaurant uniforms, petrol pump uniforms, party wear & bulk orders. Quality craftsmanship delivered on time.',
  canonical: 'https://daralnujoom.vercel.app',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://daralnujoom.vercel.app',
    siteName: 'Dar Al Nujoom Textiles & Tailoring',
    title: 'Dar Al Nujoom | Premium Tailoring & Uniform Stitching',
    description:
      'Expert tailoring for all uniform types — schools, restaurants, petrol pumps, hotels & party wear. Bulk orders welcome.',
    images: [
      {
        url: 'https://daralnujoom.vercel.app/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Dar Al Nujoom Textiles & Tailoring',
      },
    ],
  },
  twitter: {
    handle: '@daralnujoom',
    site: '@daralnujoom',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'keywords',
      content:
        'uae, sharjah, tailoring, stitching, uniforms, school uniforms, restaurant uniforms, petrol pump uniforms, bulk uniform stitching, party wear stitching, custom clothing, Dar Al Nujoom, textiles, uniform manufacturer',
    },
    {
      name: 'author',
      content: 'Dar Al Nujoom Textiles & Tailoring',
    },
    {
      name: 'theme-color',
      content: '#0A1628',
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      href: '/apple-touch-icon.png',
      sizes: '180x180',
    },
  ],
};

export default SEO_CONFIG;
