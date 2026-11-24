import {
  QueryClient,
  defaultShouldDehydrateQuery,
  isServer,
} from '@tanstack/react-query';

/**
 * Cria uma instância de QueryClient com configurações otimizadas.
 * - staleTime de 1 minuto para evitar refetches imediatos redundantes.
 * - gcTime de 10 minutos para retenção em memória.
 * - retry controlado para não sobrecarregar endpoints em caso de erro.
 */
function makeQueryClient(): QueryClient {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
        gcTime: 10 * 60 * 1000,
        retry: 1,
        refetchOnWindowFocus: false,
      },
      dehydrate: {
        shouldDehydrateQuery: (query) =>
          defaultShouldDehydrateQuery(query) ||
          query.state.status === 'pending',
      },
    },
  });
}

// Singleton no navegador para reaproveitar a instância entre re-renders
let browserQueryClient: QueryClient | undefined = undefined;

/**
 * Obtém a instância correta do QueryClient.
 * No servidor (SSR): SEMPRE cria uma nova instância por requisição (previne vazamento de dados entre usuários).
 * No navegador: reutiliza a mesma instância durante o ciclo de vida do cliente.
 */
export function getQueryClient(): QueryClient {
  if (isServer) {
    return makeQueryClient();
  }
  if (!browserQueryClient) {
    browserQueryClient = makeQueryClient();
  }
  return browserQueryClient;
}
