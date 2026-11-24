'use client';

import { Product } from '@/types';
import { useCartStore } from '@/stores/use-cart-store';
import { Button } from '@/components/ui/button';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <article className="flex flex-col justify-between rounded-xl border border-stone-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md dark:border-stone-800 dark:bg-stone-900">
      <div>
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold text-lg text-stone-900 dark:text-stone-100">
            {product.name}
          </h3>
          <span className="shrink-0 rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-800 dark:bg-amber-950 dark:text-amber-300">
            {product.category}
          </span>
        </div>
        <p className="mt-2 text-sm text-stone-600 dark:text-stone-400">
          {product.description}
        </p>
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-stone-100 pt-4 dark:border-stone-800">
        <span className="text-lg font-bold text-stone-900 dark:text-stone-100">
          R$ {product.price.toFixed(2).replace('.', ',')}
        </span>
        <Button
          size="sm"
          onClick={() => addItem(product)}
          aria-label={`Adicionar ${product.name} ao carrinho`}
        >
          Adicionar +
        </Button>
      </div>
    </article>
  );
}
