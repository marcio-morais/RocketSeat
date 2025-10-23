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

