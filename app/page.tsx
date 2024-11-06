import { NextUIProvider } from "@nextui-org/react";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import ProjectsBeam from "./components/ProjectsBeam";
import BlurFade from "./components/ui/blur-fade";

export default function Home() {
  return (
    <NextUIProvider>
      <main className="flex h-screen w-screen items-center justify-center overflow-y-auto">
        <div className="m-4 w-11/12">
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
      </main>
    </NextUIProvider>
  );
}
