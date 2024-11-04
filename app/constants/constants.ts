export const profileInfo = {
  portraitPath: "/portrait.jpg",
  name: "B1ue1nWh1te",
  description: "知行合一，宁静致远。",
  github: "https://github.com/B1ue1nWh1te",
  twitter: "https://x.com/RealB1ue1nWh1te",
  telegram: "https://t.me/b1ue1nwh1te",
};

interface Project {
  logoPath: string;
  name: string;
  description: string;
  website: string;
  github: string;
}

export const projectsInfo: Record<string, Project> = {
  SeaEye: {
    logoPath: "/seaeye.png",
    name: "SeaEye 深海之眼",
    description: "个人博客网站",
    website: "https://www.seaeye.cn/",
    github: "https://github.com/B1ue1nWh1te/SeaEye",
  },
  Poseidon: {
    logoPath: "/poseidon.png",
    name: "Poseidon 海神波塞冬",
    description: "简洁优雅的区块链交互工具库",
    website: "https://poseidon.seaeye.cn/",
    github: "https://github.com/B1ue1nWh1te/Poseidon",
  },
  Trident: {
    logoPath: "/trident.png",
    name: "Trident 海王三叉戟",
    description: "自制的区块链安全审计工具",
    website: "https://trident.seaeye.cn/",
    github: "",
  },
  Tsunami: {
    logoPath: "/tsunami.png",
    name: "Tsunami 海啸",
    description: "安全事件分析存档",
    website: "https://tsunami.seaeye.cn/",
    github: "https://github.com/B1ue1nWh1te/Tsunami",
  },
  Seaverse: {
    logoPath: "/seaverse.png",
    name: "Seaverse 海域",
    description: "个人主页",
    website: "https://seaverse.seaeye.cn/",
    github: "https://github.com/B1ue1nWh1te/Seaverse",
  },
};
