import React from "react";
import SolutionsCard from "../cards/SolutionsCard";
import solutions from "../../content/solutions/solutions.json";
import UndrawImage from "../../content/svg/undraw_data_processing_yrrv.svg";
type Props = {};

export default function Solutions({}: Props) {
  return (
    <div
      id="solutions"
      className="min-h-screen bg-gradient-to-tr from-slate-300 to-cyan-700 p-8 md:p-16 lg:p-40"
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-base-100 pb-8">
        Solutions
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {solutions.map((solution: { title: string; description: string }) => (
          <SolutionsCard
            key={solution.title}
            title={solution.title}
            description={solution.description}
          />
        ))}
      </div>
    </div>
  );
}
