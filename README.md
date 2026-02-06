# DevOps Study Planner 📚

Uma aplicação web moderna, intuitiva e totalmente funcional para organizar e acompanhar seu plano de estudos DevOps baseado no [roadmap.sh/devops](https://roadmap.sh/devops).

## ✨ Características

- ✅ **Dashboard intuitivo** com progresso geral em tempo real
- 🗂️ **Roadmap organizado** em 9 fases cronológicas
- 📝 **Sistema de status**: Não iniciado, Em andamento, Concluído
- 💾 **Persistência local** com localStorage (zero servidor)
- 🎨 **UI moderna** com Tailwind CSS (estilo SaaS)
- 📊 **Cálculo automático** de progresso por fase e geral
- 📌 **Notas pessoais** para cada tópico
- 📱 **Responsivo** em desktop, tablet e mobile

## 🏗️ Fases do Roadmap

1. **🏗️ Fundamentos DevOps** - Linux, Networking, Git, YAML/JSON
2. **💻 Servidores & Web Servers** - Nginx, Apache, Load Balancing
3. **🐳 Containers & Docker** - Docker, Docker Compose, Registries
4. **⚙️ CI/CD** - GitHub Actions, Jenkins, GitLab CI, Testing
5. **☁️ Cloud Platforms** - AWS, Azure, GCP, Serverless
6. **📝 Infrastructure as Code** - Terraform, Ansible, CloudFormation
7. **⚡ Kubernetes** - K8s, Networking, Storage, Helm
8. **📊 Observability** - Logging, Metrics, Tracing, Alerting
9. **🚀 Advanced Topics** - Service Mesh, Security, Cost Optimization

## 🛠️ Stack Tecnológico

| Componente | Tecnologia | Motivo |
|-----------|-----------|--------|
| **Framework** | React 18 | Moderno, escalável, pronto para DevOps |
| **Builder** | Vite | Rápido, otimizado, futuro-proof |
| **Linguagem** | TypeScript | Type-safe, melhor DX |
| **Styling** | Tailwind CSS | Design moderno, responsivo, SaaS-like |
| **Estado** | Context API | Simples, sem dependências extras |
| **Storage** | localStorage | Zero backend no início |

## 📦 Instalação & Execução

### Requisitos
- Node.js 16+ e npm

### Passos

```bash
# 1. Entrar no diretório do projeto
cd /home/michael/Documents/Visual\ Studio/Workspace

# 2. Instalar dependências
npm install

# 3. Iniciar servidor de desenvolvimento
npm run dev

# Abrirá automaticamente em http://localhost:3000
```

### Build para Produção

```bash
npm run build

# Gera pasta 'dist' pronta para deploy
```

## 📂 Estrutura do Projeto

```
Workspace/
├── src/
│   ├── components/
│   │   ├── Dashboard.tsx       # Painel de progresso geral
│   │   ├── Roadmap.tsx         # Listagem de fases
│   │   ├── PhaseCard.tsx       # Card de cada fase
│   │   └── TopicCard.tsx       # Card de cada tópico
│   ├── context/
│   │   └── StudyContext.tsx    # Context API para estado global
│   ├── data/
│   │   └── roadmap.ts          # Dados do roadmap (9 fases)
│   ├── types/
│   │   └── index.ts            # Tipos TypeScript
│   ├── App.tsx                 # Componente raiz
│   ├── main.tsx                # Entry point React
│   └── index.css / App.css     # Estilos
├── public/
│   └── index.html              # HTML template
├── package.json                # Dependências e scripts
├── tsconfig.json               # Configuração TypeScript
├── vite.config.ts              # Configuração Vite
├── tailwind.config.js          # Configuração Tailwind
├── postcss.config.js           # Processamento CSS
└── README.md                   # Este arquivo
```

## 🎯 Como Usar

### 1. **Acompanhar Progresso**
   - Dashboard no topo mostra progresso geral (%) e estatísticas

### 2. **Marcar Tópicos**
   - Clique nos ícones de status (⭕ → 🔄 → ✅)
   - Cada mudança atualiza o progresso instantaneamente

### 3. **Adicionar Notas**
   - Clique em "📝 Notas" em qualquer tópico
   - Escreva suas observações e clique "Salvar"

### 4. **Expandir Fases**
   - Clique na fase para expandir/recolher tópicos
   - Barra de progresso por fase no topo de cada fase

## 💾 Dados

- **Armazenamento**: localStorage do navegador
- **Chave**: `devops-study-planner`
- **Auto-salvamento**: Toda mudança é salva automaticamente
- **Sincronização**: Dados carregados ao abrir a app

### Limpar Dados
```javascript
// No console do navegador
localStorage.removeItem('devops-study-planner')
```

## 🚀 Evolução Futura (Roadmap do Planner)

### Fase 2: Backend & Persistência
- [ ] API REST (Node.js/Express ou Python/FastAPI)
- [ ] Banco de dados (PostgreSQL/MongoDB)
- [ ] Autenticação (JWT)
- [ ] Sincronização com múltiplos dispositivos

### Fase 3: DevOps Real
- [ ] Containerizar app (Docker)
- [ ] CI/CD pipeline (GitHub Actions/GitLab CI)
- [ ] Deploy automático (Kubernetes/Cloud)
- [ ] Monitoramento (Prometheus/Grafana)

### Fase 4: Recursos Avançados
- [ ] Gráficos de progresso (Chart.js)
- [ ] Importar/Exportar dados
- [ ] Temas escuro/claro
- [ ] Integração com APIs externas
- [ ] Sistema de certificados/badges

## 🛣️ Próximos Passos Recomendados

1. **Explore o código** - Entenda a estrutura Context API + Tailwind
2. **Customize o roadmap** - Adicione/remova tópicos em `src/data/roadmap.ts`
3. **Crie um backend** - Prepare-se para persistência real
4. **Dockerize** - `Dockerfile` + `docker-compose.yml`
5. **CI/CD** - Configure GitHub Actions para build/deploy

## 📚 Recursos

- [React 18 Docs](https://react.dev)
- [Vite Docs](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [DevOps Roadmap](https://roadmap.sh/devops)

## 📝 Licença

Aberto para uso pessoal e aprendizado.

---

**Desenvolvido com ❤️ para sua jornada DevOps**
