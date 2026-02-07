export interface NewsItem {
  date: string;
  tag: string;
  title: string;
  description: string;
}

export const newsItems: NewsItem[] = [
  {
    date: "2026.02.05",
    tag: "試合情報",
    title: "インターハイ予選 県大会ベスト8進出！",
    description:
      "インターハイ予選の県大会にて、チーム一丸となった戦いでベスト8進出を達成しました。応援ありがとうございました。",
  },
  {
    date: "2026.01.28",
    tag: "お知らせ",
    title: "新任コーチ就任のお知らせ",
    description:
      "2月より、元Jリーガーの新コーチが就任いたします。更なるチーム強化に向けて指導体制を充実させます。",
  },
  {
    date: "2026.01.15",
    tag: "イベント",
    title: "練習試合のご案内（2月開催）",
    description:
      "2月に練習試合を予定しています。対戦チームの募集も行っておりますので、お気軽にお問い合わせください。",
  },
];
