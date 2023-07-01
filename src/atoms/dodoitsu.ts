import { Dodoitsu } from "@/src/types/Dodoitsu";
import { atom, Atom } from "jotai";

export const yesterdaysPopularDodoitsuAtom: Atom<Dodoitsu[]> = atom(() => [
  {
    id: "1",
    author: "author 1",
    content: "立てば芍薬 座れば牡丹 歩く姿は百合の花",
    createdAt: new Date(),
  },
  {
    id: "2",
    author: "author 2",
    content: "三千世界の 鴉を殺し ぬしと朝寝が してみたい",
    createdAt: new Date(),
  },
  {
    id: "3",
    author: "author 3",
    content: "惚れて通えば 千里も一里 逢えずに帰れば また千里",
    createdAt: new Date(),
  },
]);

export const yesterdaysPostsDodoitsuAtom: Atom<Dodoitsu[]> = atom(() => [
  {
    id: "1",
    author: "author 1",
    content: "立てば芍薬 座れば牡丹 歩く姿は百合の花",
    createdAt: new Date(),
  },
  {
    id: "2",
    author: "author 2",
    content: "三千世界の 鴉を殺し ぬしと朝寝が してみたい",
    createdAt: new Date(),
  },
  {
    id: "3",
    author: "author 3",
    content: "惚れて通えば 千里も一里 逢えずに帰れば また千里",
    createdAt: new Date(),
  },
  {
    id: "4",
    author: "author 4",
    content: "散切り頭を叩いて見れば、文明開化の音がする",
    createdAt: new Date(),
  },
  {
    id: "5",
    author: "author 5",
    content: "夢に見るよじゃ　惚れよが薄い　真に惚れれば　眠られぬ",
    createdAt: new Date(),
  },
]);

export const DodoitsuListAtom: Atom<Dodoitsu[]> = atom(() => []);
