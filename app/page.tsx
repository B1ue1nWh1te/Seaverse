import { NextUIProvider } from "@nextui-org/react";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import ProjectsBeam from "./components/ProjectsBeam";

export default function Home() {
  return (
    <NextUIProvider>
      <main className="flex h-screen w-screen items-center justify-center overflow-hidden bg-gradient-to-b from-white to-gray-50">
        <div>
          <div className="flex items-stretch justify-center">
            <Profile />
            <ProjectsBeam />
          </div>
          <div className="flex flex-row items-center justify-center">
            <Projects />
          </div>
        </div>
      </main>
    </NextUIProvider>
  );
}
