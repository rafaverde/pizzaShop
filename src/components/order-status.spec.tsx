import { render } from "@testing-library/react";
import { OrderStatus } from "./order-status";

describe("Order Status", () => {
  it("should display the correct text based on status", () => {
    let wrapper = render(<OrderStatus status="pending" />);

    // wrapper.debug();
    const statusText = wrapper.getByText("Pendente");

    expect(statusText).toBeInTheDocument();
  });
});
