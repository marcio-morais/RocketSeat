# 💰 DT Money App

> Aplicação mobile de controle financeiro pessoal desenvolvida com React Native, Expo e NativeWind

## 📱 Sobre o Projeto

O **DT Money App** é uma aplicação financeira moderna para controle de gastos pessoais, desenvolvida durante a jornada RocketSeat. O projeto utiliza as mais recentes tecnologias do ecossistema React Native com foco em performance, usabilidade e arquitetura limpa.

## ✨ Funcionalidades

- 🔐 **Sistema de Autenticação**: Login e cadastro com persistência de sessão
- 📱 **Notificações Inteligentes**: SnackBar com feedback visual para todas as ações
- 💸 **Controle de Transações**: Adicionar receitas e despesas com validação
- 📊 **Dashboard Interativo**: Visualização de resumo financeiro em tempo real
- 🏷️ **Categorização**: Organização por categorias personalizadas
- 📈 **Relatórios**: Análise de gastos e tendências com gráficos
- ⚡ **Performance Otimizada**: Loading states e error handling robusto
- 🎨 **Interface Moderna**: Design system consistente com NativeWind
- 🌙 **Dark Theme**: Interface escura otimizada para todos os horários

## 🛠️ Tecnologias Utilizadas

### Core Stack

- **React Native** - Framework mobile multiplataforma
- **Expo SDK 54** - Toolchain e runtime
- **TypeScript** - Tipagem estática
- **NativeWind v4** - Tailwind CSS para React Native

### Navegação & Estado

- **React Navigation v6** - Sistema de navegação dinâmica
- **React Hook Form** - Gerenciamento avançado de formulários
- **Context API** - Estado global para autenticação e notificações
- **AsyncStorage** - Persistência de dados e sessões

### Interface & Experiência

- **Expo Vector Icons** - Biblioteca completa de ícones Material Design
- **React Native Reanimated** - Animações fluidas e performáticas
- **CLSX** - Utilitário para classes condicionais
- **NativeWind** - Sistema de design baseado em Tailwind CSS
- **SnackBar System** - Notificações visuais com auto-dismiss

### Validação & Qualidade

- **@hookform/resolvers** - Resolvers para React Hook Form
- **YUP** - Schema de validação robusto para formulários
- **Axios Interceptors** - Tratamento automático de erros HTTP
- **AppError Class** - Sistema de erros tipados e estruturados

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
│   │   ├── SnackBar/          # Sistema de notificações
│   │   ├── ErrorMessage/      # Exibição de erros
│   │   └── DismissKeyboard/   # Utilitário para teclado
│   ├── 📁 context/            # Gerenciamento de estado global
│   │   ├── auth.context.tsx   # Autenticação e sessão
│   │   └── snackbar.context.tsx # Notificações
│   ├── 📁 routes/             # Sistema de navegação
│   │   ├── PublicRoutes/      # Rotas públicas (Login, Register)
│   │   ├── PrivateRoutes/     # Rotas privadas (Home, etc)
│   │   └── index.tsx          # Roteamento principal
│   ├── 📁 screens/            # Telas da aplicação
│   │   ├── Loading/           # Tela de carregamento
│   │   ├── Login/             # Autenticação
│   │   │   └── LoginForm/     # Formulário de login
│   │   ├── Register/          # Cadastro de usuário
│   │   └── Home/              # Dashboard principal
│   ├── 📁 shared/             # Recursos compartilhados
│   │   ├── api/              # Cliente HTTP configurado
│   │   ├── helpers/          # AppError e utilitários
│   │   ├── hooks/            # Hooks customizados
│   │   ├── services/         # Serviços de API
│   │   └── colors.ts         # Sistema de cores
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
- **AuthHeader**: Cabeçalho padronizado para telas de autenticação
- **SnackBar**: Sistema completo de notificações com auto-dismiss
- **DismissKeyboardView**: Container que fecha teclado ao tocar
- **ErrorMessage**: Componente dedicado para exibir erros de validação
- **Loading**: Tela de carregamento com restauração de sessão

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

### Navegação Inteligente

- **Rotas Públicas**: Login, Register (usuário não autenticado)
- **Rotas Privadas**: Home, Profile (usuário autenticado)
- **Stack Navigation**: Navegação em pilha com React Navigation
- **Auto-redirect**: Redirecionamento automático baseado no estado de autenticação

### Estado Global

- **Context API**: Gerenciamento de autenticação e notificações
- **AsyncStorage**: Persistência de dados e restauração de sessão
- **Loading States**: Estados de carregamento para melhor UX

### Sistema de Notificações

- **SnackBar**: Notificações visuais para feedback de ações
- **Auto-dismiss**: Fechamento automático após 3 segundos
- **Tipos**: Sucesso, erro e informação com cores distintas

### Formulários Avançados

- **React Hook Form**: Validação e controle de estado otimizado
- **Componentes Controlados**: Integração perfeita com AppInput
- **Validação YUP**: Schemas robustos com feedback em tempo real
- **Error Handling**: Tratamento consistente de erros HTTP e validação

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

## 📚 Recursos e Conceitos Implementados

Este projeto incorpora conceitos avançados e modernos de React Native:

### Arquitetura e Organização

- ✅ **Arquitetura Componentizada**: Separação clara de responsabilidades
- ✅ **TypeScript com Generics**: Tipagem avançada e reutilização de código
- ✅ **Context API**: Gerenciamento de estado global eficiente
- ✅ **Custom Hooks**: Hooks reutilizáveis para lógica compartilhada

### Sistema de Design e UX

- ✅ **Design System Consistente**: Componentes padronizados
- ✅ **Sistema de Notificações**: Feedback visual imediato
- ✅ **Loading States**: Estados de carregamento para melhor UX
- ✅ **Error Boundaries**: Tratamento robusto de erros

### Formulários e Validação

- ✅ **Formulários Avançados**: React Hook Form com validação
- ✅ **Validação YUP**: Schemas estruturados e reutilizáveis
- ✅ **Tratamento de Erros**: Sistema consistente de erro e feedback
- ✅ **Componentes Controlados**: Integração perfeita com formulários

### Navegação e Autenticação

- ✅ **Navegação Estruturada**: Rotas públicas e privadas
- ✅ **Autenticação Persistente**: Sessões com AsyncStorage
- ✅ **Auto-restore**: Recuperação automática de sessão
- ✅ **Interceptors HTTP**: Tratamento automático de requisições

### Performance e Qualidade

- ✅ **Reutilização de Código**: Componentes altamente reutilizáveis
- ✅ **Otimização de Re-renders**: useCallback e useMemo
- ✅ **Memory Management**: Limpeza adequada de recursos
- ✅ **Network Layer**: Cliente HTTP configurado com fallbacks

## 👨‍💻 Desenvolvedor

### Márcio Morais

- 💼 Developer @ firstclassHome
- 🚀 Especialista em C#/.NET/WPF e React Native
- 📚 Estudante RocketSeat
- 📧 [GitHub](https://github.com/marcio-morais)

## 📄 Licença

Este projeto é desenvolvido para fins educacionais como parte do programa RocketSeat.

---

🚀 Desenvolvido com React Native, TypeScript e muito ☕
