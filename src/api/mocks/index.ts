import { env } from "@/env";
import { setupWorker } from "msw/browser";
import { signInMock } from "./signin-mock";
import { registerRestaurantMock } from "./register-restaurant-mock";
import { getDayOrdersAmountMock } from "./get-days-orders-amount";
import { getMonthOrdersAmountMock } from "./get-month-orders-amount";
import { getMonthOrdersCanceledAmountMock } from "./get-month-canceled-orders-amount";
import { getMonthRevenueMock } from "./get-month-revenue";
import { getDailyRevenueInPeriodMock } from "./get-daily-revenue-in-period-mock";
import { getPopularProductsMock } from "./get-popular-products-mock";

export const worker = setupWorker(
  signInMock,
  registerRestaurantMock,
  getDayOrdersAmountMock,
  getMonthOrdersAmountMock,
  getMonthOrdersCanceledAmountMock,
  getMonthRevenueMock,
  getDailyRevenueInPeriodMock,
  getPopularProductsMock,
);

export async function enableMSW() {
  if (env.MODE !== "test") {
    return;
  }

  await worker.start();
}
