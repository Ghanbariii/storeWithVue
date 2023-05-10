import { ApiResponse } from "~/models/ApiResponse";
import { RegisterDTo } from "~/models/auth/registerDTo";
import { FetchApi } from "~/utilities/CustomFetchApi";



export function  RegisterUser(command:RegisterDTo): 
Promise<ApiResponse<undefined>> {
    return FetchApi("/auth/register", {
        method: "POST",
        body: command
    });
}

export function  LoginrUser(phoneNumber:string, password:string): 
Promise<ApiResponse<null>> {
    return FetchApi("/auth/login", {
        method: "POST",
        body: {
            phoneNumber : phoneNumber,
            password : password,
        },
    });
}