"use client";

import { AnimatedBeam } from "@/components/ui/animated-beam";
import Ripple from "@/components/ui/ripple";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { projectsInfo } from "@/constants/info";
import { cn, showConfetti } from "@/lib/utils";
import { Card } from "@nextui-org/react";
import Image from "next/image";
import { forwardRef, useRef } from "react";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; projectName: keyof typeof projectsInfo }
>(({ className, projectName }, ref) => {
  const project = projectsInfo[projectName];

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div
            ref={ref}
            className={cn(
              "z-10 flex size-16 cursor-pointer items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] transition-transform hover:scale-110",
              className,
            )}
          >
            <Image
              src={project.logoPath}
              alt={project.name}
              width={32}
              height={32}
              className="size-full object-contain"
            />
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>{project.name}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
});

Circle.displayName = "Circle";

export default function ProjectsBeam() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftTopRef = useRef<HTMLDivElement>(null);
  const leftBottomRef = useRef<HTMLDivElement>(null);
  const middleRef = useRef<HTMLDivElement>(null);
  const rightTopRef = useRef<HTMLDivElement>(null);
  const rightBottomRef = useRef<HTMLDivElement>(null);

  return (
    <Card
      className="mb-4 flex min-w-[500px] flex-[3] select-none items-center justify-center bg-background px-14 py-12 transition-all duration-300 hover:shadow-lg hover:shadow-[#4facfe]/25 hover:ring-2 hover:ring-[#4facfe]/50"
      ref={containerRef}
      isBlurred={true}
      isPressable={true}
      onPress={showConfetti}
    >
      <Circle
        ref={middleRef}
        className="absolute left-1/2 top-1/2 size-16 -translate-x-1/2 -translate-y-1/2"
        projectName="Seaverse"
      />
      <div className="flex size-full flex-col items-stretch justify-between">
        <div className="flex flex-row items-center justify-between">
          <Circle ref={leftTopRef} projectName="Poseidon" />
          <Circle ref={rightTopRef} projectName="Tsunami" />
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={leftBottomRef} projectName="Trident" />
          <Circle ref={rightBottomRef} projectName="SeaEye" />
        </div>
      </div>
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={leftTopRef}
        toRef={middleRef}
        curvature={10}
        pathWidth={3}
        gradientStartColor="#4facfe"
        gradientStopColor="#00f2fe"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={leftBottomRef}
        toRef={middleRef}
        curvature={-10}
        pathWidth={3}
        gradientStartColor="#89f7fe"
        gradientStopColor="#66a6ff"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={rightTopRef}
        toRef={middleRef}
        curvature={10}
        reverse
        pathWidth={3}
        gradientStartColor="#a1c4fd"
        gradientStopColor="#c2e9fb"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={rightBottomRef}
        toRef={middleRef}
        curvature={-10}
        reverse
        pathWidth={3}
        gradientStartColor="#fbc2eb"
        gradientStopColor="#a6c1ee"
      />
      <Ripple mainCircleSize={120} mainCircleOpacity={0.3} numCircles={2} />
    </Card>
  );
}
