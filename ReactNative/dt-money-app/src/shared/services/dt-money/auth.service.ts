import { FormLoginParms } from "@/screens/Login/LoginForm";
import { FormRegisterParms } from "@/screens/Register/RegisterForm";
import { dtMoneyApi } from "@/shared/api/dt-money";
import { IAuthenticateResponse } from "@/shared/interfaces/https/authenticate-response";

export const authenticate = async (
  userData: FormLoginParms
): Promise<IAuthenticateResponse> => {
  
  const { data } = await dtMoneyApi.post<IAuthenticateResponse>(
    "/auth/login",
    userData
  );
  return data;
};

export const registerUser = async (
  userData: FormRegisterParms
): Promise<IAuthenticateResponse> => {
  const { data } = await dtMoneyApi.post<IAuthenticateResponse>(
    "/auth/register",
    userData
  );
  return data;
};
