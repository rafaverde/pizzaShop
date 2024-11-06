import { http, HttpResponse } from "msw";
import { GetMonthCanceledOrdersAmountResponse } from "../get-month-canceled-orders-amount";

export const getMonthOrdersCanceledAmountMock = http.get<
  never,
  never,
  GetMonthCanceledOrdersAmountResponse
>("/metrics/month-canceled-orders-amount", () =>
  HttpResponse.json({
    amount: 5,
    diffFromLastMonth: -10,
  }),
);
