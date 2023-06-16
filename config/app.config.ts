export const appConfig = () => ({
  // vercelにデプロイする場合は、VERCEL_URLを環境変数に設定する
  projectUrl: process.env.NEXT_PUBLIC_VERCEL_URL || "http://localhost:3000",
});
