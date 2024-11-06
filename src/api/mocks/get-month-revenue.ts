import { http, HttpResponse } from "msw";
import { GetMonthRevenueResponse } from "../get-month-revenue";

export const getMonthRevenueMock = http.get<
  never,
  never,
  GetMonthRevenueResponse
>("/metrics/month-receipt", () =>
  HttpResponse.json({
    receipt: 20049,
    diffFromLastMonth: -1,
  }),
);
