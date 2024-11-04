"use client";

import { projectsInfo } from "@/constants/constants";
import { Card, Image, Link } from "@nextui-org/react";
import { motion } from "framer-motion";
import { Github, Globe } from "lucide-react";

export default function Projects() {
  return (
    <div className="my-10 grid w-full max-w-7xl grid-cols-5 gap-6">
      {Object.values(projectsInfo).map((project, index) => (
        <motion.div key={index} whileHover={{ scale: 1.05 }}>
          <Card className="group bg-white/80 p-6 backdrop-blur-lg">
            <div className="flex flex-col items-center text-center">
              <Image
                src={project.logoPath}
                alt={`${project.name} Logo`}
                width={60}
                height={60}
                className="mb-4 rounded-full"
              />
              <h2 className="mb-2 text-lg font-semibold text-gray-800">
                {project.name}
              </h2>
              <p className="mb-4 text-sm text-gray-600">
                {project.description}
              </p>
            </div>
            <div className="flex justify-center space-x-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <Link href={project.website} target="_blank">
                <Globe className="text-gray-600 hover:text-gray-900" />
              </Link>
              <Link href={project.github} target="_blank">
                <Github className="text-gray-600 hover:text-gray-900" />
              </Link>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
