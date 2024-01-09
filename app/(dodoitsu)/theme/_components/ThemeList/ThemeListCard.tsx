import { parseISO, format } from "date-fns";

import { ThemeListCardProps } from "./types";
import { Card } from "@components/Card";
import { StatusBadge } from "../StatusBadge";

export const ThemeListCard = ({
  theme,
  isLoading = false,
}: ThemeListCardProps) => {
  const Loading = () => {
    return (
      <Card>
        <div className="m-9">
          <div className="bg-gray-200 my-6 h-8 w-12 animate-pulse" />
          <div className="bg-gray-200 my-6 h-8 w-auto animate-pulse" />
          <div className="flex items-center justify-end border-t border-gray-300 pt-5" />
          <div className="bg-gray-200 my-6 h-8 w-auto animate-pulse" />
        </div>
      </Card>
    );
  };
  if (isLoading || !theme) {
    return <Loading />;
  }

  const startDateISO = parseISO(theme.startDate);
  const startDate = format(startDateISO, "yyyy/MM/dd");
  const endDateISO = parseISO(theme.endDate);
  const endDate = format(endDateISO, "yyyy/MM/dd");

  return (
    <Card clickable>
      <div className="mx-8 mt-6 mb-8">
        <StatusBadge className="mb-2" status={theme.status} />
        <div className="text-xl lg:text-3xl font-bold font-noto-serif text-gray-900 mb-6">
          {theme.title}
        </div>
        <div className="flex items-start border-t border-gray-300 pt-2 flex-col">
          <span className="mb-2 text-lg text-stone-600 whitespace-pre-wrap">
            {theme.description}
          </span>
          <p className="text-stone-600">
            {startDate} ~ {endDate}
          </p>
        </div>
      </div>
    </Card>
  );
};
