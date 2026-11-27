import React, { HTMLAttributes } from 'react';

export interface ErrorMessageProps extends HTMLAttributes<HTMLParagraphElement> {
  message?: string;
  children?: React.ReactNode;
}

/**
 * Componente coringa para exibição de mensagens de erro em formulários e validações.
 * Utiliza Terracota (#823B1E) da paleta oficial com acessibilidade (role="alert").
 */
export function ErrorMessage({
  message,
  children,
  className = '',
  ...props
}: ErrorMessageProps) {
  const content = message || children;

  if (!content) return null;

  return (
    <p
      role="alert"
      aria-live="polite"
      className={`mt-1.5 flex items-center gap-1.5 text-xs font-semibold text-[#823B1E] ${className}`}
      {...props}
    >
      <svg
        className="h-3.5 w-3.5 shrink-0"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z"
          clipRule="evenodd"
        />
      </svg>
      <span>{content}</span>
    </p>
  );
}
