'use client';

import Link from 'next/link';
import { useCartStore } from '@/stores/use-cart-store';

export function Header() {
  const totalItems = useCartStore((state) => state.getTotalItems());
  const totalPrice = useCartStore((state) => state.getTotalPrice());

  return (
    <header className="sticky top-0 z-40 border-b border-stone-200 bg-white/80 backdrop-blur-md dark:border-stone-800 dark:bg-stone-950/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">☕</span>
          <span className="text-xl font-bold tracking-tight text-amber-900 dark:text-amber-500">
            Cafeteria Gourmet
          </span>
        </Link>

        <nav className="flex items-center gap-4">
          <div className="flex items-center gap-3 rounded-full border border-stone-200 bg-stone-50 px-4 py-1.5 text-sm dark:border-stone-800 dark:bg-stone-900">
            <span className="text-stone-600 dark:text-stone-400">Carrinho:</span>
            <span className="font-semibold text-amber-800 dark:text-amber-400">
              {totalItems} {totalItems === 1 ? 'item' : 'itens'}
            </span>
            <span className="text-stone-300 dark:text-stone-700">|</span>
            <span className="font-bold text-stone-900 dark:text-stone-100">
              R$ {totalPrice.toFixed(2).replace('.', ',')}
            </span>
          </div>
        </nav>
      </div>
    </header>
  );
}
