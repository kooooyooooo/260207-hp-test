export type Position = "GK" | "DF" | "MF" | "FW";

export interface Player {
  number: number;
  name: string;
  position: Position;
  grade: string;
}

export const players: Player[] = [
  { number: 1, name: "山田 太郎", position: "GK", grade: "3年" },
  { number: 2, name: "佐藤 健太", position: "DF", grade: "3年" },
  { number: 3, name: "鈴木 翔太", position: "DF", grade: "2年" },
  { number: 4, name: "高橋 蓮", position: "DF", grade: "3年" },
  { number: 5, name: "田中 悠斗", position: "DF", grade: "2年" },
  { number: 7, name: "伊藤 大翔", position: "MF", grade: "3年" },
  { number: 8, name: "渡辺 陸", position: "MF", grade: "3年" },
  { number: 10, name: "中村 颯太", position: "MF", grade: "2年" },
  { number: 11, name: "小林 蒼", position: "MF", grade: "1年" },
  { number: 9, name: "加藤 琉生", position: "FW", grade: "3年" },
  { number: 14, name: "吉田 海翔", position: "FW", grade: "2年" },
  { number: 18, name: "松本 暁", position: "FW", grade: "1年" },
];

export const positionColors: Record<Position, string> = {
  GK: "#D4AF37",
  DF: "#6B2D8B",
  MF: "#2D8B5A",
  FW: "#8B2D2D",
};
