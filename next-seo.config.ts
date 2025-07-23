import { DefaultSeoProps } from 'next-seo';

const defaultSEOConfig: DefaultSeoProps = {
  title: 'Pain Free Rehab Center | Physiotherapy & Wellness',
  description:
    'Expert physiotherapy treatments to help you recover faster and live pain-free. Visit Pain Free Rehab Center for personalized care and advanced rehabilitation techniques.',
  canonical: 'http://www.painfreerehabcenter.in',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'http://www.painfreerehabcenter.in',
    siteName: 'Pain Free Rehab Center',
    images: [
      {
        url: 'http://www.painfreerehabcenter.in/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Pain Free Rehab Center',
      },
    ],
  },
  twitter: {
    handle: '@painfreerehab',
    site: '@painfreerehab',
    cardType: 'summary_large_image',
  },
};

export default defaultSEOConfig;
