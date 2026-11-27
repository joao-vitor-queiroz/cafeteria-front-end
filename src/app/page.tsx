import React from 'react';
import { Navbar } from '@/components/common/navbar';
import { Footer } from '@/components/common/footer';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FBF5EA] text-[#2A1D10]">
      {/* Navbar com a cor oficial Marinho (#1E2782) */}
      <Navbar
        actions={
          <div className="flex items-center gap-3">
            <Button
              variant="secondary"
              size="sm"
              className="bg-transparent text-white border-white hover:bg-white/10"
            >
              Entrar
            </Button>
            <Button
              variant="primary"
              size="sm"
              className="bg-[#1E5B82] text-white hover:bg-[#184867]"
            >
              Fazer Pedido
            </Button>
          </div>
        }
      />

      {/* Conteúdo Base Limpo */}
      <main className="flex-1 flex flex-col justify-center items-center px-4 py-16 sm:px-6 lg:px-8 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-[#1E2782] leading-tight">
            Cafés artesanais & momentos especiais
          </h1>

          <p className="text-base sm:text-lg text-[#6B5A45] leading-relaxed">
            Grãos selecionados com torras cuidadas e receitas preparadas para proporcionar uma experiência acolhedora.
          </p>

          <div className="pt-2 flex flex-wrap justify-center items-center gap-4">
            <Button variant="primary" size="lg">
              Ver Cardápio
            </Button>
            <Button variant="secondary" size="lg">
              Conhecer a Cafeteria
            </Button>
          </div>
        </div>
      </main>

      {/* Footer com Linho (#F1E4CC) e borda Areia (#D7B079) */}
      <Footer storeName="Cafeteria" />
    </div>
  );
}
