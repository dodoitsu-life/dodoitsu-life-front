import axios from "axios";
import { cookies } from "next/headers";
import Cookies from "js-cookie";
import { appConfig } from "@/src/config/app.config";
import { tokenRefresh } from "@/src/server/auth/tokenRefresh";

const $axios = axios.create({
  baseURL: appConfig().api.baseUrl,
});

$axios.interceptors.request.use(
  (config) => {
    const cookieStore = cookies();
    const token = cookieStore.get("auth_token")?.value;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// $axios.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   async (error) => {
//     if (
//       error.response &&
//       error.response.status === 401 &&
//       !error.config._retry
//     ) {
//       error.config._retry = true;
//       if (error.config.url === "/auth/refresh-token") {
//         throw new Error("refresh-token is expired");
//       }

//       return $axios(error.config);
//     }

//     return Promise.reject(error);
//   }
// );

export default $axios;
