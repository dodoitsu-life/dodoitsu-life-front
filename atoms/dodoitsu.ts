import Dodoitsu from "@/@types/Dodoitsu";
import { atom, Atom } from "jotai";

export const yesterdaysPopularDodoitsuAtom: Atom<Dodoitsu[]> = atom(() => [
  {
    id: "1",
    author: "author 1",
    content: "立てば芍薬 座れば牡丹 歩く姿は百合の花",
    posted_at: new Date(),
  },
  {
    id: "2",
    author: "author 2",
    content: "三千世界の 鴉を殺し ぬしと朝寝が してみたい",
    posted_at: new Date(),
  },
  {
    id: "3",
    author: "author 3",
    content: "惚れて通えば 千里も一里 逢えずに帰れば また千里",
    posted_at: new Date(),
  },
]);

export const yesterdaysPostsDodoitsuAtom: Atom<Dodoitsu[]> = atom(() => [
  {
    id: "1",
    author: "author 1",
    content: "立てば芍薬 座れば牡丹 歩く姿は百合の花",
    posted_at: new Date(),
  },
  {
    id: "2",
    author: "author 2",
    content: "三千世界の 鴉を殺し ぬしと朝寝が してみたい",
    posted_at: new Date(),
  },
  {
    id: "3",
    author: "author 3",
    content: "惚れて通えば 千里も一里 逢えずに帰れば また千里",
    posted_at: new Date(),
  },
  {
    id: "4",
    author: "author 4",
    content: "散切り頭を叩いて見れば、文明開化の音がする",
    posted_at: new Date(),
  },
  {
    id: "5",
    author: "author 5",
    content: "夢に見るよじゃ　惚れよが薄い　真に惚れれば　眠られぬ",
    posted_at: new Date(),
  },
]);

export const DodoitsuListAtom: Atom<Dodoitsu[]> = atom(() => [
  {
    id: "1",
    author: "author 1",
    content: "立てば芍薬 座れば牡丹 歩く姿は百合の花",
    posted_at: new Date(),
  },
  {
    id: "2",
    author: "author 2",
    content: "三千世界の 鴉を殺し ぬしと朝寝が してみたい",
    posted_at: new Date(),
  },
  {
    id: "3",
    author: "author 3",
    content: "惚れて通えば 千里も一里 逢えずに帰れば また千里",
    posted_at: new Date(),
  },
  {
    id: "4",
    author: "author 4",
    content: "散切り頭を叩いて見れば、文明開化の音がする",
    posted_at: new Date(),
  },
  {
    id: "5",
    author: "author 5",
    content: "夢に見るよじゃ　惚れよが薄い　真に惚れれば　眠られぬ",
    posted_at: new Date(),
  },
  {
    id: "6",
    author: "author 6",
    content: "逢うて別れて 別れて逢うて 末は野の風 秋の風 一期一会の 別れかな",
    posted_at: new Date(),
  },
  {
    id: "7",
    author: "author 7",
    content: "岡惚れ三年 本惚れ三月 思い遂げたは 三分間",
    posted_at: new Date(),
  },
  {
    id: "8",
    author: "author 8",
    content: "戀という字を 分析すれば 愛し愛しと いう心",
    posted_at: new Date(),
  },
  {
    id: "9",
    author: "author 9",
    content: "恋し恋しと 鳴く蝉よりも 鳴かぬ蛍が 身を焦がす",
    posted_at: new Date(),
  },
  {
    id: "10",
    author: "author 10",
    content: "人の恋路を 邪魔する奴は 馬に蹴られて 死んじまえ",
    posted_at: new Date(),
  },
]);
