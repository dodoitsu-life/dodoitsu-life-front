import { getDodoitsuById } from "@/src/server/dodoitsu/getDodoitsuById";
import { DodoitsuCard } from "../../../_components/DodoitsuCard";

type Params = {
  id: string;
};

export default async function DodoitsuDetail({ params }: { params: Params }) {
  const { dodoitsu } = await getDodoitsuById({ id: params.id });

  return <DodoitsuCard dodoitsu={dodoitsu} />;
}
