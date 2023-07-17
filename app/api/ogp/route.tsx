import { NextRequest } from "next/server";
import { ImageResponse } from "@vercel/og";

export const runtime = "edge";

const font = fetch(
  new URL("../../../assets/font/sans-jp.woff", import.meta.url)
).then((res) => res.arrayBuffer());

export async function GET(req: NextRequest) {
  const searchParams = new URL(req.url).searchParams;
  const content = searchParams.get("content");

  const fontData = await font;

  return new ImageResponse(
    (
      <div tw="bg-violet-200 flex h-600px w-1200px justify-center">
        <div tw="bg-white self-center justify-center rounded-lg flex w-1100px h-500px">
          <div tw="text-5xl flex self-center text-gray-900 m-10">{content}</div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 600,
      fonts: [
        {
          name: "IBMPlexSansJP-Bold",
          data: fontData,
        },
      ],
    }
  );
}
