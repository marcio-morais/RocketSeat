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

### Desenvolvimento
- **Babel** - Transpilador JavaScript
- **Metro** - Bundler React Native
- **ESLint** - Linting e qualidade de código
- **Prettier** - Formatação automática

## 🏗️ Arquitetura do Projeto

```
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
- **AppInput**: Input customizado com validação e ícones
- **AuthHeader**: Cabeçalho para telas de autenticação
- **DismissKeyboardView**: Container que fecha teclado ao tocar

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

## 👨‍💻 Desenvolvedor

**Márcio Morais**
- 💼 Developer @ firstclassHome
- 🚀 Especialista em C#/.NET/WPF e React Native
- 📚 Estudante RocketSeat
- 📧 [GitHub](https://github.com/marcio-morais)

## 📄 Licença

Este projeto é desenvolvido para fins educacionais como parte do programa RocketSeat.

---

**🚀 Desenvolvido com React Native, TypeScript e muito ☕**

*Última atualização: Novembro 2025*