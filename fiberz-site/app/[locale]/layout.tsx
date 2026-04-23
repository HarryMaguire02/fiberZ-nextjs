import type { Metadata } from 'next';
import { Inter, Montserrat, Roboto, Playfair_Display, Cormorant_Garamond, Lato } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import '../globals.css';
import ScrollHeader from '../components/header/ScrollHeader';
import Footer from '../components/footer/Footer';
import { routing } from '@/i18n/routing';

const inter = Inter({
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const montserrat = Montserrat({
  weight: ['400', '500', '600', '700', '800'],
  variable: '--next-font-montserrat',
  subsets: ['latin'],
  display: 'swap',
});

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  variable: '--next-font-roboto',
  subsets: ['latin'],
  display: 'swap',
});

const playfair = Playfair_Display({
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--next-font-playfair',
  subsets: ['latin'],
  display: 'swap',
});

const lato = Lato({
  weight: ['300', '400', '700'],
  variable: '--next-font-lato',
  subsets: ['latin'],
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--next-font-cormorant',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://fiberz.com'),
  title: 'FiberZ - Premium Daily Soluble Fiber',
  description: 'FiberZ is a premium daily soluble fiber designed to support digestive health and help meet recommended daily fiber intake. Real benefits, backed by science.',
  keywords: ['soluble fiber', 'digestive health', 'fiber supplement', 'gut health', 'fiberz'],
  authors: [{ name: 'FiberZ' }],
  openGraph: {
    title: 'FiberZ - Premium Daily Soluble Fiber',
    description: 'Real benefits. Backed by science. Premium daily soluble fiber for digestive health.',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const fontVars = [
  inter.variable,
  montserrat.variable,
  roboto.variable,
  playfair.variable,
  cormorant.variable,
  lato.variable,
].join(' ');

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as 'sr' | 'en')) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className="h-full">
      <body className={`${fontVars} antialiased flex flex-col min-h-full`}>
        <NextIntlClientProvider messages={messages}>
          <ScrollHeader />
          <main className="pt-16 md:pt-20 grow">
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
