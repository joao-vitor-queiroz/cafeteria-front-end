import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { AppProviders } from '@/providers';
import { Header } from '@/components/common/header';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Cafeteria Gourmet | Cardápio & Pedidos',
  description:
    'Ambiente moderno de pedidos para cafeteria artesanal. Desenvolvido com Next.js, Tailwind, TanStack Query e Zustand.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-stone-50 text-stone-900 dark:bg-stone-950 dark:text-stone-100">
        <AppProviders>
          <Header />
          <div className="flex-1">{children}</div>
        </AppProviders>
      </body>
    </html>
  );
}
