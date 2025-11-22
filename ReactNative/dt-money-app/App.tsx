import { SnackBar } from "@/components/SnackBar";
import { AuthContextProvider } from "@/context/auth.context";
import { SnackBarContextProvider } from "@/context/snackbar.context";
import { NavigationRoutes } from "@/routes";
import "@/styles/global.css";

export default function App() {
  return (
    <SnackBarContextProvider>
      <AuthContextProvider>
        <NavigationRoutes />
        <SnackBar />
      </AuthContextProvider>
    </SnackBarContextProvider>
  );
}
