import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import colors from "tailwindcss/colors";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { ChartPie } from "lucide-react";

const chartData = [
  { productName: "Calabresa", revenueAmount: 40 },
  { productName: "Pepperoni", revenueAmount: 32 },
  { productName: "Mussarela", revenueAmount: 15 },
  { productName: "4 Queijos", revenueAmount: 20 },
  { productName: "Portuguesa", revenueAmount: 35 },
];

const COLORS = [
  colors.sky[500],
  colors.amber[500],
  colors.violet[500],
  colors.emerald[500],
  colors.rose[500],
];

export function PopularProductsChart() {
  return (
    <Card className="col-span-3">
      <CardHeader className="pb-8">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-medium">
            Produtos mais vendidos
          </CardTitle>
          <ChartPie className="h-4 w-4 text-muted-foreground" />
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={240}>
          <PieChart style={{ fontSize: 12 }}>
            <Pie
              data={chartData}
              dataKey="revenueAmount"
              nameKey="productName"
              cx="50%"
              cy="50%"
              outerRadius={86}
              innerRadius={50}
              strokeWidth={8}
              labelLine={false}
              label={({
                cx,
                cy,
                midAngle,
                innerRadius,
                outerRadius,
                value,
                index,
              }) => {
                const RADIAN = Math.PI / 180;
                const radius = 16 + innerRadius + (outerRadius - innerRadius);
                const x = cx + radius * Math.cos(-midAngle * RADIAN);
                const y = cy + radius * Math.sin(-midAngle * RADIAN);

                return (
                  <text
                    x={x}
                    y={y}
                    className="fill-muted-foreground text-xs"
                    textAnchor={x > cx ? "start" : "end"}
                    dominantBaseline="central"
                  >
                    {chartData[index].productName.length > 12
                      ? chartData[index].productName
                          .substring(0, 12)
                          .concat("...")
                      : chartData[index].productName}{" "}
                    ({value})
                  </text>
                );
              }}
            >
              {chartData.map((_, index) => {
                return (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index]}
                    className="stroke-background hover:opacity-80"
                  ></Cell>
                );
              })}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
