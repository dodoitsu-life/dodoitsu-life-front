import type { Metadata } from "next";

type Params = {
  title: string;
  description?: string;
  url: string;
  imageUrl: string;
};

export default function seoGen({
  title,
  description,
  url,
  imageUrl,
}: Params): Metadata {
  const metadata: Metadata = {
    title: title,
    description: description,
    icons: "/favicon.ico",
    keywords: ["都々逸", "都々逸ライフ", title],
    viewport: {
      width: "device-width",
      initialScale: 1,
      maximumScale: 1,
    },
    twitter: {
      card: "summary_large_image",
      images: imageUrl,
      site: "@dodoitsulife",
    },
    openGraph: {
      title: title,
      description: description,
      url: url,
      siteName: "都々逸ライフ",
      images: {
        url: imageUrl,
        width: 1200,
        height: 600,
      },
    },
  };
  return metadata;
}
