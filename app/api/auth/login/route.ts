import { appConfig } from "@/src/config/app.config";
import { redirect } from "next/navigation";

export async function GET() {
  const { api } = appConfig();
  redirect(`${api.baseUrl}/auth/twitter`);
}
