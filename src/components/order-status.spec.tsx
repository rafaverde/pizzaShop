import { render } from "@testing-library/react";
import { OrderStatus } from "./order-status";

describe("Order Status", () => {
  it("should display the correct text and status color whend order is pending", () => {
    /* Pending */
    let wrapper = render(<OrderStatus status="pending" />);

    // wrapper.debug();
    let statusText = wrapper.getByText("Pendente");
    // console.log(statusText.outerHTML);

    let badgeElement = wrapper.getByTestId("badge");
    // console.log(badgeElement.outerHTML);

    expect(statusText).toBeInTheDocument();
    expect(badgeElement).toHaveClass("bg-slate-400");
  });

  it("should display the correct text and status color whend order is canceled", () => {
    /* Pending */
    let wrapper = render(<OrderStatus status="canceled" />);

    // wrapper.debug();
    let statusText = wrapper.getByText("Cancelado");
    // console.log(statusText.outerHTML);

    let badgeElement = wrapper.getByTestId("badge");
    // console.log(badgeElement.outerHTML);

    expect(statusText).toBeInTheDocument();
    expect(badgeElement).toHaveClass("bg-rose-500");
  });

  it("should display the correct text and status color whend order is processing", () => {
    /* Pending */
    let wrapper = render(<OrderStatus status="processing" />);

    // wrapper.debug();
    let statusText = wrapper.getByText("Em preparo");
    // console.log(statusText.outerHTML);

    let badgeElement = wrapper.getByTestId("badge");
    // console.log(badgeElement.outerHTML);

    expect(statusText).toBeInTheDocument();
    expect(badgeElement).toHaveClass("bg-amber-500");
  });

  it("should display the correct text and status color whend order is delivering", () => {
    /* Pending */
    let wrapper = render(<OrderStatus status="delivering" />);

    // wrapper.debug();
    let statusText = wrapper.getByText("Em entrega");
    // console.log(statusText.outerHTML);

    let badgeElement = wrapper.getByTestId("badge");
    // console.log(badgeElement.outerHTML);

    expect(statusText).toBeInTheDocument();
    expect(badgeElement).toHaveClass("bg-amber-500");
  });

  it("should display the correct text and status color whend order is delivered", () => {
    /* Pending */
    let wrapper = render(<OrderStatus status="delivered" />);

    // wrapper.debug();
    let statusText = wrapper.getByText("Entregue");
    // console.log(statusText.outerHTML);

    let badgeElement = wrapper.getByTestId("badge");
    // console.log(badgeElement.outerHTML);

    expect(statusText).toBeInTheDocument();
    expect(badgeElement).toHaveClass("bg-emerald-500");
  });
});
