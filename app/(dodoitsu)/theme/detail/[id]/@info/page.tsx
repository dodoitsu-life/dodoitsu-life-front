import { Status } from "@/src/types/Theme";
import { getThemeById } from "@/src/server/theme/getThemeById";

import { Card } from "@components/Card";
import { LinkButton } from "@/app/_components/LinkButton";
import { StatusBadge } from "@/app/(dodoitsu)/theme/_components/StatusBadge";

type Params = {
  id: string;
};

export default async function ThemeInfo({ params }: { params: Params }) {
  const { theme } = await getThemeById({ id: params.id });
  return (
    <Card>
      <div className="w-full md:px-24 px-12 pt-6 pb-6 text-center flex justify-center items-center flex-col">
        <div className="w-fit">
          <div className="w-full flex">
            <StatusBadge status={theme.status} />
          </div>
          <h1 className="lg:text-3xl text-lg pt-2 pb-4 font-bold text-gray-900 dark:text-gray-900">
            お題：「{theme.title}」
          </h1>

          {theme.description && (
            <div className="mb-6 md:flex md:direction-row items-center justify-center">
              <p className="text-md lg:text-xl text-gray-500 sm:text-lg dark:text-gray-900">
                {theme.description}
              </p>
            </div>
          )}

          {theme.status === Status.ACTIVE && (
            <div className="w-full flex justify-end">
              <LinkButton
                text="このお題に投稿する"
                href={`/dodoitsu/create?themeId=${theme.id}`}
              />
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}
