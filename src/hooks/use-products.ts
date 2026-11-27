import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { productsService } from '@/services/products.service';
import { Product } from '@/types';

export const PRODUCTS_QUERY_KEY = ['products'] as const;

/**
 * Hook customizado para consulta de produtos via TanStack Query.
 * Consome o QueryClientProvider para cache inteligente e revalidação assíncrona.
 */
export function useProducts() {
  return useQuery({
    queryKey: PRODUCTS_QUERY_KEY,
    queryFn: () => productsService.getProducts(),
  });
}

/**
 * Hook customizado para criação de produto com TanStack Query.
 * Invalida automaticamente a query de produtos no QueryClientProvider
 * para manter a interface reativa e sincronizada com o Back4App.
 */
export function useCreateProduct() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (newProduct: Omit<Product, 'id' | 'isAvailable'>) =>
      productsService.createProduct(newProduct),
    onSuccess: () => {
      // Força a atualização do cache da lista de produtos
      queryClient.invalidateQueries({ queryKey: PRODUCTS_QUERY_KEY });
    },
  });
}
