import { http, HttpResponse } from "msw";
import {
  GetOrderDetailsParams,
  GetOrderDetailsResponse,
} from "../get-order-details";

export const getOrderDetailsMock = http.get<
  GetOrderDetailsParams,
  never,
  GetOrderDetailsResponse
>("/orders/:orderId", ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    customer: {
      name: "John Doe",
      email: "johndoe@example.com",
      phone: "(84) 99999-9999",
    },
    status: "pending",
    createdAt: new Date().toISOString(),
    totalInCents: 7000,
    orderItems: [
      {
        id: "order-item-1",
        product: { name: "Pizza 01" },
        priceInCents: 1000,
        quantity: 1,
      },
      {
        id: "order-item-2",
        product: { name: "Pizza 02" },
        priceInCents: 2000,
        quantity: 3,
      },
    ],
  });
});
