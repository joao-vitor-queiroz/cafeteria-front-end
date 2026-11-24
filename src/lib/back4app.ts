import { serverEnv, isBack4AppConfigured } from './env';

export interface Back4AppQueryResponse<T> {
  results: T[];
}

/**
 * Cliente HTTP seguro para comunicação com a REST API do Back4App.
 * Executa exclusivamente no servidor (Route Handlers / Server Actions / Server Components).
 */
export async function back4appFetch<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  if (!isBack4AppConfigured()) {
    throw new Error(
      'Back4App não configurado. Verifique as variáveis BACK4APP_APP_ID e BACK4APP_REST_API_KEY no arquivo .env.local'
    );
  }

  const url = `${serverEnv.BACK4APP_API_URL}${endpoint.startsWith('/') ? endpoint : `/${endpoint}`}`;

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    'X-Parse-Application-Id': serverEnv.BACK4APP_APP_ID,
    'X-Parse-REST-API-Key': serverEnv.BACK4APP_REST_API_KEY,
    ...(options.headers as Record<string, string> | undefined),
  };

  const response = await fetch(url, {
    ...options,
    headers,
  });

  if (!response.ok) {
    let errorMessage = `Erro na requisição ao Back4App (${response.status})`;
    try {
      const errorJson = await response.json();
      if (errorJson?.error) {
        errorMessage = errorJson.error;
      }
    } catch {
      // Falha ao parsear erro como JSON, mantém mensagem genérica
    }
    throw new Error(errorMessage);
  }

  return response.json() as Promise<T>;
}
