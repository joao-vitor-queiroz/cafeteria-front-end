import React, { HTMLAttributes, ReactNode } from 'react';

export type AlertVariant = 'error' | 'warning' | 'info' | 'neutral';

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  variant?: AlertVariant;
  title?: string;
  children: ReactNode;
  icon?: ReactNode;
  onClose?: () => void;
}

/**
 * Componente coringa para Alertas e Banners de Mensagem.
 * Cores ancoradas na paleta oficial:
 * - Error: Terracota (#823B1E)
 * - Warning: Ocre (#82591E)
 * - Info: Petróleo (#1E5B82)
 * - Neutral: Linho (#F1E4CC) com borda Areia (#D7B079)
 */
export function Alert({
  variant = 'error',
  title,
  children,
  icon,
  onClose,
  className = '',
  ...props
}: AlertProps) {
  const variantConfig: Record<
    AlertVariant,
    { container: string; iconColor: string; titleColor: string; defaultIcon: ReactNode }
  > = {
    // Erro / Gastos / Perigo: Terracota (#823B1E)
    error: {
      container:
        'bg-[#FDF6F4] border-2 border-[#823B1E]/40 text-[#2A1D10]',
      iconColor: 'text-[#823B1E]',
      titleColor: 'text-[#823B1E]',
      defaultIcon: (
        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },

    // Aviso / Rótulos: Ocre (#82591E)
    warning: {
      container:
        'bg-[#FDF9F2] border-2 border-[#82591E]/40 text-[#2A1D10]',
      iconColor: 'text-[#82591E]',
      titleColor: 'text-[#82591E]',
      defaultIcon: (
        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },

    // Informativo: Petróleo (#1E5B82)
    info: {
      container:
        'bg-[#F2F7FA] border-2 border-[#1E5B82]/30 text-[#2A1D10]',
      iconColor: 'text-[#1E5B82]',
      titleColor: 'text-[#1E5B82]',
      defaultIcon: (
        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },

    // Neutro: Linho (#F1E4CC) e borda Areia (#D7B079)
    neutral: {
      container:
        'bg-[#F1E4CC] border-2 border-[#D7B079] text-[#2A1D10]',
      iconColor: 'text-[#6B5A45]',
      titleColor: 'text-[#2A1D10]',
      defaultIcon: (
        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  };

  const current = variantConfig[variant];

  return (
    <div
      role="alert"
      className={`relative flex items-start gap-3 rounded-xl p-4 shadow-xs ${current.container} ${className}`}
      {...props}
    >
      <div className={`shrink-0 mt-0.5 ${current.iconColor}`}>
        {icon ?? current.defaultIcon}
      </div>

      <div className="flex-1 min-w-0">
        {title && (
          <h4
            className={`font-serif font-bold text-sm leading-tight mb-1 ${current.titleColor}`}
          >
            {title}
          </h4>
        )}
        <div className="text-sm font-sans leading-relaxed text-[#2A1D10]/90">
          {children}
        </div>
      </div>

      {onClose && (
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar alerta"
          className="shrink-0 rounded-md p-1 text-[#6B5A45] hover:bg-black/5 hover:text-[#2A1D10] transition-colors"
        >
          <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
          </svg>
        </button>
      )}
    </div>
  );
}
