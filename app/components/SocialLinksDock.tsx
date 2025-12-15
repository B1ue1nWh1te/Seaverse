"use client";

import { buttonVariants } from "@/components/ui/button";
import { Dock, DockIcon } from "@/components/ui/dock";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { profileInfo } from "@/constants/info";
import { cn } from "@/lib/utils";
import { Github, Send, SquareArrowOutUpRight, Twitter } from "lucide-react";
import Link from "next/link";

const SOCIAL_LINKS = Object.entries(profileInfo.socialLinks).map(
  ([key, url]) => {
    const icons = {
      github: Github,
      twitter: Twitter,
      telegram: Send,
      mirror: SquareArrowOutUpRight,
    };

    const names = {
      github: "GitHub",
      twitter: "X (Twitter)",
      telegram: "Telegram",
      mirror: "Mirror",
    };

    return {
      icon: icons[key as keyof typeof icons],
      name: names[key as keyof typeof names],
      url: url,
    };
  },
);

export function SocialLinksDock() {
  return (
    <TooltipProvider>
      <Dock
        className="mt-0 rounded-full bg-white/60 p-2 backdrop-blur-lg"
        magnification={50}
        direction="middle"
      >
        {SOCIAL_LINKS.map((socialLink) => (
          <DockIcon key={socialLink.name}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={socialLink.url}
                  target="_blank"
                  aria-label={socialLink.name}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-10 rounded-full",
                  )}
                >
                  <socialLink.icon className="size-10" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{socialLink.name}</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}
      </Dock>
    </TooltipProvider>
  );
}
