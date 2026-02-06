# DevOps Study Planner - Estrutura do Projeto

## 📂 Hierarquia de Pastas

```
Workspace/
│
├── 📁 src/                          # Código-fonte da aplicação
│   ├── 📁 components/               # Componentes React reutilizáveis
│   │   ├── Dashboard.tsx            # Painel principal com estatísticas
│   │   ├── Roadmap.tsx              # Listagem de fases com toggle
│   │   ├── PhaseCard.tsx            # Card de cada fase (com barra de progresso)
│   │   └── TopicCard.tsx            # Card de cada tópico (com status + notas)
│   │
│   ├── 📁 context/                  # Context API para estado global
│   │   └── StudyContext.tsx         # Fornecedor de estado + hooks (updateStatus, etc)
│   │
│   ├── 📁 data/                     # Dados estáticos da aplicação
│   │   └── roadmap.ts               # Roadmap com 9 fases e 46 tópicos
│   │
│   ├── 📁 types/                    # Tipos TypeScript
│   │   └── index.ts                 # Interfaces: Topic, Phase, StudyStatus, etc
│   │
│   ├── 📁 utils/                    # Funções utilitárias (futuro)
│   │
│   ├── App.tsx                      # Componente raiz (layout principal)
│   ├── App.css                      # Estilos gerais
│   ├── main.tsx                     # Entry point (React.createRoot)
│   └── index.css                    # Estilos globais (Tailwind directives)
│
├── 📁 public/                       # Arquivos estáticos
│   └── index.html                   # Template HTML (Vite inject scripts here)
│
├── 📁 .github/                      # Configuração GitHub
│   └── copilot-instructions.md      # Instruções do Copilot
│
├── 🔧 package.json                  # Dependências e scripts npm
├── 🔧 tsconfig.json                 # Configuração TypeScript
├── 🔧 tsconfig.node.json            # Config TS para Vite
├── 🔧 vite.config.ts                # Configuração do builder Vite
├── 🔧 tailwind.config.js            # Configuração Tailwind CSS
├── 🔧 postcss.config.js             # Processamento CSS
│
├── 📝 README.md                     # Documentação principal
├── 📝 STRUCTURE.md                  # Este arquivo
├── 📝 .gitignore                    # Arquivos ignorados pelo Git
└── 📝 .env.example                  # Variáveis de ambiente (exemplo)
```

## 🔄 Fluxo de Dados

```
                    ┌─────────────────────────┐
                    │   LocalStorage          │
                    │  (devops-study-planner) │
                    └────────────┬────────────┘
                                 │
                    ┌────────────▼────────────┐
                    │   StudyContext          │
                    │  (Context API Provider) │
                    └────────────┬────────────┘
                                 │
           ┌─────────────────────┼─────────────────────┐
           │                     │                     │
      ┌────▼────┐         ┌─────▼────┐         ┌─────▼────┐
      │Dashboard │         │  Roadmap │         │  PhaseCard
      │          │         │          │         │
      │ Stats    │         │ Expanded │         │  Accordion
      │ Progress │         │ Phases   │         │  Topics
      └──────────┘         └──────────┘         └──────────┘
           │                     │                     │
           │                     │                     │
      ┌────▼──────────────────────▼─────────────────────▼────┐
      │              TopicCard (Múltiplas)                    │
      │  ┌──────────────────────────────────────────────┐    │
      │  │ Título + Descrição                           │    │
      │  │ [⭕] [🔄] [✅] Status buttons                │    │
      │  │ [📝] Notes button                            │    │
      │  │                                              │    │
      │  │ (Se notes) → Textarea + Save/Cancel         │    │
      │  └──────────────────────────────────────────────┘    │
      └──────────────────────────────────────────────────────┘
```

## 🎯 Componentes & Responsabilidades

### Dashboard
- Exibe stats principais (progresso %, tópicos concluídos, etc)
- Cálculos via `getTotalProgress()` e contadores
- CTA para scroll até roadmap

### Roadmap
- Container de fases
- Accordion com toggle expand/collapse
- Renderiza PhaseCard para cada fase

### PhaseCard
- Display de fase com cor dinâmica
- Barra de progresso
- Grid de TopicCards
- Cálculo de progresso via `getProgressPercentage(phaseId)`

### TopicCard
- Status (3 botões para trocar status)
- Notas (toggle edit mode)
- Auto-save via `updateTopicStatus` e `updateTopicNotes`

### StudyContext
- Gerencia estado global (phases)
- localStorage.getItem/setItem automático
- Helpers: updateTopicStatus, updateTopicNotes, getProgressPercentage

## 🎨 Paleta de Cores Tailwind

```
Fases (background):
  - Fundamentos:     bg-blue-500
  - Servidores:      bg-purple-500
  - Containers:      bg-cyan-500
  - CI/CD:          bg-orange-500
  - Cloud:          bg-pink-500
  - IaC:            bg-green-500
  - Kubernetes:     bg-yellow-500
  - Observability:  bg-red-500
  - Advanced:       bg-indigo-500
```

## 📊 Estrutura de Dados

```typescript
// LocalStorage JSON Structure
{
  phases: [
    {
      id: 'fundamentals',
      title: '🏗️ Fundamentos DevOps',
      description: 'Conceitos básicos...',
      color: 'bg-blue-500',
      topics: [
        {
          id: 'linux-basics',
          title: 'Linux Basics',
          description: '...',
          status: 'not-started' | 'in-progress' | 'completed',
          notes: 'Minhas anotações aqui...'
        },
        ...
      ]
    },
    ...
  ]
}
```

## 🔌 Extensões Futuras (Slots)

```typescript
// utils/api.ts (futuro)
- fetchPhases()
- updatePhaseOnServer()
- syncWithCloud()

// utils/export.ts (futuro)
- exportToJSON()
- exportToCSV()
- generateReport()

// components/ThemeToggle.tsx (futuro)
- Dark/light mode
- Tema DevOps customizado

// components/Analytics.tsx (futuro)
- Gráficos de progresso
- Timeline de aprendizado
```

## 🚀 Scripts Disponíveis

```bash
npm run dev       # Dev server com hot reload
npm run build     # Production build
npm run preview   # Preview da build
npm run lint      # Lint (future setup)
```

## 📱 Responsividade

- Grid layout: `grid-cols-1 md:grid-cols-4` (adapta automaticamente)
- Todos componentes mobile-first
- Tailwind breakpoints padrão

---

**Última atualização**: Fevereiro 2026
