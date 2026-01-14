// app/fonts.ts
import localFont from 'next/font/local';

export const helveticaNeue = localFont({
  src: [
    {
      path: '../public/fonts/HelveticaNeueLight.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/HelveticaNeueRoman.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/HelveticaNeueMedium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/HelveticaNeueBold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-sans',
});

export const mixtaPro = localFont({
  src: [
    {
      path: '../public/fonts/mixta-pro-regular.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-mixta',
  display: 'swap',
});
