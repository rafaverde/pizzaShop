import { useQuery } from "@tanstack/react-query";
import { getMonthRevenue } from "@/api/get-month-revenue";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { DollarSign } from "lucide-react";

export function MonthlyRevenueCard() {
  const { data: monthlyRevenue } = useQuery({
    queryKey: ["metrics", "monthly-revenue"],
    queryFn: getMonthRevenue,
  });

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0">
        <CardTitle className="text-base font-semibold">
          Receita Total (Mês)
        </CardTitle>
        <DollarSign className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        {monthlyRevenue && (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {(monthlyRevenue.receipt / 100).toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
            <p className="text-xs text-muted-foreground">
              {monthlyRevenue.diffFromLastMonth >= 0 ? (
                <span className="text-emerald-500 dark:text-emerald-400">
                  +{monthlyRevenue.diffFromLastMonth}%
                </span>
              ) : (
                <span className="text-rose-500 dark:text-rose-400">
                  {monthlyRevenue.diffFromLastMonth}%
                </span>
              )}{" "}
              em relação ao mês passado
            </p>
          </>
        )}
      </CardContent>
    </Card>
  );
}
