import React from "react";
import { render } from "@testing-library/react";
import Chip from "../Chip";
import * as faker from "faker";

describe("<Chip />", () => {
  it("renders empty", () => {
    const { queryByTestId, getByTestId } = render(<Chip />);
    expect(queryByTestId("chip")).toBeTruthy();
    expect(getByTestId("chip").textContent).toBe("");
  });
  it("renders with children", () => {
    const children = faker.datatype.string();
    const { queryByTestId, getByTestId } = render(<Chip>{children}</Chip>);
    expect(queryByTestId("chip")).toBeTruthy();
    expect(getByTestId("chip").textContent).toBe(children);
  });

  it("renders with className", () => {
    const className = faker.internet.userName();
    const { queryByTestId, getByTestId } = render(<Chip className={className} />);
    expect(queryByTestId("chip")).toBeTruthy();
    expect(getByTestId("chip").classList.contains(className)).toBeTruthy();
  });
});
