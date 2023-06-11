import { NextRequest, NextResponse } from "next/server";
import { Dodoitsu } from "@/types/Dodoitsu";

export const dynamic = "force-dynamic";
export async function GET(
  _: NextRequest,
  { params }: { params: { id: string } }
) {
  const sleep = (waitTime: number) =>
    new Promise((resolve) => setTimeout(resolve, waitTime));
  await sleep(1500);

  console.log(params.id);
  const data = {
    id: "1",
    author: "string",
    content: "立てば芍薬　座れば牡丹　歩く姿は百合の花",
    comment:
      "この都々逸は、立っているときには美しい芍薬の花のように堂々とした姿勢を持ち、座っているときには優美な牡丹のように風格があります。\nそして歩く姿は、華やかな百合の花のように優雅であり、その美しさが一層引き立ちます。\nこの都々逸は、人の姿勢や動作が花に喩えられ、その美しさや魅力が表現されています。",
    posted_at: new Date(),
  } satisfies Dodoitsu;

  return NextResponse.json(data);
}
