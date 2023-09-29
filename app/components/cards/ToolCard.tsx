import React, { ReactNode } from 'react';

type ToolCardProps = {
  title: string;
  description: string;
  children: ReactNode;
};

export default function ToolCard({ title, description, children }: ToolCardProps) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 md:flex md:flex-col md:items-center text-black">
      <div className="flex-shrink-0 mb-4 md:mb-2">
        {children}
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
