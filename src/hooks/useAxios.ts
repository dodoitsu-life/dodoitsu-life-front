import axios, { AxiosInstance } from "axios";
import { appConfig } from "../config/app.config";

export function useAxios(): AxiosInstance {
  const { api } = appConfig();
  const instance = axios.create({
    baseURL: api.baseUrl,
  });

  return instance;
}
