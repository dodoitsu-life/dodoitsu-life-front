import $axios from "@/src/lib/axios";

type PostTokenRefreshRequest = { body: { refreshToken: string } };

export const tokenRefresh = async ({
  body,
}: PostTokenRefreshRequest): Promise<{
  access_token: string;
  refresh_token: string;
}> => {
  return await $axios
    .post("/auth/refresh-token", body, { withCredentials: true })
    .then((response) => {
      const { access_token, refresh_token } = response.data;
      return { access_token, refresh_token };
    })
    .catch((error) => {
      throw error;
    });
};
