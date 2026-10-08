# Site DOMO

Landing page institucional do Escritório DOMO. O protótipo apresenta os
ambientes do 19º andar e direciona pessoas interessadas para atendimento
manual pelo WhatsApp.

## Escopo atual

- Página única, responsiva e institucional.
- Apresentação dos ambientes, salas de reunião e escritórios privativos.
- Comodidades e localização.
- Contato manual pelo WhatsApp.

Não fazem parte deste protótipo back-end, banco de dados, autenticação,
reservas, pagamentos, painel administrativo ou outras unidades.

## Stack

- Next.js 16 com App Router.
- React 19.
- TypeScript.
- Tailwind CSS 4.
- ESLint.
- npm.

## Configuração local

Instale as dependências:

```bash
npm install
```

Crie o arquivo de ambiente local a partir do exemplo e preencha o número
somente depois de ele ser confirmado:

```powershell
Copy-Item .env.example .env.local
```

```dotenv
NEXT_PUBLIC_WHATSAPP_NUMBER=
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

A aplicação ficará disponível em [http://localhost:3000](http://localhost:3000).

## Verificações de qualidade

```bash
npm run lint
npx tsc --noEmit
npm run build
```

## Docker

Para gerar e executar a versão de produção em um container, consulte o guia
passo a passo em [DOCKER.md](./DOCKER.md).

## Organização

```text
src/
  app/          # Rota, layout e estilos globais
  components/   # Layout, seções e componentes reutilizáveis
  data/         # Conteúdo confirmado do site
  lib/          # Funções auxiliares, como o link do WhatsApp
  types/        # Tipos compartilhados

public/images/  # Logo e fotografias reais dos ambientes
```

Dados comerciais ou institucionais ainda não confirmados devem permanecer
marcados como placeholders e nunca ser apresentados como fatos.
