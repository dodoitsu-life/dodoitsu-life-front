"use client";

import { useContext } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { AuthContext } from "@/app/_components/Providers/AuthProvider";
import { Card } from "@components/Card";

export default function Page() {
  const router = useRouter();
  const { user } = useContext(AuthContext);

  if (!user) {
    return router.push("/auth/login");
  }

  return (
    <div className="container text-center mx-auto flex justify-center h-full max-w-4xl py-12 px-2">
      <Card>
        <article className="min-w-full p-24 text-xs">
          <div className="w-full flex justify-center items-center flex-col">
            <Image
              src={user.photo}
              width={75}
              height={75}
              alt="user photo"
              className="rounded-full"
            />
            <h1 className="lg:text-3xl text-lg font-bold text-gray-900 dark:text-gray-900">
              {user.name}
            </h1>
          </div>
        </article>
      </Card>
    </div>
  );
}
