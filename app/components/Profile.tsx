"use client";

import { SocialLinksDock } from "@/components/SocialLinksDock";
import AnimatedGradientText from "@/components/ui/animated-gradient-text";
import { profileInfo } from "@/constants/info";
import { showConfetti } from "@/lib/utils";
import { Card, Image } from "@nextui-org/react";
import { useEffect, useState } from "react";

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

export default function Profile() {
  const [currentMottoIndex, setCurrentMottoIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const currentMotto = profileInfo.mottos[currentMottoIndex];

  useEffect(() => {
    let typingInterval: NodeJS.Timeout;

    const startTypingAnimation = () => {
      clearInterval(typingInterval);

      let i = 0;
      typingInterval = setInterval(() => {
        if (i <= currentMotto.length) {
          setTypedText(currentMotto.slice(0, i));
          i++;
        } else {
          clearInterval(typingInterval);
        }
      }, 100);
    };

    const switchMotto = () => {
      setCurrentMottoIndex((prev) => (prev + 1) % profileInfo.mottos.length);
    };

    const animationInterval = setInterval(() => {
      switchMotto();
      startTypingAnimation();
    }, 6000);

    startTypingAnimation();

    return () => {
      clearInterval(animationInterval);
      clearInterval(typingInterval);
    };
  }, [currentMotto]);

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
        <div className="flex flex-col items-center justify-center space-y-3 md:flex-row md:space-x-3 md:space-y-0">
          {profileInfo.labels.map((label, index) => (
            <AnimatedGradientText key={label}>
              <p
                className="inline whitespace-nowrap bg-gradient-to-r bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(to right, ${LABELS_GRADIENT_COLORS[index].from}, ${LABELS_GRADIENT_COLORS[index].via}, ${LABELS_GRADIENT_COLORS[index].to})`,
                }}
              >
                {label}
              </p>
            </AnimatedGradientText>
          ))}
        </div>
        <p className="h-8 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-lg text-transparent">
          {typedText}
        </p>
        <SocialLinksDock />
      </div>
    </Card>
  );
}
