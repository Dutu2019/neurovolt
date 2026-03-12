"use client";

import { Area, AreaChart } from "recharts";

import { ChartConfig, ChartContainer } from "@/components/ui/chart";

const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-6)",
  },
} satisfies ChartConfig;

export default function NotFound() {
  return (
    <section className="relative h-screen w-full bg-[var(--primary)] contain-content">
      <h1 className="w-fit m-auto pt-150 text-6xl md:text-9xl font-extrabold italic z-10">
        En développement...
      </h1>
      <ChartContainer
        config={chartConfig}
        className="absolute min-h-[200px] w-full -translate-y-[25%] scale-110"
      >
        <AreaChart
          accessibilityLayer
          data={chartData}
          margin={{
            left: 12,
            right: 12,
          }}
        >
          <Area
            dataKey="desktop"
            type="natural"
            fill="var(--color-primary)"
            fillOpacity={1}
            stroke="var(--color-primary)"
          />
        </AreaChart>
      </ChartContainer>
    </section>
  );
}
