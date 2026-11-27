import type { Metadata } from 'next';
import { Fraunces, DM_Sans } from 'next/font/google';
import { AppProviders } from '@/providers';
import './globals.css';

const fraunces = Fraunces({
  variable: '--font-fraunces',
  subsets: ['latin'],
  weight: ['300', '500', '800'],
  display: 'swap',
});

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
  weight: ['300', '500', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Cafeteria | Design System Base',
  description:
    'Base de componentes coringa e design system oficial da Cafeteria.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${fraunces.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-papel text-tinta selection:bg-areia selection:text-tinta">
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
