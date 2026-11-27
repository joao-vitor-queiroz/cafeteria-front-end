'use client';

import React, { ReactNode } from 'react';
import Link from 'next/link';

export interface NavbarProps {
  logoText?: string;
  actions?: ReactNode;
  navLinks?: { label: string; href: string }[];
}

/**
 * Componente coringa Navbar.
 * Referência do PDF (design-system1/paleta.pdf):
 * "Marinho #1E2782 - Cabeçalho e total"
 * Tipografia: Fraunces para títulos/logo e DM Sans para menu.
 */
export function Navbar({
  logoText = 'Cafeteria',
  actions,
  navLinks = [
    { label: 'Início', href: '/' },
    { label: 'Cardápio', href: '#cardapio' },
    { label: 'Sobre', href: '#sobre' },
  ],
}: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#1E2782] text-[#FBF5EA] shadow-md border-b border-[#1E2782]/40">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand / Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#D7B079] rounded-md px-1"
        >
          <span className="text-2xl" role="img" aria-label="Café">
            ☕
          </span>
          <span className="font-serif text-2xl font-bold tracking-tight text-[#FBF5EA]">
            {logoText}
          </span>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#FBF5EA]/85 hover:text-[#D7B079] transition-colors focus:outline-none focus:ring-1 focus:ring-[#D7B079] rounded px-2 py-1"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Custom Actions (ex: Botões, Carrinho, Login) */}
        {actions && <div className="flex items-center gap-3">{actions}</div>}
      </div>
    </header>
  );
}
