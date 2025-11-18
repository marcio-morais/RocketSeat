import { FormLoginParms } from "@/screens/Login/LoginForm";
import { FormRegisterParms } from "@/screens/Register/RegisterForm";
import { IUser } from "@/shared/interfaces/https/user.interface";
import * as authService from "@/shared/services/dt-money/auth.service";
import { createContext, FC, PropsWithChildren, useContext, useState } from "react";

type AuthContextType = {
  user: IUser | null;
  token: string | null;
  handleAuthenticate: (params: FormLoginParms) => Promise<void>;
  handleRegister: (params: FormRegisterParms) => Promise<void>;
  handleLogout: () => void;
};

export const AuthContext = createContext<AuthContextType>(
    {} as AuthContextType
);

export const AuthContextProvider: FC<PropsWithChildren> = ({ children }) => {

    const [user, setUser] = useState<IUser | null>(null);
    const [token, setToken] = useState<string | null>(null);

    const handleAuthenticate = async (UserData: FormLoginParms) => {
        const { user, token } = await authService.autenticate(UserData);
        console.log(user, token);
        setUser(user);
        setToken(token);
    };

    const handleRegister = async (params: FormRegisterParms) => {
        const { user, token } = await authService.autenticate(params);
        setUser(user);
        setToken(token);
    };

    const handleLogout = () => {
        setUser(null);
        setToken(null);
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                token,
                handleAuthenticate,
                handleRegister,
                handleLogout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    
    return context;
};
