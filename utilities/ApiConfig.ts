export const isProduction = process.env.NODE_ENV === "production";
export const BASE_URL = isProduction
  ? "http://shop-api.codeyad-project.ir/api"
  : "https://localhost:3000/api";
