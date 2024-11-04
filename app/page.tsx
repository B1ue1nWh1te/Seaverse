import { NextUIProvider } from "@nextui-org/react";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import ProjectsBeam from "./components/ProjectsBeam";

export default function Home() {
  return (
    <NextUIProvider>
      <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white to-gray-50">
        {/* Content Container */}
        <div className="flex min-h-screen flex-col items-center justify-center">
          <div className="flex w-full flex-col items-center">
            {/* Profile & Beams Row */}
            <div className="flex w-full flex-row items-center justify-center gap-8">
              <Profile />
              <ProjectsBeam />
            </div>
            {/* Projects Section */}
            <div className="w-full">
              <Projects />
            </div>
          </div>
        </div>
      </main>
    </NextUIProvider>
  );
}
