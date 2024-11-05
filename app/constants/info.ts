import type { Metadata } from "next";

export const metadataInfo: Metadata = {
  title: "Seaverse - 海域",
  icons: {
    icon: "/seaverse.svg",
  },
};

export const profileInfo = {
  portraitPath: "/portrait.jpg",
  nickname: "B1ue1nWh1te",
  labels: ["Web3 🌊", "全栈开发者 🪼", "智能合约工程师 🔱"],
  mottos: [
    "知行合一，宁静致远。",
    "放弃幻想，准备战斗。",
    "最慢的步伐不是跬步，而是徘徊。",
    "最快的步伐不是冲刺，而是坚持。",
  ],
  socialLinks: {
    github: "https://github.com/B1ue1nWh1te",
    twitter: "https://x.com/RealB1ue1nWh1te",
    telegram: "https://t.me/b1ue1nwh1te",
    mirror: "https://mirror.xyz/b1ue1nwh1te.eth",
  },
};

export const projectsInfo = {
  SeaEye: {
    logoPath: "/seaeye.svg",
    name: "SeaEye 深海之眼",
    description: "博客网站",
    website: "https://www.seaeye.cn/",
    github: "https://github.com/B1ue1nWh1te/SeaEye",
  },
  Poseidon: {
    logoPath: "/poseidon.svg",
    name: "Poseidon 海神波塞冬",
    description: "多链交互工具",
    website: "https://poseidon.seaeye.cn/",
    github: "https://github.com/B1ue1nWh1te/Poseidon",
  },
  Trident: {
    logoPath: "/trident.svg",
    name: "Trident 海王三叉戟",
    description: "绝密 · 核心",
    website: "",
    github: "",
  },
  Tsunami: {
    logoPath: "/tsunami.svg",
    name: "Tsunami 海啸",
    description: "安全研究存档",
    website: "https://tsunami.seaeye.cn/",
    github: "https://github.com/B1ue1nWh1te/Tsunami",
  },
  Seaverse: {
    logoPath: "/seaverse.svg",
    name: "Seaverse 海域",
    description: "联动中心枢纽",
    website: "https://seaverse.seaeye.cn/",
    github: "https://github.com/B1ue1nWh1te/Seaverse",
  },
};
