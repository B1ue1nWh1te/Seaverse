"use client";

import { projectsInfo } from "@/constants/info";
import { Card, Image, Link } from "@nextui-org/react";
import { motion } from "framer-motion";
import { Github, Globe } from "lucide-react";

export default function Projects() {
  return (
    <div className="mx-8 my-6 flex flex-wrap justify-between gap-8">
      {Object.values(projectsInfo).map((project, index) => (
        <motion.div key={index} whileHover={{ scale: 1.1 }}>
          <Card
            className="group flex h-60 w-60 select-none items-center justify-center bg-white/80 p-6 backdrop-blur-lg"
            isBlurred={true}
            isPressable={true}
            onPress={() =>
              project.website && window.open(project.website, "_blank")
            }
          >
            <div className="relative flex h-full flex-col items-center justify-center gap-4">
              <div className="flex flex-col items-center justify-center gap-2 transition-transform duration-300 group-hover:-translate-y-4">
                <Image
                  src={project.logoPath}
                  alt={`${project.name} Logo`}
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <h2 className="text-lg font-semibold text-gray-800">
                  {project.name}
                </h2>
                <p className="pointer-events-none text-sm text-gray-600">
                  {project.description}
                </p>
              </div>
              {(project.website || project.github) && (
                <div className="absolute bottom-0 flex justify-center space-x-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {project.website && (
                    <Link href={project.website} target="_blank">
                      <Globe className="text-gray-600 hover:text-gray-900" />
                    </Link>
                  )}
                  {project.github && (
                    <Link href={project.github} target="_blank">
                      <Github className="text-gray-600 hover:text-gray-900" />
                    </Link>
                  )}
                </div>
              )}
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
