"use client";

import { SocialLinksDock } from "@/components/SocialLinksDock";
import { profileInfo } from "@/constants/info";
import { showConfetti } from "@/lib/utils";
import { Card, Image } from "@nextui-org/react";
import { memo, useEffect, useState } from "react";

const Labels = memo(function Labels() {
  const LABELS_GRADIENT_COLORS = [
    {
      from: "#60a5fa",
      via: "#a78bfa",
      to: "#f472b6",
    },
    {
      from: "#a78bfa",
      via: "#f472b6",
      to: "#fb923c",
    },
    {
      from: "#22d3ee",
      via: "#60a5fa",
      to: "#a78bfa",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center space-y-3 md:flex-row md:space-x-2 md:space-y-0">
      {profileInfo.labels.map((label, index) => (
        <div key={label} className="relative rounded-full">
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: `linear-gradient(to left, ${LABELS_GRADIENT_COLORS[index].from}, ${LABELS_GRADIENT_COLORS[index].via}, ${LABELS_GRADIENT_COLORS[index].to})`,
              padding: "1px",
              content: '""',
              mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              maskComposite: "exclude",
              WebkitMask:
                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
            }}
          />
          <p
            className="relative inline-block whitespace-nowrap bg-gradient-to-l bg-[length:var(--bg-size)_100%] bg-clip-text px-3 text-transparent"
            style={{
              backgroundImage: `linear-gradient(to left, ${LABELS_GRADIENT_COLORS[index].from}, ${LABELS_GRADIENT_COLORS[index].via}, ${LABELS_GRADIENT_COLORS[index].to})`,
            }}
          >
            {label}
          </p>
        </div>
      ))}
    </div>
  );
});

Labels.displayName = "Labels";

const TypingText = memo(function TypingText() {
  const [currentMottoIndex, setCurrentMottoIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const currentMotto = profileInfo.mottos[currentMottoIndex];

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i <= currentMotto.length) {
        setTypedText(currentMotto.slice(0, i));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    const switchInterval = setInterval(() => {
      setCurrentMottoIndex((prev) => (prev + 1) % profileInfo.mottos.length);
      i = 0;
    }, 6000);

    return () => {
      clearInterval(switchInterval);
      clearInterval(typingInterval);
    };
  }, [currentMotto]);

  return (
    <p className="h-8 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-lg text-transparent">
      {typedText}
    </p>
  );
});

TypingText.displayName = "TypingText";

const Profile = memo(function Profile() {
  return (
    <Card
      className="flex min-w-[24rem] flex-[2] select-none items-center justify-center bg-white/60 p-6 backdrop-blur-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#a78bfa]/25 hover:ring-2 hover:ring-[#a78bfa]/50"
      isBlurred={true}
      isPressable={true}
      onPress={showConfetti}
    >
      <div className="flex flex-col items-center justify-center space-y-6">
        <Image
          src={profileInfo.portraitPath}
          alt="portrait"
          width={120}
          height={120}
          className="rounded-full border-2 border-gray-300 shadow-large"
          draggable={false}
        />
        <h1 className="text-2xl font-bold text-gray-600">
          {profileInfo.nickname}
        </h1>
        <Labels />
        <TypingText />
        <SocialLinksDock />
      </div>
    </Card>
  );
});

Profile.displayName = "Profile";

export default Profile;
