"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Error({ error }: { error: Error }) {
  const router = useRouter();
  useEffect(() => {
    console.warn(error);
    alert("プロフィールの取得に失敗しました。");
    router.back();
  }, [error, router]);

  return <div />;
}
