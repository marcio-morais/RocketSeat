import axios from "axios";
import { Platform } from "react-native";
import { AppError } from "../helpers/AppError";

const getBaseURL = () => {
  if (Platform.OS === "ios") {
    return "http://localhost:3001";
  }

  if (Platform.OS === "android") {
    // Para dispositivos físicos Android, use o IP da máquina local
    // Para emuladores, você pode mudar para 'http://10.0.2.2:3001'
    return "http://10.0.2.2:3001";
  }

  // Fallback para outras plataformas
  return "http://10.0.2.2:3001";
};

export const dtMoneyApi = axios.create({
  baseURL: getBaseURL(),
});

dtMoneyApi.interceptors.response.use(
  (config) => config,
  (error) => 
  {
    if (error.response && error.response.data) {
      return Promise.reject(new AppError(error.response.data.message));
    }else{
      return Promise.reject(new AppError("Falha na requisição. Tente novamente mais tarde."));
    }
  }
);
