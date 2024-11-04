import { buttonVariants } from "@/components/ui/button";
import { Dock, DockIcon } from "@/components/ui/dock";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { profileInfo } from "@/constants/constants";
import { cn } from "@/lib/utils";
import { Github, Send, Twitter } from "lucide-react";
import Link from "next/link";

const SOCIAL_LINKS = [
  {
    name: "GitHub",
    url: profileInfo.github,
    icon: Github,
  },
  {
    name: "Twitter",
    url: profileInfo.twitter,
    icon: Twitter,
  },
  {
    name: "Telegram",
    url: profileInfo.telegram,
    icon: Send,
  },
];

export function SocialLinkDock() {
  return (
    <TooltipProvider>
      <Dock
        className="rounded-full bg-white/60 p-2 backdrop-blur-lg"
        magnification={50}
        direction="middle"
      >
        {SOCIAL_LINKS.map((social) => (
          <DockIcon key={social.name}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={social.url}
                  target="_blank"
                  aria-label={social.name}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-10 rounded-full",
                  )}
                >
                  <social.icon className="size-6" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{social.name}</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}
      </Dock>
    </TooltipProvider>
  );
}
