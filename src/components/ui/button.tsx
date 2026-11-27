import React, { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonVariant =
  | 'primary' // Petróleo (#1E5B82) - Principal ação
  | 'secondary' // Outline com borda e texto Petróleo (#1E5B82) - Cancelar / neutro
  | 'destructive' // Terracota (#823B1E) - Excluir / Gastos / Perigo
  | 'marinho' // Marinho (#1E2782) - Cabeçalho / Totais / Destaque
  | 'ghost'; // Transparente com hover suave em Linho (#F1E4CC)

export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

/**
 * Componente Button Coringa baseado rigorosamente no Design System (design-system1/paleta.pdf).
 * - Primário: Petróleo (#1E5B82)
 * - Secundário / Cancelar: Borda Petróleo (#1E5B82) com fundo Papel (#FBF5EA)
 * - Destrutivo / Excluir: Terracota (#823B1E)
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      disabled,
      leftIcon,
      rightIcon,
      className = '',
      type = 'button',
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed select-none active:scale-[0.98]';

    const sizeStyles: Record<ButtonSize, string> = {
      sm: 'px-3.5 py-1.5 text-xs gap-1.5',
      md: 'px-5 py-2.5 text-sm gap-2 font-semibold',
      lg: 'px-7 py-3 text-base gap-2.5 font-semibold',
    };

    // Estilos mapeados diretamente para a paleta oficial
    const variantStyles: Record<ButtonVariant, string> = {
      // Petróleo (#1E5B82) - Botão primário
      primary:
        'bg-[#1E5B82] text-white hover:bg-[#184867] focus:ring-[#1E5B82] shadow-sm',

      // Cancelar / Outline - Borda Petróleo (#1E5B82) sobre Papel (#FBF5EA)
      secondary:
        'border-2 border-[#1E5B82] bg-[#FBF5EA] text-[#1E5B82] hover:bg-[#F1E4CC] focus:ring-[#1E5B82]',

      // Terracota (#823B1E) - Botão Excluir / Perigo
      destructive:
        'bg-[#823B1E] text-white hover:bg-[#6c3017] focus:ring-[#823B1E] shadow-sm',

      // Marinho (#1E2782) - Destaque nobre
      marinho:
        'bg-[#1E2782] text-white hover:bg-[#171e65] focus:ring-[#1E2782] shadow-sm',

      // Ghost - Discreto
      ghost:
        'text-[#2A1D10] hover:bg-[#F1E4CC] focus:ring-[#1E5B82]',
    };

    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled || isLoading}
        className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
        {...props}
      >
        {isLoading ? (
          <span
            className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
            role="status"
            aria-label="Carregando"
          />
        ) : (
          leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>
        )}
        <span>{children}</span>
        {!isLoading && rightIcon && (
          <span className="inline-flex shrink-0">{rightIcon}</span>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
