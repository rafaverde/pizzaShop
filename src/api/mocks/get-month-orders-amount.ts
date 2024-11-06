import { http, HttpResponse } from "msw";
import { GetMonthOrdersAmountResponse } from "../get-month-orders-amount";

export const getMonthOrdersAmountMock = http.get<
  never,
  never,
  GetMonthOrdersAmountResponse
>("/metrics/month-orders-amount", () =>
  HttpResponse.json({
    amount: 201,
    diffFromLastMonth: 10,
  }),
);
