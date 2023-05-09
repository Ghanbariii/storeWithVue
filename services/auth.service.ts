import { ApiResponse } from "~/models/ApiResponse";
import { RegisterDTo } from "~/models/auth/registerDTo";
import { FetchApi } from "~/utilities/CustomFetchApi";



export function  RegisterUser(command:RegisterDTo): 
Promise<ApiResponse<undefined>> {
    return FetchApi("/auth/register", {
        method: "POST",
        body: command
    })
}