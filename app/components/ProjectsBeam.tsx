"use client";

import { AnimatedBeam } from "@/components/ui/animated-beam";
import { projectsInfo } from "@/constants/constants";
import { cn } from "@/lib/utils";
import { Card } from "@nextui-org/react";
import Image from "next/image";
import { forwardRef, useRef } from "react";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; projectName: keyof typeof projectsInfo }
>(({ className, projectName }, ref) => {
  const project = projectsInfo[projectName];

  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-16 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
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
      className="relative flex h-[350px] w-[600px] items-center justify-center overflow-hidden bg-background p-10"
      ref={containerRef}
    >
      <Circle
        ref={middleRef}
        className="absolute left-1/2 top-1/2 size-16 -translate-x-1/2 -translate-y-1/2"
        projectName="Seaverse"
      />
      <div className="flex size-full flex-col items-stretch justify-between">
        <div className="flex flex-row items-center justify-between">
          <Circle ref={leftTopRef} projectName="Poseidon" />
          <Circle ref={rightTopRef} projectName="SeaEye" />
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={leftBottomRef} projectName="Trident" />
          <Circle ref={rightBottomRef} projectName="Tsunami" />
        </div>
      </div>
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={leftTopRef}
        toRef={middleRef}
        curvature={-50}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={leftBottomRef}
        toRef={middleRef}
        curvature={50}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={rightTopRef}
        toRef={middleRef}
        curvature={-50}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={rightBottomRef}
        toRef={middleRef}
        curvature={50}
        reverse
      />
    </Card>
  );
}
