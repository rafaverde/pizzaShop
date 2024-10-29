import { useQuery } from "@tanstack/react-query";
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts";
import { useMemo, useState } from "react";
import { DateRange } from "react-day-picker";
import { subDays } from "date-fns";

import { getDailyRevenueInPeriod } from "@/api/get-daily-revenue-in-period";

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
} from "@/components/ui/chart";
import { Label } from "@/components/ui/label";
import { DataRangePicker } from "@/components/ui/data-range-picker";

import colors from "tailwindcss/colors";
import { Loader2 } from "lucide-react";

const chartConfig = {
  receipt: {
    label: "Vendas R$ ",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function RevenueBarChart() {
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: subDays(new Date(), 7),
    to: new Date(),
  });

  const { data: dailyRevenueInPeriod } = useQuery({
    queryKey: ["metrics", "daily-revenue-in-period", dateRange],
    queryFn: () =>
      getDailyRevenueInPeriod({
        from: dateRange?.from,
        to: dateRange?.to,
      }),
  });

  const charData = useMemo(() => {
    return dailyRevenueInPeriod?.map((chartItem) => {
      return {
        date: chartItem.date,
        receipt: chartItem.receipt / 100,
      };
    });
  }, [dailyRevenueInPeriod]);

  return (
    <Card className="col-span-6">
      <CardHeader className="flex-row items-center justify-between pb-8">
        <div className="space-y-1">
          <CardTitle className="text-base font-medium">
            Receita no período
          </CardTitle>
          <CardDescription>Receita diária no período</CardDescription>
        </div>

        <div className="flex items-center gap-3">
          <Label>Período</Label>
          <DataRangePicker date={dateRange} onDateChange={setDateRange} />
        </div>
      </CardHeader>
      <CardContent>
        {charData ? (
          <ChartContainer
            config={chartConfig}
            className="max-h-[250px] w-[100%]"
          >
            <BarChart
              accessibilityLayer
              data={charData}
              margin={{
                top: 20,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="date"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
              />
              <ChartTooltip
                cursor={false}
                content={
                  <ChartTooltipContent labelKey="Vendas" indicator="dashed" />
                }
              />
              <Bar dataKey="receipt" fill={colors.violet[500]} radius={8}>
                <LabelList
                  position="top"
                  offset={12}
                  className="fill-foreground"
                  fontSize={12}
                  formatter={(value: number) =>
                    value.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })
                  }
                />
              </Bar>
            </BarChart>
          </ChartContainer>
        ) : (
          <div className="flex h-[240px] w-full items-center justify-center">
            <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
          </div>
        )}
      </CardContent>
    </Card>
  );
}
