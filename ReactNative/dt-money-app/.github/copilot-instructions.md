# Copilot Instructions - DT Money App

## Project Overview
This is a React Native Expo app using NativeWind (Tailwind CSS for React Native). It's a financial/money management application with modern React Native architecture and TypeScript.

## Complete Step-by-Step Setup Guide

### 1. Initialize Expo Project
```bash
# Create new Expo project with TypeScript template
npx create-expo-app dt-money-app --template blank-typescript

# Navigate to project directory
cd dt-money-app
```

### 2. Install All Required Dependencies
```bash
# Install NativeWind and Tailwind CSS
npm install nativewind tailwindcss

# Install additional core dependencies
npm install react-native-reanimated react-native-safe-area-context expo-status-bar

# Install development dependencies (CRITICAL: babel-preset-expo is required)
npm install --save-dev babel-preset-expo @types/react typescript prettier-plugin-tailwindcss
```

### 3. Create Project Structure
```bash
# Create the complete folder structure
mkdir -p src/screens/Login src/shared src/styles
```

### 4. Setup Color System
Create `src/shared/colors.ts`:
```typescript
export const colors = {
  'accent-brand-background-primary': '#015F43',
  'accent-brand': '#00875F',
  'accent-brand-light': '#00B37E',
  'accent-red-background-primary': '#AA2834',
  'accent-red': '#F75A68',
  'accent-blue': '#5A86F7',
  'accent-blue-dark': '#284DAA',
  'background-primary': '#121214',
  'background-secondary': '#202024',
  'background-tertiary': '#29292E',
  white: '#FFFFFF',
  gray: {
    800: '#323238',
    700: '#7C7C8A',
    600: '#949494',
    500: '#C4C4CC',
    400: '#E1E1E6',
    300: '#666666',
  },
}
```

### 5. Configure Tailwind CSS
Create `tailwind.config.js`:
```javascript
/** @type {import('tailwindcss').Config} */
const { colors } = require('./src/shared/colors')

module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      fontSize: {
        sm: '14px',
        base: '16px',
        lg: '18px',
        xl: '20px',
        '2xl': '24px',
        '3xl': '30px',
        '4xl': '36px',
      },
      height: {
        button: 57,
      },
      colors,
    },
  },
  plugins: [],
}
```

### 6. Setup Global Styles
Create `src/styles/global.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 7. Configure Metro for NativeWind
Update `metro.config.js`:
```javascript
const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');
 
const config = getDefaultConfig(__dirname)

module.exports = withNativeWind(config, { input: './src/styles/global.css' })
```

### 8. Configure Babel (CRITICAL STEP)
Update `babel.config.js`:
```javascript
module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
  };
};
```

### 9. Setup TypeScript Configuration
Update `tsconfig.json`:
```json
{
  "extends": "expo/tsconfig.base",
  "compilerOptions": {
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "baseUrl": ".",
    "jsx": "react-jsx",
    "module": "ESNext",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

Create `nativewind-env.d.ts`:
```typescript
/// <reference types="nativewind/types" />
```

### 10. Create Login Screen Component
Create `src/screens/Login/index.tsx`:
```tsx
import { Text, View } from "react-native";

export const Login = () => {
  return (
    <View className="flex-1 bg-background-primary justify-center items-center">
      <Text className="text-white text-2xl font-bold">Login Screen</Text>
      <Text className="text-gray-500 text-base mt-4">DT Money App</Text>
    </View>
  );
};
```

### 11. Configure Main App Component
Update `App.tsx`:
```tsx
import { Login } from '@/screens/Login';
import "@/styles/global.css";
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <>
      <StatusBar style="light" backgroundColor="#121214" />
      <Login />
    </>
  );
}
```

### 12. Update Expo Configuration
Update `app.json`:
```json
{
  "expo": {
    "name": "dt-money-app",
    "slug": "dt-money-app",
    "version": "1.0.0",
    "orientation": "portrait",
    "newArchEnabled": true,
    "userInterfaceStyle": "light",
    "android": {
      "package": "com.yourname.dtmoneyapp"
    }
  }
}
```

## Development Commands
```bash
npm start                    # Start Expo development server
npm run android             # Build and run on Android
npm run ios                 # Build and run on iOS
npm run web                 # Run in web browser
npx expo start --clear      # Start with cleared cache (if issues)
```

## Key Patterns & Conventions

### Import Aliases
- Use `@/` for all src imports: `import { Login } from '@/screens/Login';`
- Use `@/styles/global.css` for global styles import

### Screen Organization
- Feature-based folders under `src/screens/`
- Each screen has its own folder with `index.tsx`
- Named exports: `export const Login = () => { ... }`

### Styling System
- **NativeWind Classes**: Use Tailwind classes with `className` prop
- **Color System**: Centralized in `src/shared/colors.ts` with semantic naming
- **Typography**: Custom font sizes in Tailwind config
- **Layout**: Use Flexbox classes (`flex-1`, `justify-center`, `items-center`)

### Component Structure
- Functional components with TypeScript
- StatusBar configuration at App level
- Feature-based file organization

## Critical Troubleshooting

### Common Build Errors & Solutions

1. **"Cannot find module 'babel-preset-expo'"**
   ```bash
   npm install babel-preset-expo --save-dev
   ```

2. **Android bundling stops at 99.8%**
   - Check for syntax errors in JSX (no semicolons after JSX elements)
   - Ensure `global.css` has content (not empty)
   - Clear Metro cache: `npx expo start --clear`

3. **Component not visible on screen**
   - Add background color: `bg-background-primary`
   - Use proper layout classes: `flex-1 justify-center items-center`
   - Configure StatusBar for proper visibility

4. **Path alias not working**
   - Verify `tsconfig.json` baseUrl and paths
   - Restart TypeScript server in VS Code

5. **NativeWind styles not applying**
   - Import global.css in App.tsx: `import "@/styles/global.css";`
   - Check metro.config.js NativeWind configuration
   - Verify tailwind.config.js content paths

### Version Compatibility Notes
- Node.js >= 20.19.4 recommended (current packages require this)
- React Native new architecture enabled
- Compatible with Expo SDK 54

## Project Status
✅ **Fully Configured & Working**
- All dependencies installed and configured
- NativeWind integration working
- Android build and run successful
- Login screen visible with proper styling
- Development server running correctly