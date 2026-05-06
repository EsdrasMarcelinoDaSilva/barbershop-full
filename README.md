# ✂️ Barbershop — Sistema de Agendamento

Aplicação full stack para agendamento de serviços em barbearias. Permite que clientes visualizem serviços disponíveis, escolham barbeiros e façam reservas de horários de forma simples e rápida.

## ✨ Funcionalidades

- 📅 **Agendamento online** de serviços com seleção de data e horário
- 💈 **Catálogo de serviços** com preços e duração
- 👤 **Seleção de barbeiro** preferido
- 🗂️ **Histórico de agendamentos** do cliente
- 📱 **Interface responsiva** para uso em dispositivos móveis

## 🛠️ Stack

| Camada | Tecnologia |
|---|---|
| Framework | Next.js 14 (App Router) |
| Linguagem | TypeScript |
| Banco de dados | PostgreSQL |
| ORM | Prisma |
| Estilização | Tailwind CSS + shadcn/ui |
| Containerização | Docker + Docker Compose |
| Qualidade de código | ESLint, Prettier, Husky, lint-staged |

## 🚀 Como rodar localmente

### Pré-requisitos
- Node.js 18+
- Docker e Docker Compose

### Instalação

```bash
# Clone o repositório
git clone https://github.com/EsdrasMarcelinoDaSilva/barbershop-full.git
cd barbershop-full

# Suba o banco de dados
docker-compose up -d

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp .env.example .env

# Rode as migrations e seed do banco
npx prisma migrate dev
npx prisma db seed

# Inicie o servidor de desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000)

## 🗄️ Variáveis de ambiente

```env
DATABASE_URL=postgresql://user:password@localhost:5432/barbershop
NEXTAUTH_SECRET=sua_chave_secreta
NEXTAUTH_URL=http://localhost:3000
```

## 📁 Estrutura do projeto

```
barbershop-full/
├── src/
│   └── app/           # Rotas e páginas (Next.js App Router)
├── prisma/            # Schema, migrations e seed do banco
├── public/            # Imagens e assets
├── .husky/            # Git hooks (pre-commit)
└── docker-compose.yml # Configuração dos containers
```

## 🔧 Decisões técnicas

- **Next.js App Router** — server components para carregamento eficiente dos dados de agendamento
- **Prisma ORM** — modelagem relacional com type-safety (barbearias, serviços, barbeiros, agendamentos)
- **Prisma Seed** — dados iniciais para facilitar o desenvolvimento e demonstração
- **Husky + lint-staged** — padronização automática do código antes de cada commit
- **shadcn/ui** — componentes acessíveis e customizáveis para a interface de agendamento
