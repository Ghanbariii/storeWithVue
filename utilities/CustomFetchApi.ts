import { $fetch } from "ohmyfetch";
import { FetchError, FetchOptions } from "ohmyfetch";
import { ApiResponse, AppStatusCode } from "~/models/ApiResponse";

export async function FetchApi<T>(
  url: string,
  config: FetchOptions = {}
): Promise<ApiResponse<T>> {
  const customConfig: any = {
    baseURL: "http://shop-api.codeyad-project.ir/api",
    ...config,
  };

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
            e.response?._data?.MetaData?.Message ?? "مشکلی در عملیات رخ داده است",
        },
      };
    });
}
