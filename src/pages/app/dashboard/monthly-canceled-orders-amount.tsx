import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CircleSlash } from "lucide-react";

export function MonthlyCanceledOrdersAmountCard() {
  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0">
        <CardTitle className="text-base font-semibold">
          Cancelamentos (Mês)
        </CardTitle>
        <CircleSlash className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        <span className="text-2xl font-bold tracking-tight">6</span>
        <p className="text-xs text-muted-foreground">
          <span className="text-emerald-500 dark:text-emerald-400">-3%</span> em
          relação ao mês passado
        </p>
      </CardContent>
    </Card>
  );
}
