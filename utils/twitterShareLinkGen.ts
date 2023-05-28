type TwitterShareLinkGenParams = {
  // ツイートされる文字列
  text?: string;
  // ツイートされるURL
  url?: string;
  // ハッシュタグ
  hashtags?: string[];
  // ツイートに含まれるユーザー名
  via?: string;
  // ツイートに関連するユーザー名
  related?: string[];
  // ツイートに返信するツイートのID
  in_reply_to?: string;
};

export default function twitterShareLinkGen(
  params: TwitterShareLinkGenParams
): string {
  const _url = new URL("https://twitter.com/intent/tweet");

  if (params.text) _url.searchParams.set("text", params.text);
  if (params.url) _url.searchParams.set("url", params.url);
  if (params.hashtags)
    _url.searchParams.set("hashtags", params.hashtags.join(","));
  if (params.via) _url.searchParams.set("via", params.via);
  if (params.related)
    _url.searchParams.set("related", params.related.join(","));
  if (params.in_reply_to)
    _url.searchParams.set("in_reply_to", params.in_reply_to);

  return _url.toString();
}
