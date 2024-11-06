import { http, HttpResponse } from "msw";
import { GetDailyRevenueInPeriodResponse } from "../get-daily-revenue-in-period";

export const getDailyRevenueInPeriodMock = http.get<
  never,
  never,
  GetDailyRevenueInPeriodResponse
>("/metrics/daily-receipt-in-period", () => {
  return HttpResponse.json([
    { date: "01/11/2024", receipt: 2000 },
    { date: "02/11/2024", receipt: 1244 },
    { date: "03/11/2024", receipt: 1288 },
    { date: "04/11/2024", receipt: 987 },
    { date: "05/11/2024", receipt: 763 },
    { date: "06/11/2024", receipt: 1205 },
    { date: "07/11/2024", receipt: 689 },
  ]);
});
