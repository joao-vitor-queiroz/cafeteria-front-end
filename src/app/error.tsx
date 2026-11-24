'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

/**
 * Error boundary seguro em nível de rota.
 * Regra de Segurança: Nunca exibe stack traces ou informações sensíveis de infraestrutura ao usuário.
 */
export default function GlobalError({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log interno seguro para observabilidade (sem expor para o DOM do usuário)
    console.error('Unhandled application error:', error.message);
  }, [error]);

  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center px-4 text-center">
      <div className="max-w-md rounded-2xl border border-stone-200 bg-white p-8 shadow-sm dark:border-stone-800 dark:bg-stone-900">
        <span className="text-4xl">☕⚠️</span>
        <h2 className="mt-4 text-2xl font-bold tracking-tight text-stone-900 dark:text-stone-100">
          Ops! Algo deu errado
        </h2>
        <p className="mt-2 text-sm text-stone-600 dark:text-stone-400">
          Ocorreu uma instabilidade temporária ao carregar esta página. Por favor, tente novamente.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <Button onClick={() => reset()} variant="primary">
            Tentar novamente
          </Button>
        </div>
      </div>
    </div>
  );
}
