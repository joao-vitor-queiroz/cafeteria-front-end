import { serverEnv, isBack4AppConfigured } from './env';

export interface ParseObjectBase {
  objectId: string;
  createdAt: string;
  updatedAt: string;
}

export interface ParseQueryOptions {
  where?: Record<string, unknown>;
  order?: string;
  limit?: number;
  skip?: number;
  keys?: string;
}

export interface ParseCreateResult {
  objectId: string;
  createdAt: string;
}

export interface ParseUpdateResult {
  updatedAt: string;
}

/**
 * Cliente Parse oficial para integração com Back4App (Parse Platform).
 * Camada de infraestrutura que roda exclusivamente no servidor.
 * Proteção contra vazamento de chaves secretas no bundle do cliente.
 */
class ParseClient {
  private getHeaders(): HeadersInit {
    if (!isBack4AppConfigured()) {
      throw new Error(
        'Credenciais do Back4App ausentes. Configure BACK4APP_APP_ID e BACK4APP_REST_API_KEY no arquivo .env.local'
      );
    }

    return {
      'Content-Type': 'application/json',
      'X-Parse-Application-Id': serverEnv.BACK4APP_APP_ID,
      'X-Parse-REST-API-Key': serverEnv.BACK4APP_REST_API_KEY,
    };
  }

  private getUrl(endpoint: string): string {
    const cleanEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
    return `${serverEnv.BACK4APP_API_URL}${cleanEndpoint}`;
  }

  /**
   * Executa uma consulta (query) em uma classe Parse.
   * Suporta filtros (where), ordenação (order), limite e paginação.
   */
  async query<T>(
    className: string,
    options: ParseQueryOptions = {}
  ): Promise<T[]> {
    const params = new URLSearchParams();

    if (options.where) {
      params.append('where', JSON.stringify(options.where));
    }
    if (options.order) {
      params.append('order', options.order);
    }
    if (typeof options.limit === 'number') {
      params.append('limit', options.limit.toString());
    }
    if (typeof options.skip === 'number') {
      params.append('skip', options.skip.toString());
    }
    if (options.keys) {
      params.append('keys', options.keys);
    }

    const queryString = params.toString();
    const endpoint = `/classes/${className}${queryString ? `?${queryString}` : ''}`;

    const response = await fetch(this.getUrl(endpoint), {
      method: 'GET',
      headers: this.getHeaders(),
      cache: 'no-store',
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        errorData.error || `Erro ao consultar a classe Parse ${className} (${response.status})`
      );
    }

    const data = await response.json();
    return (data.results as T[]) || [];
  }

  /**
   * Obtém um objeto específico de uma classe Parse pelo seu objectId.
   */
  async getById<T>(className: string, objectId: string): Promise<T> {
    const response = await fetch(this.getUrl(`/classes/${className}/${objectId}`), {
      method: 'GET',
      headers: this.getHeaders(),
      cache: 'no-store',
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        errorData.error || `Objeto ${objectId} não encontrado na classe ${className}`
      );
    }

    return response.json() as Promise<T>;
  }

  /**
   * Cria um novo registro em uma classe Parse.
   */
  async create(
    className: string,
    payload: Record<string, unknown>
  ): Promise<ParseCreateResult> {
    const response = await fetch(this.getUrl(`/classes/${className}`), {
      method: 'POST',
      headers: this.getHeaders(),
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        errorData.error || `Erro ao criar objeto na classe ${className} (${response.status})`
      );
    }

    return response.json() as Promise<ParseCreateResult>;
  }

  /**
   * Atualiza um registro existente em uma classe Parse pelo objectId.
   */
  async update(
    className: string,
    objectId: string,
    payload: Record<string, unknown>
  ): Promise<ParseUpdateResult> {
    const response = await fetch(this.getUrl(`/classes/${className}/${objectId}`), {
      method: 'PUT',
      headers: this.getHeaders(),
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        errorData.error || `Erro ao atualizar objeto ${objectId} em ${className}`
      );
    }

    return response.json() as Promise<ParseUpdateResult>;
  }

  /**
   * Deleta um registro de uma classe Parse pelo objectId.
   */
  async delete(className: string, objectId: string): Promise<void> {
    const response = await fetch(this.getUrl(`/classes/${className}/${objectId}`), {
      method: 'DELETE',
      headers: this.getHeaders(),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        errorData.error || `Erro ao deletar objeto ${objectId} de ${className}`
      );
    }
  }
}

// Instância singleton do Cliente Parse para reutilização no backend do Next.js
export const parseClient = new ParseClient();
