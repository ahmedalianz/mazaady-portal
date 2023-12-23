import type {Metadata} from 'next';
import {Nunito} from 'next/font/google';
import './ui/globals.css';

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900', '1000'],
});

export const metadata: Metadata = {
  title: 'Mazaady Portal Page',
  applicationName: 'Mazaady Portal Page',
  description: 'Mazaady Portal Page',
  keywords: 'Mazaady, Portal',
  authors: [{name: 'Ahmed Afify'}],
  openGraph: {
    type: 'website',
    title: 'Mazaady Portal Page',
    siteName: 'Mazaady Portal Page',
    description: 'Mazaady Portal Page',
    url: 'https://mazaady-portal.vercel.app/',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={`antialiased ${nunito.className}`}>{children}</body>
    </html>
  );
}
