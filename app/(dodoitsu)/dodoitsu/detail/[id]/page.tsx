import { Dodoitsu } from "@/types/Dodoitsu";
import { DodoitsuCard } from "../../../_components/DodoitsuCard";
import { cache } from "react";

type Params = {
  id: string;
};

const getDodoitsu = cache(async (id: number): Promise<Dodoitsu> => {
  const res = await fetch(`http://localhost:3000/api/dodoitsu/${id}`, {
    method: "GET",
    next: { revalidate: 60 },
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.json();
});

export default async function DodoitsuDetail({ params }: { params: Params }) {
  const dodoitsu = await getDodoitsu(Number(params.id));

  return <DodoitsuCard dodoitsu={dodoitsu} />;
}
