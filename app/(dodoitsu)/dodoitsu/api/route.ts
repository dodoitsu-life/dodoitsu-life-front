import { NextResponse } from "next/server";

export async function POST() {
  const sleep = (waitTime: number) =>
    new Promise((resolve) => setTimeout(resolve, waitTime));
  await sleep(3000);

  const data = "test";
  return NextResponse.json(data);
}
