# 💰 DT Money App

> Aplicação mobile de controle financeiro pessoal desenvolvida com React Native, Expo e NativeWind

## 📱 Sobre o Projeto

O **DT Money App** é uma aplicação financeira moderna para controle de gastos pessoais, desenvolvida durante a jornada RocketSeat. O projeto utiliza as mais recentes tecnologias do ecossistema React Native com foco em performance, usabilidade e arquitetura limpa.

## ✨ Funcionalidades

- 🔐 **Autenticação de Usuário**: Login e cadastro seguro
- 💸 **Controle de Transações**: Adicionar receitas e despesas
- 📊 **Dashboard**: Visualização de resumo financeiro
- 🏷️ **Categorização**: Organização por categorias
- 📈 **Relatórios**: Análise de gastos e tendências
- 🎨 **Interface Moderna**: Design system com NativeWind
- 🌙 **Dark Theme**: Interface escura otimizada

## 🛠️ Tecnologias Utilizadas

### Core Stack

- **React Native** - Framework mobile multiplataforma
- **Expo SDK 54** - Toolchain e runtime
- **TypeScript** - Tipagem estática
- **NativeWind v4** - Tailwind CSS para React Native

### Navegação & Estado

- **React Navigation v6** - Sistema de navegação
- **React Hook Form** - Gerenciamento de formulários
- **Context API** - Gerenciamento de estado global

### Interface & Componentes

- **Expo Vector Icons** - Biblioteca de ícones Material Design
- **React Native Reanimated** - Animações fluidas
- **CLSX** - Utilitário para classes condicionais
- **NativeWind** - Sistema de design baseado em Tailwind

### Validação & Formulários

- **@hookform/resolvers** - Resolvers para React Hook Form
- **YUP** - Schema de validação para formulários

### Desenvolvimento

- **Babel** - Transpilador JavaScript
- **Metro** - Bundler React Native
- **ESLint** - Linting e qualidade de código
- **Prettier** - Formatação automática

## 🏗️ Arquitetura do Projeto

```text
dt-money-app/
├── 📁 src/
│   ├── 📁 components/          # Componentes reutilizáveis
│   │   ├── AppInput/          # Input avançado com validação
│   │   ├── AuthHeader/        # Cabeçalho de autenticação
│   │   └── DismissKeyboard/   # Utilitário para teclado
│   ├── 📁 routes/             # Sistema de navegação
│   │   ├── PublicRoutes/      # Rotas públicas (Login, Register)
│   │   ├── PrivateRoutes/     # Rotas privadas (Home, etc)
│   │   └── index.tsx          # Roteamento principal
│   ├── 📁 screens/            # Telas da aplicação
│   │   ├── Login/             # Autenticação
│   │   │   └── LoginForm/     # Formulário de login
│   │   ├── Register/          # Cadastro de usuário
│   │   └── Home/              # Dashboard principal
│   ├── 📁 shared/             # Recursos compartilhados
│   │   └── colors.ts          # Sistema de cores
│   └── 📁 styles/             # Estilos globais
│       └── global.css         # CSS do NativeWind
├── 📁 .github/                # Documentação GitHub
│   └── copilot-instructions.md
├── App.tsx                    # Componente raiz
├── app.json                   # Configuração Expo
└── package.json               # Dependências
```

## 🚀 Instalação e Execução

### Pré-requisitos

- **Node.js** >= 20.19.4
- **npm** ou **yarn**
- **Expo CLI** (opcional, mas recomendado)
- **Android Studio** (para emulador Android)
- **Xcode** (para iOS - macOS only)

### Passo a Passo

1. **Clone o repositório**

   ```bash
   git clone https://github.com/marcio-morais/RocketSeat.git
   cd RocketSeat/ReactNative/dt-money-app
   ```

2. **Instale as dependências**

   ```bash
   npm install
   ```

3. **Execute o projeto**

   ```bash
   # Iniciar servidor de desenvolvimento
   npm start

   # Executar no Android
   npm run android

   # Executar no iOS
   npm run ios

   # Executar no navegador (web)
   npm run web
   ```

## 🎨 Design System

### Paleta de Cores

```tsx
// Sistema de cores personalizado
const colors = {
  'accent-brand': '#00875F',           // Verde principal
  'accent-brand-light': '#00B37E',     // Verde claro
  'accent-red': '#F75A68',             // Vermelho (despesas)
  'accent-blue': '#5A86F7',            // Azul (receitas)
  'background-primary': '#121214',      // Fundo escuro
  'background-secondary': '#202024',    // Fundo secundário
  'background-tertiary': '#29292E',     // Fundo terciário
}
```

### Componentes Principais

- **AppInput**: Input customizado com validação React Hook Form e ícones
- **AuthHeader**: Cabeçalho para telas de autenticação
- **DismissKeyboardView**: Container que fecha teclado ao tocar
- **ErrorMessage**: Componente para exibir erros de validação
- **AppButton**: Botão padronizado com ícones e variações

## 📦 Scripts Disponíveis

```bash
npm start          # Iniciar Expo dev server
npm run android    # Executar no Android
npm run ios        # Executar no iOS  
npm run web        # Executar no navegador
npm run reset      # Resetar cache do Metro
```

## 🧪 Desenvolvimento

### Estrutura de Componentes

```tsx
// Padrão de componente reutilizável
interface ComponentProps {
  // Props tipadas
}

export const Component = ({ ...props }: ComponentProps) => {
  return (
    <View className="flex-1 bg-background-primary">
      {/* JSX com classes NativeWind */}
    </View>
  );
};
```

### Navegação

- **Rotas Públicas**: Login, Register (usuário não autenticado)
- **Rotas Privadas**: Home, Profile (usuário autenticado)
- **Stack Navigation**: Navegação em pilha com React Navigation

### Formulários

- **React Hook Form**: Validação e controle de estado
- **Componentes Controlados**: Integração com AppInput
- **Validação em Tempo Real**: Feedback instantâneo

## 🤝 Contribuição

Este projeto faz parte do programa **RocketSeat** e está em desenvolvimento ativo. Contribuições são bem-vindas!

### Como Contribuir

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'feat: adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

### Convenções de Commit

- `feat:` - Nova funcionalidade
- `fix:` - Correção de bug
- `docs:` - Mudanças na documentação
- `style:` - Mudanças de estilo/formatação
- `refactor:` - Refatoração de código
- `test:` - Adição de testes

## 📚 Recursos de Aprendizado

Este projeto incorpora conceitos avançados de React Native:

- ✅ **Arquitetura Componentizada**
- ✅ **TypeScript com Generics**
- ✅ **Sistema de Design Consistente**
- ✅ **Navegação Estruturada**
- ✅ **Formulários Avançados**
- ✅ **Reutilização de Código**
- ✅ **Validação com YUP Schemas** *(Adicionado Nov 5, 2025)*
- ✅ **Tratamento de Erros** *(Adicionado Nov 5, 2025)*
- ✅ **Navegação entre Telas** *(Adicionado Nov 5, 2025)*

## 🆕 Últimas Atualizações (Nov 22, 2025)

### Funcionalidades Implementadas Recentemente

- 📱 **Sistema de Notificações**: SnackBar para feedback visual
- 🔐 **Autenticação Completa**: Login/Logout com Context API
- ⚠️ **Tratamento de Erros**: Sistema robusto com AppError
- 📡 **Interceptors HTTP**: Axios com tratamento automático de erros
- 🔄 **Navegação Dinâmica**: Rotas públicas/privadas baseadas em autenticação
- 🎯 **Loading Screen**: Tela de carregamento com restore de sessão
- 🛠️ **Bug Fixes**: Correção de hooks React e melhorias na arquitetura

### Novos Componentes e Funcionalidades

#### 🎯 **Sistema de Notificações (SnackBar)**

- **Localização**: `src/components/SnackBar/`
- **Context**: `src/context/snackbar.context.tsx`
- **Funcionalidades**:
  - Notificações de sucesso, erro e informação
  - Auto-dismiss após 3 segundos
  - Posicionamento responsivo

#### 🔐 **Sistema de Autenticação Avançado**

- **Context API**: Gerenciamento global de estado de auth
- **AsyncStorage**: Persistência de sessão
- **Auto-restore**: Recuperação automática de sessão
- **Loading States**: Estados de carregamento durante auth

#### 📡 **Interceptors HTTP**

- **Axios Interceptors**: Tratamento automático de respostas
- **Classe AppError**: Erros tipados e estruturados  
- **Fallback Messaging**: Mensagens padrão para erros

### Arquivos Adicionados (Nov 22, 2025)

```text
src/
├── components/
│   └── SnackBar/index.tsx              # Sistema de notificações
├── context/
│   └── snackbar.context.tsx            # Context do SnackBar
├── screens/
│   └── Loading/index.tsx               # Tela de loading com restore
├── shared/
│   ├── helpers/
│   │   └── AppError.ts                 # Classe de erro customizada
│   └── hooks/
│       └── useErrorHandler.tsx         # Hook para tratamento de erros
├── test-server.js                      # Servidor de testes Node.js
└── test-server.py                      # Servidor de testes Python
```

### Melhorias na Arquitetura

- **📱 Context API**: Implementação completa para auth e notificações
- **🔄 Loading States**: Gerenciamento de estados de carregamento
- **⚡ Performance**: Otimização de re-renders com useCallback
- **🎯 Error Boundaries**: Tratamento robusto de erros em toda aplicação
- **📡 Network Layer**: Interceptors HTTP com fallback automático

### Bug Fixes Críticos

- **✅ Hooks React**: Correção de hooks chamados fora de componentes
- **✅ Navigation**: Correção de tipos TypeScript para navegação
- **✅ Memory Leaks**: Limpeza adequada de listeners e timeouts
- **✅ Error Handling**: Tratamento consistente de erros axios vs AppError

## 👨‍💻 Desenvolvedor

### Márcio Morais

- 💼 Developer @ firstclassHome
- 🚀 Especialista em C#/.NET/WPF e React Native
- 📚 Estudante RocketSeat
- 📧 [GitHub](https://github.com/marcio-morais)

## 📄 Licença

Este projeto é desenvolvido para fins educacionais como parte do programa RocketSeat.

---

### 🚀 Desenvolvido com React Native, TypeScript e muito ☕

#### Última atualização: 22 de Novembro, 2025
