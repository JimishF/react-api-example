import React from "react";
import { render } from "@testing-library/react";
import ErrorBox from "../ErrorBox";
import * as faker from "faker";

describe("<ErrorBox />", () => {
  it("renders with default title", () => {
    const { getByTestId, queryByTestId } = render(<ErrorBox />);
    
    expect(queryByTestId("error-title")).toBeTruthy();
    expect(getByTestId("error-title").textContent).toBe("Something went wrong");
    expect(queryByTestId("error-message")).toBeFalsy();
  });
  it("renders with title and message", () => {
    const title = faker.datatype.string();
    const message = faker.datatype.string();
    const { queryByTestId, getByTestId } = render(
      <ErrorBox title={title} message={message} />
    );

    expect(queryByTestId("error-title")).toBeTruthy();
    expect(getByTestId("error-title").textContent).toBe(title);
    
    expect(queryByTestId("error-message")).toBeTruthy();
    expect(getByTestId("error-message").textContent).toBe(message);
  });

});
