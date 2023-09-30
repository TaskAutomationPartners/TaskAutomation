import React from "react";
import tools from "../../content/tools/tools.json";
import {
  IconBrandAws,
  IconBrandAzure,
  IconBrandCSharp,
  IconBrandDocker,
  IconBrandReact,
  IconLockCode,
} from "@tabler/icons-react";
import { IconDeviceDesktop } from "@tabler/icons-react";
import ToolCard from "../cards/ToolCard";

type Props = {};

type ToolsWithIconsType = {
  [title: string]: React.ReactNode;
};

const toolIcons: ToolsWithIconsType = {
  "Robust Backend Foundations": (
    <div className="p-2 shadow-lg bg-gradient-to-r from-blue-500 to-cyan-500 rounded-md inline-block">
      <IconBrandCSharp className="text-white" size={48} />
    </div>
  ),
  "Dynamic Frontend Experiences": (
    <div className="p-2 shadow-lg bg-gradient-to-r from-purple-400 to-indigo-500 rounded-md inline-block">
      <IconBrandReact className="text-white" size={48} />
    </div>
  ),
  "Flexible Hosting Solutions": (
    <span className="flex gap-1 h-14">
      <div className="p-2 shadow-lg bg-gradient-to-r from-orange-400 to-yellow-500 rounded-md inline-block">
        <IconBrandAws className="text-black" size={48} />
      </div>
      <div className="p-2 shadow-lg bg-gradient-to-r from-blue-400 to-teal-500 rounded-md inline-block">
        <IconBrandAzure className="text-white" size={48} />
      </div>
      <div className="p-2 shadow-lg bg-gradient-to-r from-blue-400 to-purple-500 rounded-md inline-block">
        <IconBrandDocker className="text-white" size={48} />
      </div>
    </span>
  ),
  "Comprehensive Project Management": (
    <div className="p-2 shadow-lg bg-gradient-to-r from-green-400 to-teal-500 rounded-md inline-block">
      <IconBrandAzure className="text-white" size={48} />
    </div>
  ),
  "Adaptive Content Management": (
    <div className="p-2 shadow-lg bg-gradient-to-r from-gray-400 to-gray-500 rounded-md inline-block">
      <IconDeviceDesktop className="text-white" size={48} />
    </div>
  ),
  "Security and Compliance Excellence": (
    <div className="p-2 shadow-lg bg-gradient-to-r from-red-500 to-pink-500 rounded-md inline-block">
      <IconLockCode className="text-white" size={48} />
    </div>
  ),
};

export default function ToolSection({}: Props) {
  return (
    <div id="tools" className="container mx-auto py-12">
      <div className="mb-8 text-center">
        <h2 className="focus-visible:animate-pulse text-4xl font-bold text-cyan-200">
          Empowering Your Business with Cutting-Edge Technologies
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {tools.map((tool) => (
          <ToolCard
            key={tool.title}
            title={tool.title}
            description={tool.description}
          >
            {toolIcons[tool.title]}
          </ToolCard>
        ))}
      </div>
    </div>
  );
}
