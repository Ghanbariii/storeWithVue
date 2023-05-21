import { ApiResponse } from "~/models/ApiResponse";
import { loginResultDTo } from "~/models/auth/loginResultDTo";
import { RegisterDTo } from "~/models/auth/registerDTo";
import { FetchApi } from "~/utilities/CustomFetchApi";



export function  RegisterUser(command:RegisterDTo): 
Promise<ApiResponse<undefined>> {
    return FetchApi("auth/users/", {
        method: "POST",
        body: command
    });
}

export function Login(username:string, password:string): 
Promise<ApiResponse<loginResultDTo>> {
    return FetchApi("auth/token/login/", {
        method: "POST",
        body: {
            username : username,
            password : password,
        },
    });
}