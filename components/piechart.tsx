"use client";

import { Pie, PieChart as RechartsPieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";

// Define a color palette that can be used repeatedly for larger datasets
const CHART_COLORS = [
  "hsl(215, 70%, 58%)",
  "hsl(145, 63%, 49%)",
  "hsl(25, 85%, 57%)",
  "hsl(280, 60%, 65%)",
  "hsl(350, 65%, 54%)",
  "hsl(180, 70%, 50%)",
  "hsl(45, 75%, 50%)",
  "hsl(315, 65%, 50%)",
] as const;

function PieChart(props: {
  title: string;
  description: string;
  chartData: { key: string; val: number }[];
}) {
  // Assign colors to data points, cycling through the palette if needed
  const dataWithColors = props.chartData.map((item, index) => ({
    ...item,
    fill: CHART_COLORS[index % CHART_COLORS.length],
  }));

  // Generate chartConfig dynamically from chartData
  const chartConfig = Object.fromEntries(
    dataWithColors.map((item) => [
      item.key,
      {
        label: item.key,
        color: item.fill,
      },
    ])
  ) satisfies ChartConfig;

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>{props.title}</CardTitle>
        <CardDescription>{props.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px] pb-0 [&_.recharts-pie-label-text]:fill-foreground [&_.recharts-pie-label-text]:translate-y-2"
        >
          <RechartsPieChart>
            <ChartTooltip content={<ChartTooltipContent nameKey="key" />} />
            <Pie
              data={dataWithColors}
              dataKey="val"
              label={({ value }) => `${value}%`}
              nameKey="key"
            />
            <ChartLegend content={<ChartLegendContent nameKey="key" />} />
          </RechartsPieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

export default PieChart;
