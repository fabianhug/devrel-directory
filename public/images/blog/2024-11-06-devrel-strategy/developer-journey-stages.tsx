"use client";

import { SVGProps } from "react";

export const DeveloperJourneyStages = ({
  stage,
  ...props
}: SVGProps<SVGSVGElement> & {
  stage?: "discover" | "evaluate" | "learn" | "build" | "scale";
}) => {
  const stages = [
    { id: "discover", x: 100, color: "#8b5cf6" },
    { id: "evaluate", x: 250, color: "#3b82f6" },
    { id: "learn", x: 400, color: "#10b981" },
    { id: "build", x: 550, color: "#f59e0b" },
    { id: "scale", x: 700, color: "#ef4444" },
  ];

  return (
    <svg viewBox="0 0 800 100" xmlns="http://www.w3.org/2000/svg" {...props}>
      {/* Base line */}
      <line
        x1="100"
        y1="50"
        x2="700"
        y2="50"
        stroke="currentColor"
        strokeWidth="2"
      />

      {/* Arrows between stages */}
      {stages.slice(0, -1).map((_, index) => (
        <path
          key={`arrow-${index}`}
          d={`M${stages[index].x + 70} 50 l-20 -7 l0 14 z`}
          fill="currentColor"
        />
      ))}

      {/* Stages */}
      {stages.map((s) => (
        <g key={s.id}>
          {/* Circle */}
          <circle cx={s.x} cy={50} r={20} fill={s.color} />

          {/* Gray overlay for inactive stages */}
          {stage && stage !== s.id && (
            <circle cx={s.x} cy={50} r={20} fill="#000000" fillOpacity={0.7} />
          )}

          {/* Text label */}
          <text
            x={s.x}
            y={90}
            textAnchor="middle"
            fill="currentColor"
            fontSize={14}
          >
            {s.id.charAt(0).toUpperCase() + s.id.slice(1)}
          </text>

          {/* Gray overlay for inactive stage labels */}
          {stage && stage !== s.id && (
            <text
              x={s.x}
              y={90}
              textAnchor="middle"
              fill="currentColor"
              fontSize={14}
              opacity={0.3}
            >
              {s.id.charAt(0).toUpperCase() + s.id.slice(1)}
            </text>
          )}
        </g>
      ))}
    </svg>
  );
};

export default DeveloperJourneyStages;
