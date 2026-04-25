# BELLA PLUMA - Landing Page

Landing page institucional da BELLA PLUMA, desenvolvida para apresentar produtos de conforto e bem-estar para cama, construir confianca rapidamente e converter visitantes em conversas no WhatsApp.

## 1. Objetivo do projeto

O foco do site e comercial:

- apresentar marca e produtos com clareza
- destacar beneficios e diferenciais
- facilitar o clique em "Comprar" e "Falar no WhatsApp"
- manter navegacao simples, rapida e responsiva

Escopo intencionalmente enxuto:

- sem carrinho
- sem checkout
- sem login
- sem pagamento online

## 2. Stack tecnica

- React 19
- Vite 8
- Tailwind CSS 3
- React Icons (icone oficial do WhatsApp)

## 3. Direcao visual aplicada

- Base clara (fundo branco)
- Tipografia limpa e legivel
- Preto para textos fortes
- Verde oficial do WhatsApp para CTAs (`#25D366`)
- Roxo e amarelo restritos a identidade da logo BELLA PLUMA

Resultado esperado: aparencia profissional, confiavel e pronta para cliente final.

## 4. Funcionalidades principais

- Header fixo com navegacao por ancora
- Hero com proposta de valor e CTA principal
- Secao sobre a marca
- Grade de produtos com cards padronizados
- Lista de diferenciais
- CTA final com foco em conversao
- Footer institucional
- Botao flutuante de WhatsApp

## 5. Conversao via WhatsApp

Todos os CTAs usam link no formato:

`https://wa.me/556282029314?text=MENSAGEM_ENCODED`

Implementacao centralizada em:

- `src/utils/whatsapp.js`

Vantagem dessa abordagem:

- numero unificado
- mensagens por produto configuraveis no array de dados
- manutencao simples

## 6. Estrutura de pastas

```text
bella-pluma/
  public/
  src/
    components/
      AboutSection.jsx
      DifferentialsSection.jsx
      FinalCtaSection.jsx
      Footer.jsx
      Header.jsx
      HeroSection.jsx
      ProductCard.jsx
      ProductsSection.jsx
      SectionHeading.jsx
      WhatsAppButton.jsx
    data/
      differentials.js
      products.js
    utils/
      whatsapp.js
    App.jsx
    index.css
    main.jsx
  index.html
  tailwind.config.js
  vite.config.js
  package.json
```

## 7. Componentes reutilizaveis

### `WhatsAppButton`

Componente de CTA padrao da aplicacao.

- variantes visuais (`primary`, `outline`, `floating`)
- icone oficial do WhatsApp
- suporte para modo somente icone (botao flutuante)

### `SectionHeading`

Padroniza blocos de titulo/subtitulo entre secoes para consistencia visual.

### `ProductCard`

Card comercial com estrutura fixa:

- imagem padronizada no topo
- badge opcional
- nome do produto
- variacao
- descricao
- beneficios com checks verdes
- botao "Comprar" alinhado na base

## 8. Modelo de dados

Produtos e diferenciais estao desacoplados da UI e podem ser alterados sem refatorar layout:

- `src/data/products.js`
- `src/data/differentials.js`

Para adicionar novo produto, basta inserir novo objeto no array `products` com:

- `name`
- `description`
- `benefits`
- `variation`
- `imageUrl`
- `whatsappMessage`
- `badge` (opcional)

## 9. Responsividade e UX

- Layout mobile-first
- Grid adaptativo para cards
- Espacamento consistente
- Hierarquia tipografica clara
- Microinteracoes suaves em botoes e cards
- Estado de hover para feedback visual

## 10. Padrao visual e tokens

Configurados em `tailwind.config.js`:

- `bella.wa` -> verde principal (`#25D366`)
- `bella.wa-dark` -> hover do CTA
- `bella.wa-soft` -> fundos suaves de apoio
- `bella.ink` -> texto principal
- `bella.mist` -> bordas suaves

## 11. Scripts disponiveis

No `package.json`:

- `npm run dev` -> ambiente de desenvolvimento
- `npm run build` -> build de producao
- `npm run preview` -> preview local do build

## 12. Como rodar localmente

### Pre-requisitos

- Node.js 18+
- npm 9+

### Passos

```bash
npm install
npm run dev
```

Acesse a URL exibida no terminal (normalmente `http://localhost:5173`).

## 13. Build de producao

```bash
npm run build
npm run preview
```

Saida gerada em `dist/`.

## 14. Checklist de qualidade

- [x] Layout claro e profissional
- [x] CTAs verdes padronizados
- [x] Botao flutuante com icone oficial
- [x] Cards com estrutura consistente
- [x] Botao de compra alinhado na base dos cards
- [x] Sem fluxo de e-commerce completo
- [x] Conversao direcionada ao WhatsApp

## 15. Proximos passos recomendados

- conectar dados reais de catalogo e fotos proprias
- incluir prova social (depoimentos)
- integrar eventos de analytics (cliques em CTA)
- otimizar SEO com metadados e Open Graph
- publicar em Vercel ou Netlify

## 16. Licenca

Projeto de apresentacao comercial BELLA PLUMA.