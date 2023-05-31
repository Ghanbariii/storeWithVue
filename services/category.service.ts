import { ApiResponse } from "~/models/ApiResponse";
import { categoryDto } from "../models/categories/categoriesDTo";
import { FetchApi } from "~/utilities/CustomFetchApi"

export const GetAllCategory =():Promise<ApiResponse<categoryDto[]>> => {
    return FetchApi("/category")
};