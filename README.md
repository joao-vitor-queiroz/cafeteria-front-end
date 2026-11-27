# Cafeteria Front-End

> Projeto final da cadeira de Programação Front-End.

Aplicação moderna para cardápio e gerenciamento de pedidos de cafeteria artesanal, desenvolvida com foco em escalabilidade, código limpo, componentização e segurança por padrão (*secure by default*).

---

## 🚀 Tecnologias Utilizadas

- **[Next.js](https://nextjs.org/)** (App Router) — Framework React com Server-Side Rendering (SSR) e otimizações automáticas.
- **[React](https://react.dev/)** — Biblioteca para construção de interfaces reativas e declarativas.
- **[Tailwind CSS](https://tailwindcss.com/)** — Framework de estilização utilitária para designs responsivos.
- **[TanStack Query (React Query v5)](https://tanstack.com/query/latest)** — Gerenciamento de estado assíncrono, cache inteligente e sincronização de dados de API.
- **[Zustand](https://zustand.docs.pmnd.rs/)** — Gerenciamento de estado global leve e atômico (utilizado para o carrinho e preferências).
- **[TypeScript](https://www.typescriptlang.org/)** — Tipagem estática para previsibilidade e redução de erros em tempo de desenvolvimento.

---

## 📁 Estrutura de Pastas

A arquitetura foi desenhada para garantir **baixo acoplamento, alta coesão e facilidade de manutenção**:

```text
cafeteria-front-end/
├── docs/                   # Documentações de apoio e assets de design
├── design-system1/         # Especificações visuais e paleta de cores
├── public/                 # Arquivos estáticos (ícones, imagens)
├── src/
│   ├── app/                # Rotas do Next.js (App Router)
│   │   ├── layout.tsx      # Layout raiz com injeção de Providers e Header
│   │   ├── page.tsx        # Página principal com cardápio interativo
│   │   ├── loading.tsx     # Skeleton de carregamento instantâneo
│   │   ├── error.tsx       # Error Boundary seguro (sem vazamento de dados)
│   │   ├── not-found.tsx   # Página 404 personalizada
│   │   └── globals.css     # Estilos globais e tokens Tailwind
│   ├── components/         # Componentes reutilizáveis de interface
│   │   ├── ui/             # Componentes base (Button, etc.)
│   │   ├── common/         # Componentes estruturais (Header, etc.)
│   │   └── products/       # Componentes de domínio de produtos (ProductCard)
│   ├── hooks/              # Custom hooks (ex: useProducts com TanStack Query)
│   ├── lib/                # Configurações de clientes (react-query singleton/SSR)
│   ├── providers/          # Provedores de contexto (AppProviders, QueryProvider)
│   ├── services/           # Camada de comunicação com APIs e dados
│   ├── stores/             # Stores Zustand (ex: useCartStore)
│   └── types/              # Tipos TypeScript compartilhados
├── eslint.config.mjs       # Configuração de linting
├── next.config.ts          # Configurações do Next.js
├── package.json            # Dependências e scripts do projeto
├── tsconfig.json           # Configurações do compilador TypeScript
└── README.md               # Documentação do projeto
```

---

## 🔒 Princípios de Segurança e Qualidade Adotados

1. **Isolamento de Cache no Servidor (SSR):** O cliente do TanStack Query no servidor gera uma nova instância por requisição, prevenindo qualquer compartilhamento de cache ou vazamento de dados entre diferentes usuários.
2. **Tratamento Seguro de Erros:** O componente `error.tsx` intercepta falhas sem expor stack traces ou dados sensíveis de infraestrutura no cliente.
3. **Privacidade e Menor Privilégio:** A store de carrinho do Zustand não armazena credenciais nem dados sensíveis em `localStorage`.
4. **Prevenção de Vulnerabilidades:** Arquivo `.gitignore` configurado para impedir o envio acidental de `.env`, segredos, dependências e artefatos de sistema.

---

## 💻 Como Rodar o Projeto Localmente

### Pré-requisitos
- **Node.js** v20 ou superior
- **npm** (ou gerenciador de sua preferência)

### Passo a Passo

1. **Instalar dependências:**
   ```bash
   npm install
   ```

2. **Iniciar o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

3. **Acessar no navegador:**
   Abra [http://localhost:3000](http://localhost:3000).

4. **Verificar integridade do código (Lint):**
   ```bash
   npm run lint
   ```

5. **Gerar build de produção:**
   ```bash
   npm run build
   ```
