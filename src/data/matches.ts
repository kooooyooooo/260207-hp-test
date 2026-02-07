export type MatchResult = "win" | "draw" | "loss";

export interface Match {
  date: string;
  tournament: string;
  opponent: string;
  scoreHome: number;
  scoreAway: number;
  result: MatchResult;
  venue: string;
}

export const matches: Match[] = [
  {
    date: "2026/02/09",
    tournament: "県リーグ",
    opponent: "◎◎商業",
    scoreHome: 4,
    scoreAway: 0,
    result: "win",
    venue: "ホームG",
  },
  {
    date: "2026/02/02",
    tournament: "練習試合",
    opponent: "××実業",
    scoreHome: 0,
    scoreAway: 2,
    result: "loss",
    venue: "実業グラウンド",
  },
  {
    date: "2026/01/26",
    tournament: "県リーグ",
    opponent: "□□工業",
    scoreHome: 1,
    scoreAway: 0,
    result: "win",
    venue: "総合運動公園",
  },
  {
    date: "2026/01/19",
    tournament: "県リーグ",
    opponent: "△△学園",
    scoreHome: 2,
    scoreAway: 2,
    result: "draw",
    venue: "学園グラウンド",
  },
  {
    date: "2026/01/12",
    tournament: "新人戦",
    opponent: "○○高校",
    scoreHome: 3,
    scoreAway: 1,
    result: "win",
    venue: "市立総合G",
  },
];

export const resultColors: Record<MatchResult, { border: string; score: string }> = {
  win: { border: "#D4AF37", score: "#D4AF37" },
  draw: { border: "#666666", score: "#888888" },
  loss: { border: "#6B2D8B", score: "#c86b6b" },
};
