'use client';

import React from 'react';
import Link from 'next/link';

export interface FooterProps {
  storeName?: string;
}

/**
 * Componente coringa Footer.
 * Estilizado com as cores neutras da paleta:
 * Fundo Linho (#F1E4CC), borda Areia (#D7B079), textos em Tinta (#2A1D10) e Cinza Quente (#6B5A45).
 */
export function Footer({ storeName = 'Cafeteria Gourmet' }: FooterProps) {
  return (
    <footer className="w-full border-t-2 border-[#D7B079] bg-[#F1E4CC] text-[#2A1D10]">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Slogan */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start">
              <span className="font-serif text-xl font-bold tracking-tight text-[#1E2782]">
                {storeName}
              </span>
            </div>
            <p className="mt-1 text-xs text-[#6B5A45] max-w-sm">
              Cafés especiais, grãos selecionados e receitas artesanais em um ambiente pensado para acolher.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-[#6B5A45]">
            <Link href="/" className="hover:text-[#1E5B82] transition-colors">
              Início
            </Link>
            <Link href="#cardapio" className="hover:text-[#1E5B82] transition-colors">
              Cardápio
            </Link>
            <Link href="#contato" className="hover:text-[#1E5B82] transition-colors">
              Contato
            </Link>
            <Link href="#termos" className="hover:text-[#1E5B82] transition-colors">
              Privacidade
            </Link>
          </div>
        </div>

        <div className="mt-8 border-t border-[#D7B079]/50 pt-6 text-center text-xs text-[#6B5A45]">
          <p>© {new Date().getFullYear()} {storeName}. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
