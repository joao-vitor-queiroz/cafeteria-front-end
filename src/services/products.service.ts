import { Product } from '@/types';

/**
 * Dados iniciais de produtos para a cafeteria.
 * Servirão como fallback e mock enquanto o backend não estiver integrado.
 */
const MOCK_PRODUCTS: Product[] = [
  {
    id: 'prod-1',
    name: 'Espresso Tradicional',
    description: 'Café espresso puro, encorpado e com crema aveludada.',
    price: 7.5,
    category: 'coffee',
    isAvailable: true,
    preparationTimeMinutes: 5,
  },
  {
    id: 'prod-2',
    name: 'Cappuccino Italiano',
    description: 'Espresso com leite vaporizado e uma camada generosa de espuma.',
    price: 12.0,
    category: 'coffee',
    isAvailable: true,
    preparationTimeMinutes: 7,
  },
  {
    id: 'prod-3',
    name: 'Croissant Francês de Manteiga',
    description: 'Massa folhada artesanal, crocante por fora e macia por dentro.',
    price: 14.0,
    category: 'bakery',
    isAvailable: true,
    preparationTimeMinutes: 3,
  },
  {
    id: 'prod-4',
    name: 'Chá Verde com Hortelã',
    description: 'Chá verde premium com folhas frescas de hortelã orgânica.',
    price: 9.0,
    category: 'tea',
    isAvailable: true,
    preparationTimeMinutes: 5,
  },
  {
    id: 'prod-5',
    name: 'Torta de Limão Siciliano',
    description: 'Base crocante com creme de limão e merengue tostado.',
    price: 16.5,
    category: 'desserts',
    isAvailable: true,
    preparationTimeMinutes: 2,
  },
];

/**
 * Camada de serviço de produtos.
 * Abstrai chamadas de API, facilitando testes, cache e futura migração para APIs REST/GraphQL.
 */
export const productsService = {
  async getProducts(): Promise<Product[]> {
    // Simula latência de rede realista
    await new Promise((resolve) => setTimeout(resolve, 300));
    return MOCK_PRODUCTS;
  },

  async getProductById(id: string): Promise<Product | undefined> {
    await new Promise((resolve) => setTimeout(resolve, 200));
    return MOCK_PRODUCTS.find((p) => p.id === id);
  },
};
