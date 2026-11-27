import React, { HTMLAttributes } from 'react';

export type BadgeVariant = 'areia' | 'petroleo' | 'marinho' | 'terracota' | 'ocre';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  children: React.ReactNode;
}

/**
 * Componente coringa de Etiqueta / Badge.
 * Referência do PDF (design-system1/paleta.pdf):
 * "Areia #D7B079 - Etiquetas e bordas"
 */
export function Badge({
  variant = 'areia',
  children,
  className = '',
  ...props
}: BadgeProps) {
  const variantStyles: Record<BadgeVariant, string> = {
    // Etiqueta padrão oficial do Design System
    areia: 'bg-[#D7B079] text-[#2A1D10] font-medium border border-[#D7B079]',
    petroleo: 'bg-[#1E5B82] text-white font-medium',
    marinho: 'bg-[#1E2782] text-white font-medium',
    terracota: 'bg-[#823B1E] text-white font-medium',
    ocre: 'bg-[#82591E] text-white font-medium',
  };

  return (
    <span
      className={`inline-flex items-center justify-center rounded-md px-2.5 py-0.5 text-xs tracking-wide transition-colors ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}
