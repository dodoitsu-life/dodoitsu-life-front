export const appConfig = () => ({
  // vercelにデプロイする場合は、VERCEL_URLを環境変数に設定する
  projectUrl: process.env.VERCEL_URL || "http://localhost:3000",
});
