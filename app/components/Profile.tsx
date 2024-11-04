"use client";

import { SocialLinkDock } from "@/components/SocialLinkDock";
import { profileInfo } from "@/constants/constants";
import { Card, Image } from "@nextui-org/react";
import { useEffect, useState } from "react";

export default function Profile() {
  const descriptionText = profileInfo.description;
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    const startTypingAnimation = () => {
      let i = 0;
      const typingInterval = setInterval(() => {
        if (i <= descriptionText.length) {
          setTypedText(descriptionText.slice(0, i));
          i++;
        } else {
          clearInterval(typingInterval);
        }
      }, 100);
    };

    const animationInterval = setInterval(startTypingAnimation, 5000);
    startTypingAnimation();

    return () => clearInterval(animationInterval);
  }, []);

  return (
    <Card className="my-10 w-full max-w-sm bg-white/60 p-6 backdrop-blur-lg">
      <div className="flex flex-col items-center justify-center space-y-4">
        <Image
          src={profileInfo.portraitPath}
          alt="portrait"
          width={128}
          height={128}
          className="rounded-full border-2 border-white/50 shadow-lg"
        />
        <h1 className="text-2xl font-bold text-gray-600">{profileInfo.name}</h1>
        <p className="h-8 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-xl text-transparent">
          {typedText}
        </p>
        <SocialLinkDock />
      </div>
    </Card>
  );
}
