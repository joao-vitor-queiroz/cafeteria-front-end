import { ApiResponse, Product } from '@/types';

/**
 * Camada de serviço de produtos no cliente.
 * Consome o endpoint interno /api/products do Next.js (BFF).
 * Arquitetura segura: O cliente NUNCA conversa diretamente com o Back4App,
 * mantendo as chaves de API restritas ao ambiente do servidor.
 */
export const productsService = {
  async getProducts(): Promise<Product[]> {
    const response = await fetch('/api/products', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      // Cache gerenciado pelo TanStack Query
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error('Falha ao carregar o cardápio da cafeteria.');
    }

    const result: ApiResponse<Product[]> = await response.json();
    return result.data ?? [];
  },

  async createProduct(
    product: Omit<Product, 'id' | 'isAvailable'>
  ): Promise<Product> {
    const response = await fetch('/api/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || 'Falha ao cadastrar o produto.');
    }

    const result: ApiResponse<Product> = await response.json();
    return result.data;
  },
};
