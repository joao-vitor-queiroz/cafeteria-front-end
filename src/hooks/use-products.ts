import { useQuery } from '@tanstack/react-query';
import { productsService } from '@/services/products.service';

export const PRODUCTS_QUERY_KEY = ['products'] as const;

/**
 * Hook customizado para consulta de produtos via TanStack Query.
 * Garante cache inteligente, estados de loading, error e refetch descomplicados.
 */
export function useProducts() {
  return useQuery({
    queryKey: PRODUCTS_QUERY_KEY,
    queryFn: () => productsService.getProducts(),
  });
}
