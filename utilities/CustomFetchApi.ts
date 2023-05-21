import { $fetch } from "ohmyfetch";
import { FetchError, FetchOptions } from "ohmyfetch";
import { ApiResponse, AppStatusCode } from "~/models/ApiResponse";
import { useAuthStore } from "~/stores/authStore";


export async function FetchApi<T>(
  url: string,
  config: FetchOptions = {}
): Promise<ApiResponse<T>> {
  const customConfig: any = {
    baseURL: "http://shop-api.codeyad-project.ir/api",
    ...config,
  };
  const authStore = useAuthStore();
  if (authStore && authStore.isLogin) {
    var loginData = authStore.loginResult;
    console.log(loginData);
    customConfig.headers["Authorization"] = loginData?.token;
  }
  return $fetch<ApiResponse<T>>(url, customConfig)
    .then((res) => {
      return res;
    })
    .catch((e: FetchError) => {
      return {
        data: null,
        isSuccess: false,
        metaData: {
          appStatusCode: AppStatusCode.ServerError,
          message:
            e.response?._data?.MetaData?.Message ??
            "مشکلی در عملیات رخ داده است",
        },
      };
    });
}
