import { createContext, FC, PropsWithChildren, useContext, useState } from "react";

interface NotifyMessageParams {
  message: string;
  messageType: "success" | "error" | "info";
}

type SnackBarMessageType = "success" | "error" | "info";


export type SnackBarContextType = {
    message: string | null;
    type: SnackBarMessageType | null;    
    notify: (params: NotifyMessageParams) => void;
};

const SnackBarContext = createContext<SnackBarContextType>({} as SnackBarContextType);

export const SnackBarContextProvider: FC<PropsWithChildren> = ({ 
    children,
 }) => {
    const [message, setMessage] = useState<string | null>(null);
    const [type, setType] = useState<SnackBarMessageType | null>("info");
    const notify = ({ message, messageType}: NotifyMessageParams) => {
        setMessage(message);
        setType(messageType || "info");
        setTimeout(() => {
            setMessage(null);
            setType(null);
        }, 3000);
    }
    return (
        <SnackBarContext.Provider value={{ message, type, notify }}>            
            {children}
        </SnackBarContext.Provider>
    );
}

export const useSnackBarContext = () => {
    const context = useContext(SnackBarContext);
    return context;
}