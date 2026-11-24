'use client';

import { ReactNode } from 'react';
import { QueryProvider } from './query-provider';

interface AppProvidersProps {
  children: ReactNode;
}

/**
 * Agregador centralizado de Providers da aplicação.
 * Permite adicionar futuros provedores (Auth, Tema, Analytics) mantendo baixo acoplamento.
 */
export function AppProviders({ children }: AppProvidersProps) {
  return <QueryProvider>{children}</QueryProvider>;
}
