import { NextRequest, NextResponse } from "next/server";
import { getCurrentOrPastThemeList } from "@/src/server/theme/getThemeList";

// 動的レンダリングを強制する
export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const limit = url.searchParams.get("limit");
  const page = url.searchParams.get("page");

  const { themeList, count } = await getCurrentOrPastThemeList({
    page: page ? Number(page) : 1,
    limit: limit ? Number(limit) : 5,
  }).catch(() => {
    return { themeList: [], count: 0 };
  });

  return NextResponse.json({
    themeList,
    count: themeList.length,
    allCount: count,
  });
}
