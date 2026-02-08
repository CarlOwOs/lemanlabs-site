"use client";

import { useEffect, useRef, useState } from "react";

const contextLengths = ["1k", "2k", "4k", "8k", "16k", "32k"];

const models = [
  {
    name: "Leman-0",
    label: "Leman-0 (Ours)",
    color: "#f97316",
    strokeColor: "stroke-orange-500",
    dotColor: "bg-orange-500",
    data: [99.8, 100, 99.8, 99.8, 99.4, 91.4],
  },
  {
    name: "GDN",
    label: "GDN",
    color: "#9ca3af",
    strokeColor: "stroke-gray-400",
    dotColor: "bg-gray-400",
    data: [99.2, 100, 99.8, 92.0, 41.8, 22.1],
  },
  {
    name: "Mamba2",
    label: "Mamba2",
    color: "#d1d5db",
    strokeColor: "stroke-gray-300",
    dotColor: "bg-gray-300",
    data: [99.2, 95.6, 52.2, 12.8, 5.4, 2.8],
  },
];

// Chart dimensions
const chartWidth = 600;
const chartHeight = 300;
const paddingLeft = 50;
const paddingRight = 30;
const paddingTop = 20;
const paddingBottom = 40;
const plotWidth = chartWidth - paddingLeft - paddingRight;
const plotHeight = chartHeight - paddingTop - paddingBottom;

function getX(index: number): number {
  return paddingLeft + (index / (contextLengths.length - 1)) * plotWidth;
}

function getY(value: number): number {
  return paddingTop + plotHeight - (value / 100) * plotHeight;
}

function buildPath(data: number[]): string {
  return data
    .map((val, i) => `${i === 0 ? "M" : "L"} ${getX(i)} ${getY(val)}`)
    .join(" ");
}

function getPathLength(data: number[]): number {
  let length = 0;
  for (let i = 1; i < data.length; i++) {
    const dx = getX(i) - getX(i - 1);
    const dy = getY(data[i]) - getY(data[i - 1]);
    length += Math.sqrt(dx * dx + dy * dy);
  }
  return length;
}

export default function NIAHChart() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredPoint, setHoveredPoint] = useState<{
    modelIdx: number;
    pointIdx: number;
    x: number;
    y: number;
    value: number;
  } | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Y-axis labels
  const yLabels = [0, 25, 50, 75, 100];

  return (
    <section className="py-24 px-6 warm-gradient-bg" ref={sectionRef}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-orange-500 font-medium mb-4 uppercase tracking-wider text-sm">
            Long Context
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-normal text-gray-900 mb-4">
            Perfect recall at{" "}
            <span className="gradient-text-warm">any length</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Needle-in-a-Haystack accuracy across context lengths. Leman-0 stays
            near-perfect where others collapse.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-10 shadow-sm">
          {/* SVG Chart */}
          <div className="w-full overflow-x-auto">
            <div className="min-w-[500px]">
              <svg
                viewBox={`0 0 ${chartWidth} ${chartHeight}`}
                className="w-full h-auto"
                preserveAspectRatio="xMidYMid meet"
              >
                {/* Grid lines */}
                {yLabels.map((val) => (
                  <g key={`grid-${val}`}>
                    <line
                      x1={paddingLeft}
                      y1={getY(val)}
                      x2={chartWidth - paddingRight}
                      y2={getY(val)}
                      stroke="#f3f4f6"
                      strokeWidth="1"
                    />
                    <text
                      x={paddingLeft - 10}
                      y={getY(val) + 4}
                      textAnchor="end"
                      className="fill-gray-400"
                      fontSize="11"
                      fontFamily="Inter, system-ui, sans-serif"
                    >
                      {val}%
                    </text>
                  </g>
                ))}

                {/* X-axis labels */}
                {contextLengths.map((label, i) => (
                  <text
                    key={`x-${label}`}
                    x={getX(i)}
                    y={chartHeight - 8}
                    textAnchor="middle"
                    className="fill-gray-400"
                    fontSize="11"
                    fontFamily="Inter, system-ui, sans-serif"
                  >
                    {label}
                  </text>
                ))}

                {/* Lines */}
                {models.map((model, modelIdx) => {
                  const pathLength = getPathLength(model.data);
                  return (
                    <path
                      key={model.name}
                      d={buildPath(model.data)}
                      fill="none"
                      stroke={model.color}
                      strokeWidth={model.name === "Leman-0" ? 3 : 2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeDasharray={pathLength}
                      strokeDashoffset={isVisible ? 0 : pathLength}
                      style={{
                        transition: `stroke-dashoffset 1.5s ease-out ${modelIdx * 200}ms`,
                      }}
                    />
                  );
                })}

                {/* Data points */}
                {models.map((model, modelIdx) =>
                  model.data.map((val, pointIdx) => (
                    <g key={`${model.name}-${pointIdx}`}>
                      <circle
                        cx={getX(pointIdx)}
                        cy={getY(val)}
                        r={model.name === "Leman-0" ? 5 : 4}
                        fill="white"
                        stroke={model.color}
                        strokeWidth={2}
                        className="transition-opacity duration-500"
                        style={{
                          opacity: isVisible ? 1 : 0,
                          transitionDelay: `${modelIdx * 200 + pointIdx * 100 + 500}ms`,
                        }}
                      />
                      {/* Invisible larger hit area for hover */}
                      <circle
                        cx={getX(pointIdx)}
                        cy={getY(val)}
                        r={12}
                        fill="transparent"
                        className="cursor-pointer"
                        onMouseEnter={() =>
                          setHoveredPoint({
                            modelIdx,
                            pointIdx,
                            x: getX(pointIdx),
                            y: getY(val),
                            value: val,
                          })
                        }
                        onMouseLeave={() => setHoveredPoint(null)}
                      />
                    </g>
                  ))
                )}

                {/* Tooltip */}
                {hoveredPoint && (
                  <g>
                    <rect
                      x={hoveredPoint.x - 45}
                      y={hoveredPoint.y - 32}
                      width={90}
                      height={24}
                      rx={6}
                      fill="#1a1a1a"
                    />
                    <text
                      x={hoveredPoint.x}
                      y={hoveredPoint.y - 16}
                      textAnchor="middle"
                      fill="white"
                      fontSize="11"
                      fontWeight="600"
                      fontFamily="Inter, system-ui, sans-serif"
                    >
                      {models[hoveredPoint.modelIdx].name}:{" "}
                      {hoveredPoint.value}%
                    </text>
                  </g>
                )}
              </svg>
            </div>
          </div>

          {/* Legend */}
          <div className="flex items-center justify-center gap-6 mt-6">
            {models.map((model) => (
              <div key={model.name} className="flex items-center gap-2">
                <div
                  className={`w-3 h-3 rounded-full ${model.dotColor}`}
                />
                <span
                  className={`text-sm ${
                    model.name === "Leman-0"
                      ? "font-semibold text-gray-900"
                      : "text-gray-500"
                  }`}
                >
                  {model.label}
                </span>
              </div>
            ))}
          </div>

          {/* Key insight callout */}
          <div className="mt-8 flex items-center justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-100">
              <svg
                className="w-4 h-4 text-orange-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-sm font-medium text-orange-700">
                91.4% accuracy at 32k context — 4x better than the next linear
                model
              </span>
            </div>
          </div>
        </div>

        <p className="text-center text-sm text-gray-400 mt-8">
          NIAH-1 accuracy at 500M parameter scale. Higher is better.
        </p>
      </div>
    </section>
  );
}
