import { $fetch } from "ohmyfetch";
import { FetchError, FetchOptions } from "ohmyfetch";
import { ApiResponse, AppStatusCode } from "~/models/ApiResponse";
import { useAuthStore } from "~/stores/authStore";


export async function FetchApi<T>(
  url: string,
  config: any = {}
): Promise<ApiResponse<T>> {
  config = {
    baseURL: "https://smarttech2022.pythonanywhere.com/",
    ...config,
  };
  const authStore = useAuthStore();

  if (!config.headers){
    config.headers ={};
  }
  if (authStore && authStore.isLogin) {
    var loginData = authStore.loginResult;
    console.log(loginData);
    config.headers={"Authorization":`Bearer ${loginData!.auth_token}`}
  };
  return $fetch<ApiResponse<T>>(url, config)
    .then((res) => {
      return res;
    })
    .catch((e: FetchError) => {
      return {
        data: null,
        isSuccess: false,
        metaData: {
          appStatusCode: 
          e.response?._data?.MetaData?.MetaData ?? AppStatusCode.ServerError,
          message:
          e.response?._data?.MetaData?.Message ?? "مشکلی در عملیات رخ داده است",
        },
      };
    });
}
