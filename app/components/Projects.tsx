"use client";

import { projectsInfo } from "@/constants/info";
import { Card, Image, Link } from "@heroui/react";
import { motion } from "framer-motion";
import { Github, Globe } from "lucide-react";
import NextImage from "next/image";

export default function Projects() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-8">
      {Object.values(projectsInfo).map((project, index) => (
        <motion.div key={index} whileHover={{ scale: 1.1 }}>
          <Card
            className="group flex h-60 w-60 items-center justify-center p-6 backdrop-blur-lg select-none"
            isBlurred={true}
            isPressable={true}
            onPress={() =>
              project.website && window.open(project.website, "_blank")
            }
          >
            <div className="relative flex h-full w-full flex-col items-center justify-center gap-4">
              <div className="flex flex-col items-center justify-center gap-2 transition-transform duration-300 group-hover:-translate-y-4">
                <Image
                  as={NextImage}
                  src={project.logoPath}
                  alt={`${project.name} Logo`}
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <h2 className="text-lg font-semibold text-gray-800">
                  {project.name}
                </h2>
                <p className="text-sm text-gray-600">{project.description}</p>
              </div>
              {(project.website || project.github) && (
                <div className="absolute bottom-0 flex justify-center space-x-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {project.website && (
                    <Link href={project.website} target="_blank">
                      <Globe className="text-gray-500 transition-colors duration-300 hover:text-black" />
                    </Link>
                  )}
                  {project.github && (
                    <Link href={project.github} target="_blank">
                      <Github className="text-gray-500 transition-colors duration-300 hover:text-black" />
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
