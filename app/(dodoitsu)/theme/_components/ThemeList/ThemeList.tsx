import { Props } from "./types";
import { ThemeListCard } from "./ThemeListCard";
import Link from "next/link";

export const ThemeList = ({ themeList, isLoading }: Props) => {
  if (isLoading || !themeList) {
    const LoadingCard = () => {
      return (
        <div className="mt-10">
          <ThemeListCard isLoading={true} />
        </div>
      );
    };

    return (
      <div>
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
      </div>
    );
  }

  return (
    <div>
      {themeList.map((theme, index) => (
        <div key={index} className="my-8">
          <Link href={`/theme/detail/${theme.id}?page=1`}>
            <ThemeListCard theme={theme} />
          </Link>
        </div>
      ))}
    </div>
  );
};
