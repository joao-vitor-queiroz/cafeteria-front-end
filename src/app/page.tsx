'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/common/navbar';
import { Footer } from '@/components/common/footer';
import { Button } from '@/components/ui/button';
import { Alert } from '@/components/ui/alert';
import { ErrorMessage } from '@/components/ui/error-message';
import { Badge } from '@/components/ui/badge';

export default function DesignSystemBasePage() {
  const [showAlert, setShowAlert] = useState(true);
  const [showFieldError, setShowFieldError] = useState(true);

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF5EA] text-[#2A1D10]">
      {/* 1. Navbar Coringa (Fundo Marinho #1E2782) */}
      <Navbar
        actions={
          <div className="flex items-center gap-2">
            <Button
              variant="secondary"
              size="sm"
              className="bg-[#FBF5EA] text-[#1E5B82] border-white"
            >
              Entrar
            </Button>
            <Button variant="primary" size="sm">
              Pedir agora
            </Button>
          </div>
        }
      />

      <main className="flex-1 mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8 space-y-16">
        {/* Cabeçalho da Base */}
        <section className="text-center sm:text-left border-b-2 border-[#D7B079]/40 pb-8">
          <Badge variant="areia" className="mb-3">
            Design System Oficial
          </Badge>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-[#1E2782]">
            Componentes Coringa & Identidade Visual
          </h1>
          <p className="mt-3 text-base sm:text-lg text-[#6B5A45] max-w-3xl">
            Base visual estruturada rigorosamente a partir da paleta oficial da Cafeteria.
            Aqui estão os blocos essenciais reutilizáveis para construir todas as telas e fluxos.
          </p>
        </section>

        {/* 2. Demonstração da Paleta de Cores (Página 1 do PDF) */}
        <section className="space-y-6">
          <div>
            <h2 className="font-serif text-2xl font-bold text-[#1E2782]">
              Paleta de Cores Oficial
            </h2>
            <p className="text-sm text-[#6B5A45]">
              Cores primárias, funcionais e neutras extraídas de design-system1/paleta.pdf
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {/* Marinho */}
            <div className="rounded-xl border border-[#D7B079]/50 bg-white p-4 shadow-xs">
              <div className="h-16 rounded-lg bg-[#1E2782] shadow-inner" />
              <div className="mt-3">
                <span className="font-serif font-bold text-base text-[#1E2782]">Marinho</span>
                <p className="font-mono text-xs text-[#6B5A45]">#1E2782</p>
                <p className="text-xs text-[#2A1D10]/80 mt-1">Cabeçalho e total</p>
              </div>
            </div>

            {/* Petróleo */}
            <div className="rounded-xl border border-[#D7B079]/50 bg-white p-4 shadow-xs">
              <div className="h-16 rounded-lg bg-[#1E5B82] shadow-inner" />
              <div className="mt-3">
                <span className="font-serif font-bold text-base text-[#1E5B82]">Petróleo</span>
                <p className="font-mono text-xs text-[#6B5A45]">#1E5B82</p>
                <p className="text-xs text-[#2A1D10]/80 mt-1">Cor primária e botões</p>
              </div>
            </div>

            {/* Terracota */}
            <div className="rounded-xl border border-[#D7B079]/50 bg-white p-4 shadow-xs">
              <div className="h-16 rounded-lg bg-[#823B1E] shadow-inner" />
              <div className="mt-3">
                <span className="font-serif font-bold text-base text-[#823B1E]">Terracota</span>
                <p className="font-mono text-xs text-[#6B5A45]">#823B1E</p>
                <p className="text-xs text-[#2A1D10]/80 mt-1">Gastos e excluir</p>
              </div>
            </div>

            {/* Ocre */}
            <div className="rounded-xl border border-[#D7B079]/50 bg-white p-4 shadow-xs">
              <div className="h-16 rounded-lg bg-[#82591E] shadow-inner" />
              <div className="mt-3">
                <span className="font-serif font-bold text-base text-[#82591E]">Ocre</span>
                <p className="font-mono text-xs text-[#6B5A45]">#82591E</p>
                <p className="text-xs text-[#2A1D10]/80 mt-1">Rótulos e destaques</p>
              </div>
            </div>

            {/* Areia */}
            <div className="rounded-xl border border-[#D7B079]/50 bg-white p-4 shadow-xs">
              <div className="h-16 rounded-lg bg-[#D7B079] shadow-inner" />
              <div className="mt-3">
                <span className="font-serif font-bold text-base text-[#2A1D10]">Areia</span>
                <p className="font-mono text-xs text-[#6B5A45]">#D7B079</p>
                <p className="text-xs text-[#2A1D10]/80 mt-1">Etiquetas e bordas</p>
              </div>
            </div>
          </div>

          {/* Neutros */}
          <div className="rounded-xl bg-[#F1E4CC] border-2 border-[#D7B079] p-4 flex flex-wrap items-center justify-between gap-4 text-xs">
            <span className="font-serif font-bold text-sm text-[#2A1D10]">Neutros Oficiais:</span>
            <span>Papel: <strong className="font-mono">#FBF5EA</strong></span>
            <span>Linho: <strong className="font-mono">#F1E4CC</strong></span>
            <span>Tinta: <strong className="font-mono">#2A1D10</strong></span>
            <span>Cinza quente: <strong className="font-mono">#6B5A45</strong></span>
          </div>
        </section>

        {/* 3. Botões Coringa (Página 3 do PDF) */}
        <section className="space-y-6">
          <div>
            <h2 className="font-serif text-2xl font-bold text-[#1E2782]">
              Botões Coringa
            </h2>
            <p className="text-sm text-[#6B5A45]">
              Variantes exatas do design system (Adicionar gasto, Cancelar e Excluir)
            </p>
          </div>

          <div className="rounded-2xl border-2 border-[#D7B079]/40 bg-white p-6 sm:p-8 space-y-6">
            <div>
              <h3 className="text-xs font-semibold text-[#6B5A45] uppercase tracking-wider mb-4">
                Variantes do Design System
              </h3>
              <div className="flex flex-wrap items-center gap-4">
                {/* Petróleo: Adicionar gasto */}
                <Button variant="primary">Adicionar gasto</Button>

                {/* Cancelar: Outline Petróleo sobre fundo claro */}
                <Button variant="secondary">Cancelar</Button>

                {/* Terracota: Excluir */}
                <Button variant="destructive">Excluir</Button>

                {/* Marinho: Ação nobre */}
                <Button variant="marinho">Finalizar Pedido</Button>

                {/* Ghost */}
                <Button variant="ghost">Apenas texto</Button>
              </div>
            </div>

            <div className="border-t border-[#D7B079]/30 pt-6">
              <h3 className="text-xs font-semibold text-[#6B5A45] uppercase tracking-wider mb-4">
                Tamanhos e Estados
              </h3>
              <div className="flex flex-wrap items-center gap-4">
                <Button variant="primary" size="sm">Pequeno (sm)</Button>
                <Button variant="primary" size="md">Médio (md)</Button>
                <Button variant="primary" size="lg">Grande (lg)</Button>
                <Button variant="primary" isLoading>Processando</Button>
                <Button variant="primary" disabled>Desabilitado</Button>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Mensagens de Erro e Alertas */}
        <section className="space-y-6">
          <div>
            <h2 className="font-serif text-2xl font-bold text-[#1E2782]">
              Mensagens de Erro e Alertas
            </h2>
            <p className="text-sm text-[#6B5A45]">
              Padrões para feedback de formulários, validações e alertas do sistema
            </p>
          </div>

          <div className="space-y-4">
            {showAlert && (
              <Alert
                variant="error"
                title="Erro de validação (Terracota)"
                onClose={() => setShowAlert(false)}
              >
                Não foi possível processar a operação. Verifique os dados informados e tente novamente.
              </Alert>
            )}

            <Alert variant="warning" title="Atenção (Ocre)">
              O estabelecimento fechará em breve para novos pedidos hoje às 22h.
            </Alert>

            <Alert variant="info" title="Informação (Petróleo)">
              Seu pedido está sendo preparado pelos nossos baristas artesanais.
            </Alert>

            <Alert variant="neutral" title="Aviso Geral (Linho e Areia)">
              Grãos especiais de torra fresca disponíveis na nossa cafeteria física.
            </Alert>
          </div>

          {/* Validação de campo / ErrorMessage */}
          <div className="rounded-xl border border-[#D7B079]/60 bg-white p-6 max-w-md">
            <h3 className="font-serif font-bold text-base text-[#1E2782] mb-3">
              Validação de Campo de Formulário
            </h3>
            <label className="block text-xs font-semibold text-[#2A1D10] mb-1">
              E-mail do Cliente
            </label>
            <input
              type="text"
              defaultValue="usuario@invalido"
              className="w-full rounded-lg border-2 border-[#823B1E] bg-[#FBF5EA] px-3.5 py-2 text-sm text-[#2A1D10] focus:outline-none focus:ring-2 focus:ring-[#823B1E]"
            />
            {showFieldError && (
              <ErrorMessage message="Por favor, insira um endereço de e-mail válido." />
            )}
            <button
              onClick={() => setShowFieldError(!showFieldError)}
              className="mt-3 text-xs text-[#1E5B82] hover:underline cursor-pointer"
            >
              Alternar mensagem de erro
            </button>
          </div>
        </section>

        {/* 5. Etiquetas, Badges e Cartões de Total (Página 1 e 3 do PDF) */}
        <section className="space-y-6">
          <div>
            <h2 className="font-serif text-2xl font-bold text-[#1E2782]">
              Etiquetas e Totais (Design System)
            </h2>
            <p className="text-sm text-[#6B5A45]">
              Modelos de etiquetas (Areia) e bloco de total (Marinho)
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            {/* Bloco Total do Mês (Cópia fiel da Página 3 do PDF) */}
            <div className="rounded-2xl border-2 border-[#D7B079]/40 bg-white p-6 space-y-4">
              <span className="text-xs font-semibold text-[#6B5A45] uppercase tracking-wider">
                Total do Mês (Página 3)
              </span>

              {/* Card Azul Marinho com Total em Branco */}
              <div className="rounded-xl bg-[#1E2782] p-6 text-white shadow-md">
                <span className="text-xs uppercase tracking-wider text-white/80">
                  Total de gastos
                </span>
                <div className="mt-1 font-sans text-3xl font-extrabold tracking-tight">
                  R$ 1.248,50
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Badge variant="areia">Etiqueta Areia</Badge>
                <Badge variant="ocre">Destaque Ocre</Badge>
                <Badge variant="terracota">Gasto Terracota</Badge>
                <Badge variant="petroleo">Petróleo</Badge>
              </div>
            </div>

            {/* Itens da Lista (Página 3 do PDF) */}
            <div className="rounded-2xl border-2 border-[#D7B079]/40 bg-white p-6 space-y-3">
              <span className="text-xs font-semibold text-[#6B5A45] uppercase tracking-wider">
                Itens da Lista (Página 3)
              </span>

              <div className="space-y-2">
                <div className="flex items-center justify-between rounded-lg bg-[#F1E4CC] px-4 py-3 border border-[#D7B079]/50">
                  <span className="font-medium text-[#2A1D10]">Café Espresso Duplo</span>
                  <span className="font-bold font-sans text-[#823B1E]">R$ 14,00</span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-[#F1E4CC] px-4 py-3 border border-[#D7B079]/50">
                  <span className="font-medium text-[#2A1D10]">Croissant Artesanal</span>
                  <span className="font-bold font-sans text-[#823B1E]">R$ 16,50</span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-[#F1E4CC] px-4 py-3 border border-[#D7B079]/50">
                  <span className="font-medium text-[#2A1D10]">Cappuccino Italiano</span>
                  <span className="font-bold font-sans text-[#823B1E]">R$ 12,00</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 6. Footer Coringa (Fundo Linho #F1E4CC) */}
      <Footer storeName="Cafeteria" />
    </div>
  );
}
