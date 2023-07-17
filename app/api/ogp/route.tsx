import { NextRequest, ImageResponse } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const searchParams = new URL(req.url).searchParams;
  const content = searchParams.get("content");

  return new ImageResponse(
    (
      <div
        style={{
          backgroundColor: "#D1BCF7",
          display: "flex",
          height: "600px",
          width: "1200px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "#FFF",
            borderRadius: "10px",
            display: "flex",
            width: "1100px",
            height: "500px",
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
      </div>
    ),
    {
      width: 1200,
      height: 600,
    }
  );
}
