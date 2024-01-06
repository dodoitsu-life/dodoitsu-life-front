import { MetadataRoute } from "next";
import { getLatestDodoitsuList } from "@/src/server/dodoitsu/getDodoitsuList";
import { getCurrentOrPastThemeList } from "@/src/server/theme/getThemeList";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // TODO: pathの動的な取得が現状できないので、一旦固定値を入れておく
  const projectUrl = "https://dodoitsu-life.jp";
  const lastModified = new Date();

  const staticPaths = [
    {
      url: `${projectUrl}`,
      lastModified,
    },
    {
      url: `${projectUrl}/privacy`,
      lastModified,
    },
    {
      url: `${projectUrl}/terms`,
      lastModified,
    },
    {
      url: `${projectUrl}/transaction-law`,
      lastModified,
    },
  ];

  const { dodoitsuList } = await getLatestDodoitsuList({
    page: 1,
    limit: 1000,
  });
  const dodoitsuDetailPagePaths = dodoitsuList.map((dodoitsu) => {
    return {
      url: `${projectUrl}/dodoitsu/detail/${dodoitsu.id}`,
      lastModified,
    };
  });

  const { themeList } = await getCurrentOrPastThemeList({
    page: 1,
    limit: 100,
  });
  const themeDetailPagePaths = themeList.map((theme) => {
    return {
      url: `${projectUrl}/theme/detail/${theme.id}?page=1`,
      lastModified,
    };
  });

  return [...staticPaths, ...dodoitsuDetailPagePaths, ...themeDetailPagePaths];
}
