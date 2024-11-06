import { http, HttpResponse } from "msw";
import { GetManagedRestaurantResponse } from "../get-managed-restaurant";

export const getManagedRestauranteMock = http.get<
  never,
  never,
  GetManagedRestaurantResponse
>("/managed-restaurant", () => {
  return HttpResponse.json({
    name: "John Doe's Pizza",
    id: "custom-managed-restaurant-id",
    createdAt: new Date(),
    updatedAt: null,
    description: "Testing pizza restaurant.",
    managerId: "custom-user-id",
  });
});
