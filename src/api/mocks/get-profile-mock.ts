import { http, HttpResponse } from "msw";
import { GetProfileResponse } from "../get-profile";

export const getProfileMock = http.get<never, never, GetProfileResponse>(
  "/me",
  () => {
    return HttpResponse.json({
      name: "John Doe",
      id: "custom-user-id",
      email: "johndoe@example.com",
      phone: "(84) 99999-9999",
      role: "manager",
      createdAt: new Date(),
      updatedAt: null,
    });
  },
);
