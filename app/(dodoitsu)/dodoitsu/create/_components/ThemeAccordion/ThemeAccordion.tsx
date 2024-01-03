import { Props } from "./types";
import { Accordion } from "@/app/_components/Accordion/Accordion";

export const ThemeAccordion = ({ theme, isLoading, isError }: Props) => {
  if (isLoading) {
    return (
      <div className="border-t border-gray-300 mt-2 py-2 animate-pulse">
        <div className="bg-gray-200 h-6 w-full" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="border-t border-gray-300 mt-2 py-2">
        <span className="text-gray-500">
          お題の取得に失敗しました。再読み込みしてください
        </span>
      </div>
    );
  }

  if (!theme) return <></>;

  return (
    <div className="border-t border-gray-300 mt-2 py-2">
      <Accordion title="参加中のお題">
        <span className="text-lg">{theme.title}</span>
        {theme.description && (
          <div className="mx-3 mt-1">
            <span>{theme.description}</span>
          </div>
        )}
      </Accordion>
    </div>
  );
};
