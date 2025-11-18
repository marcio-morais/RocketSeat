import { FormLoginParms } from "@/screens/Login/LoginForm";
import { dtMoneyApi } from "@/shared/api/dt-money";
import { IAuthenticateResponse } from "@/shared/interfaces/https/authenticate.response";

export const autenticate = async (userData: FormLoginParms): Promise<IAuthenticateResponse> => {
  const { data } = await dtMoneyApi.post<IAuthenticateResponse>("/auth/login", userData);
  return data;
};
