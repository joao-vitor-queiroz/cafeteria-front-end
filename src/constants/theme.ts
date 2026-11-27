/**
 * Design Tokens oficiais extraídos de design-system1/paleta.pdf
 * Serve como referência única da verdade (Single Source of Truth) para o visual da cafeteria.
 */
export const PALETTE = {
  // Cores de Ação e Destaque
  marinho: '#1E2782', // Cabeçalho, navbar e cartões de total
  petroleo: '#1E5B82', // Cor primária e botões principais
  terracota: '#823B1E', // Gastos, mensagens de erro e ações destrutivas (excluir)
  ocre: '#82591E', // Rótulos, avisos e destaques
  areia: '#D7B079', // Etiquetas, badges e bordas sutis

  // Cores Neutras
  papel: '#FBF5EA', // Fundo principal da aplicação
  linho: '#F1E4CC', // Fundo de cartões, listas e inputs
  tinta: '#2A1D10', // Cor principal de textos e títulos
  cinzaQuente: '#6B5A45', // Textos secundários, legendas e bordas neutras
} as const;

export const TYPOGRAPHY = {
  titles: 'Fraunces, serif',
  body: 'DM Sans, sans-serif',
  weights: {
    light: 300,
    regular: 500,
    bold: 800,
  },
} as const;
