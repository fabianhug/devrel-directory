"use client";

import { SVGProps } from "react";

const DeveloperJourneyStages = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 800 100" xmlns="http://www.w3.org/2000/svg" {...props}>
      {/* Connecting Lines */}
      <line
        x1="100"
        y1="50"
        x2="700"
        y2="50"
        stroke="currentColor"
        strokeWidth="2"
      />

      {/* Stage Circles and Labels */}
      <g>
        <circle cx="100" cy="50" r="20" fill="#8b5cf6" />
        <text
          x="100"
          y="90"
          textAnchor="middle"
          fill="currentColor"
          fontSize="14"
        >
          Discover
        </text>
      </g>

      <g>
        <circle cx="250" cy="50" r="20" fill="#3b82f6" />
        <text
          x="250"
          y="90"
          textAnchor="middle"
          fill="currentColor"
          fontSize="14"
        >
          Evaluate
        </text>
      </g>

      <g>
        <circle cx="400" cy="50" r="20" fill="#10b981" />
        <text
          x="400"
          y="90"
          textAnchor="middle"
          fill="currentColor"
          fontSize="14"
        >
          Learn
        </text>
      </g>

      <g>
        <circle cx="550" cy="50" r="20" fill="#f59e0b" />
        <text
          x="550"
          y="90"
          textAnchor="middle"
          fill="currentColor"
          fontSize="14"
        >
          Build
        </text>
      </g>

      <g>
        <circle cx="700" cy="50" r="20" fill="#ef4444" />
        <text
          x="700"
          y="90"
          textAnchor="middle"
          fill="currentColor"
          fontSize="14"
        >
          Scale
        </text>
      </g>

      {/* Arrows */}
      <path d="M170 50 l-20 -7 l0 14 z" fill="currentColor" />
      <path d="M320 50 l-20 -7 l0 14 z" fill="currentColor" />
      <path d="M470 50 l-20 -7 l0 14 z" fill="currentColor" />
      <path d="M620 50 l-20 -7 l0 14 z" fill="currentColor" />
    </svg>
  );
};

export default DeveloperJourneyStages;
