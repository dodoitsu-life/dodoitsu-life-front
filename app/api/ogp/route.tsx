import { Black_And_White_Picture } from "next/font/google";
import { NextRequest, ImageResponse } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const searchParams = new URL(req.url).searchParams;
  const content = searchParams.get("content");
  const colorCode = searchParams.get("color_code") || "eda8cf";
  const authorName = searchParams.get("author_name") || "";

  const authorText = authorName ? `@${authorName}` : "";

  return new ImageResponse(
    (
      <div
        style={{
          backgroundColor: `#${colorCode}`,
          display: "flex",
          flexDirection: "column", // 方向を縦方向に設定
          height: "600px",
          width: "1200px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            marginBottom: "15px",
            fontSize: 45,
            color: "#000",
          }}
        >
          都々逸ライフ
        </div>
        <div
          style={{
            backgroundColor: "#FFF",
            borderRadius: "10px",
            display: "flex",
            width: "1100px",
            height: "450px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontSize: 40,
              color: "#333",
            }}
          >
            {content}
          </div>
        </div>
        <div
          style={{
            marginTop: "30px",
            marginBottom: "20px",
            right: "50",
            fontSize: 30,
            color: "#333",
            alignSelf: "flex-end",
          }}
        >
          {authorText}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 600,
    }
  );
}
