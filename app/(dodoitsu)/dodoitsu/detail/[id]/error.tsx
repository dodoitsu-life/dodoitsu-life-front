"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Error({ error }: { error: Error }) {
  const router = useRouter();
  useEffect(() => {
    console.warn(error);
    alert("都々逸の取得に失敗しました。");
    router.back();
  }, [error, router]);

  return <div />;
}
