import React from 'react';

export default function AnimatedDownArrow() {
  return (
    <div className="animate-bounce">
      <div className="w-9 h-9 rounded-full bg-black border-2 border-white flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="text-white"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 5v14"></path>
          <path d="M18 13l-6 6"></path>
          <path d="M6 13l6 6"></path>
        </svg>
      </div>
    </div>
  );
}
