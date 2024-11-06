"use client";

import { NextUIProvider } from "@nextui-org/react";
import { useEffect, useState } from "react";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import ProjectsBeam from "./components/ProjectsBeam";
import BlurFade from "./components/ui/blur-fade";
import { cn } from "./lib/utils";

export default function Home() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const isLarge = window.innerWidth >= 1400;
      if (isLarge !== isLargeScreen) {
        setIsLargeScreen(isLarge);
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, [isLargeScreen]);

  return (
    <NextUIProvider>
      <main className="h-screen w-screen overflow-y-auto overflow-x-hidden">
        <div
          className={cn(
            "flex flex-col items-center justify-center p-4",
            isLargeScreen ? "h-screen" : "min-h-screen",
          )}
        >
          <div className="grid gap-8">
            <BlurFade delay={0.2}>
              <div className="flex flex-wrap items-stretch justify-center gap-8">
                <Profile />
                <ProjectsBeam />
              </div>
            </BlurFade>
            <BlurFade delay={0.4}>
              <div className="flex items-center justify-center">
                <Projects />
              </div>
            </BlurFade>
          </div>
        </div>
      </main>
    </NextUIProvider>
  );
}
