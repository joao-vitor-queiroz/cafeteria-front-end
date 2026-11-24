'use client';

import { useState } from 'react';
import { useProducts } from '@/hooks/use-products';
import { ProductCard } from '@/components/products/product-card';
import { ProductCategory } from '@/types';

const CATEGORIES: { label: string; value: ProductCategory | 'all' }[] = [
  { label: 'Todos', value: 'all' },
  { label: 'Cafés', value: 'coffee' },
  { label: 'Chás', value: 'tea' },
  { label: 'Padaria & Confeitaria', value: 'bakery' },
  { label: 'Sobremesas', value: 'desserts' },
];

export default function HomePage() {
  const { data: products, isLoading, isError, error, refetch } = useProducts();
  const [selectedCategory, setSelectedCategory] = useState<
    ProductCategory | 'all'
  >('all');

  const filteredProducts =
    products?.filter((item) =>
      selectedCategory === 'all' ? true : item.category === selectedCategory
    ) ?? [];

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="mb-10 text-center sm:text-left">
        <h1 className="text-3xl font-extrabold tracking-tight text-stone-900 sm:text-4xl dark:text-stone-100">
          Nosso Cardápio Artesanal
        </h1>
        <p className="mt-2 max-w-2xl text-stone-600 dark:text-stone-400">
          Grãos selecionados, torras frescas e receitas preparadas com paixão.
          Escolha os seus itens favoritos e acompanhe seu pedido em tempo real.
        </p>

        {/* Category Filter */}
        <div className="mt-6 flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                selectedCategory === cat.value
                  ? 'bg-amber-800 text-white shadow-sm'
                  : 'bg-stone-200/80 text-stone-700 hover:bg-stone-300 dark:bg-stone-800 dark:text-stone-300 dark:hover:bg-stone-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Loading State */}
      {isLoading && (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="h-48 animate-pulse rounded-xl bg-stone-200/70 dark:bg-stone-800"
            />
          ))}
        </div>
      )}

      {/* Error State */}
      {isError && (
        <div className="rounded-xl border border-red-200 bg-red-50 p-6 text-center dark:border-red-900/50 dark:bg-red-950/40">
          <p className="text-sm font-medium text-red-800 dark:text-red-300">
            Não foi possível carregar os produtos no momento.
          </p>
          <button
            onClick={() => refetch()}
            className="mt-3 rounded-lg bg-red-700 px-4 py-1.5 text-xs font-semibold text-white hover:bg-red-800"
          >
            Tentar novamente
          </button>
        </div>
      )}

      {/* Products Grid */}
      {!isLoading && !isError && (
        <>
          {filteredProducts.length === 0 ? (
            <div className="py-12 text-center text-stone-500">
              Nenhum produto encontrado nesta categoria.
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </>
      )}
    </main>
  );
}
