import localFont from 'next/font/local';

export const freightDisplayPro = localFont({
  src: [
    {
      path: './FreightDispProLight-Regular.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './FreightDispProBook-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './FreightDispProMedium-Regular.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './FreightDispProBold-Regular.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './FreightDispProSemibold-Regular.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './FreightDispProBlack-Regular.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-freight-display',
  preload: true,
  fallback: ['serif'],
});

export const freightSansPro = localFont({
  src: [
    {
      path: './FreightSansProLight-Regular.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './FreightSansProBook-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './FreightSansProMedium-Regular.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './FreightSansProBold-Regular.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './FreightSansProSemibold-Regular.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './FreightSansProBlack-Regular.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-freight-sans',
  preload: true,
  fallback: ['sans-serif'],
});
