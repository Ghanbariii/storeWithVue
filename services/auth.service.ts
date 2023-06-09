import { ApiResponse } from "~/models/ApiResponse";
import { LoginResultDto } from "~/models/auth/loginResultDTo";
import { RegisterDTo } from "~/models/auth/registerDTo";
import { FetchApi } from "~/utilities/CustomFetchApi";

export function RegisterUser(
  command: RegisterDTo
): Promise<ApiResponse<undefined>> {
  return FetchApi("/auth/register", {
    method: "POST",
    body: command,
  });
}

export function Login(
  phoneNumber: string,
  password: string
): Promise<ApiResponse<LoginResultDto>> {
  return FetchApi("/auth/login", {
    method: "POST",
    body: {
      phoneNumber: phoneNumber,
      password: password,
    },
  });
}
