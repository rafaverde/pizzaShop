import { useQuery } from "@tanstack/react-query";
import { getDayOrdersAmount } from "@/api/get-days-orders-amount";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

import { ReceiptText } from "lucide-react";

export function DailyOrdersAmountCard() {
  const { data: dailyOrdersAmount } = useQuery({
    queryKey: ["metrics", "day-order-amount"],
    queryFn: getDayOrdersAmount,
  });

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0">
        <CardTitle className="text-base font-semibold">Pedidos (Dia)</CardTitle>
        <ReceiptText className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        {dailyOrdersAmount && (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {dailyOrdersAmount.amount.toLocaleString("pt-BR")}
            </span>
            <p className="text-xs text-muted-foreground">
              {dailyOrdersAmount.diffFromYesterday >= 0 ? (
                <span className="text-emerald-500 dark:text-emerald-400">
                  +{dailyOrdersAmount.diffFromYesterday}%
                </span>
              ) : (
                <span className="text-rose-500 dark:text-rose-400">
                  {dailyOrdersAmount.diffFromYesterday}%
                </span>
              )}{" "}
              em relação a ontem
            </p>
          </>
        )}
      </CardContent>
    </Card>
  );
}
