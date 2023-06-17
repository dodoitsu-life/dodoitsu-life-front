import { appConfig } from "@/src/config/app.config";
import { Dodoitsu } from "@/src/types/Dodoitsu";
import { getDodoitsuById } from "@/src/server/dodoitsu/getDodoitsuById";
import { DodoitsuCard } from "../../../_components/DodoitsuCard";
import { cache } from "react";

type Params = {
  id: string;
};

// const getDodoitsu = cache(async (id: number): Promise<Dodoitsu> => {
//   const res = await fetch(`${projectUrl}/api/dodoitsu/${id}`, {
//     method: "GET",
//     next: { revalidate: 60 },
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
//   throw new Error("test");
//   return res.json();
// });

export default async function DodoitsuDetail({ params }: { params: Params }) {
  const { dodoitsu } = await getDodoitsuById({ id: params.id });

  return <DodoitsuCard dodoitsu={dodoitsu} />;
}
