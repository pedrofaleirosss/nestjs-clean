# 🧱 NestJS Clean Architecture — Fórum Q&A API 🚀💬

Este é o projeto do último módulo da trilha de Node.js da Rocketseat.  
Aqui integrei tudo o que aprendi nos módulos anteriores — **Domain-Driven Design**, **Clean Architecture**, **Prisma**, **Docker**, **Redis**, **JWT**, **Zod**, **Vitest**, testes E2E e muito mais.  
O resultado é uma API completa, limpa, escalável e totalmente testada. ✨

---

## 🧭 Visão Geral

Esta é a API de um fórum de perguntas e respostas, semelhante ao Stack Overflow.  
Com ela, usuários podem:

- Criar contas e autenticar via JWT 🔐  
- Criar perguntas e respostas ❓💬  
- Comentar em perguntas e respostas 🗨️  
- Enviar anexos (Cloudflare R2) 📎  
- Receber notificações 📬  
- Consumir rotas com cache em Redis ⚡  

Tudo isso construído sobre os princípios de Clean Architecture e Domain-Driven Design — separando regras de negócio da infraestrutura e garantindo manutenibilidade e escalabilidade.

---

## 🏛 Arquitetura do Projeto

A estrutura segue o padrão **Clean Architecture + DDD**, contendo:

```
src
├── core
│   ├── entities
│   ├── errors
│   ├── events
│   ├── repositories
│   ├── types
│   └── either.ts
│
├── domain
│   ├── forum
│   └── notification
│
└── infra
    ├── auth
    ├── cache
    ├── cryptography
    ├── database
    ├── env
    ├── events
    ├── http
    └── storage
```

Além disso, há:

```
test
├── cryptography
├── e2e
├── factories
├── repositories
└── utils
```

🧩 *Toda a camada de domínio é compartilhada com o projeto anterior [clean-domain-nodejs](https://github.com/pedrofaleirosss/clean-domain-nodejs.git), demonstrando como um core totalmente desacoplado pode ser reutilizado.*

---

## 🛠 Tecnologias & Ferramentas

### Backend & Core
- **NestJS** ✨
- **TypeScript**
- **Prisma ORM**
- **Zod** para validação
- **Clean Architecture + DDD**

### Autenticação
- **JWT** (tokens assinados com chave privada/pública)

### Infra & Integrações
- **PostgreSQL** (via Docker)
- **Redis** para cache ⚡
- **Cloudflare R2 (S3 compatible)** para upload de anexos
- **Docker Compose** para ambiente completo

### Testes
- **Vitest** (unitários)
- **Vitest + Supertest** (E2E)
- **Factories**, **In-memory Repositories**, **Mock de serviços externos**

---

## 📦 Instalação

```bash
git clone https://github.com/pedrofaleirosss/nestjs-clean.git
cd nestjs-clean
pnpm install
```

---

## ⚙️ Configuração do Ambiente

Crie um arquivo `.env` baseado no seu `.env.example` e um `.env.test` baseado no `.env.test.example`:

Preencha:

- Chaves JWT (privada e pública) 🔐  
- Credenciais do Cloudflare R2  
- Configurações do PostgreSQL  
- Configurações do Redis  

### Subir containers do Docker:

```bash
docker-compose up -d
```

### Executar migrações do Prisma:

```bash
pnpm prisma migrate dev
```

---

## ▶️ Executando a Aplicação

### Desenvolvimento

```bash
pnpm run start:dev
```

Disponível em:

```
http://localhost:3333
```

---

## 🧪 Testes

### Unitários

```bash
pnpm run test
```

### End-to-End

```bash
pnpm run test:e2e
```

### Testes contínuos

```bash
pnpm run test:watch
```

---

## 🔥 Endpoints da API

### 🔐 Autenticação
```
POST /sessions
POST /accounts
```

### ❓ Perguntas
```
POST   /questions
GET    /questions
GET    /questions/:slug
PUT    /questions/:id
DELETE /questions/:id
```

### 💬 Respostas
```
POST   /questions/:questionId/answers
GET    /questions/:questionId/answers
PUT    /answers/:id
DELETE /answers/:id
PATCH  /answers/:answerId/choose-as-best
```

### 🗨️ Comentários
```
POST   /questions/:questionId/comments
GET    /questions/:questionId/comments
DELETE /questions/comments/:id

POST   /answers/:answerId/comments
GET    /answers/:answerId/comments
DELETE /answers/comments/:id
```

### 📎 Anexos
```
POST /attachments
```

### 🔔 Notificações
```
PATCH /notifications/:notificationId/read
```

---

## 🧠 Aprendizados Principais

✔ NestJS na prática (modules, controllers, providers, pipes, filters)  
✔ Integração entre Nest e Clean Architecture  
✔ Reutilização completa do core de domínio  
✔ Prisma + Docker + Redis + R2  
✔ Testes unitários e end‑to‑end  
✔ JWT com chave privada/pública  
✔ Cache de consultas  
✔ Upload com provedores externos  
✔ Configuração avançada de ambiente (.env, .env.test, docker-compose)  

---

## 🔗 Repositório

➡️ **https://github.com/pedrofaleirosss/nestjs-clean**

---

## ✨ Finalização

Esse foi o projeto que consolidou toda a formação Node, unindo **NestJS**, **DDD**, **Clean Architecture**, **Testes**, **Prisma**, **Infraestrutura** e **Arquitetura Profissional**. 

---

## 🙋‍♂️ Autor

Desenvolvido por [Pedro Faleiros](https://github.com/pedrofaleirosss)

