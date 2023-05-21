import { ApiResponse } from "~/models/ApiResponse";
import { UserDTo } from "~/models/users/userDTo";
import { FetchApi } from "~/utilities/CustomFetchApi";

export const GetCurrentUser = (): Promise<ApiResponse<UserDTo>> => {
    return FetchApi("/auth/users/me");
};
