import { render, waitFor } from "@testing-library/react";
import React from "react";
import { APIFails, APISucceeds } from "../../../mocks/handler";
import { server } from "../../../mocks/server";
import ProductList from "../ProductList";

describe("<ProductList />", () => {
  beforeAll(() =>
    server.listen({
      onUnhandledRequest: "error",
    })
  );

  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  describe("when api succeeds", () => {
    beforeEach(() => {
      server.use(APISucceeds);
    });
    it("renders", async () => {
      const { queryByTestId, getByTestId, getAllByTestId } = render(
        <ProductList />
      );
      expect(queryByTestId("products-skeleton")).toBeTruthy();
      await waitFor(() => getByTestId("product-card"));
      expect(queryByTestId("products-skeleton")).toBeFalsy();

      expect(getAllByTestId("product-card").length).toBe(1);
    });
  });

  describe("when api fails", () => {
    beforeEach(() => {
      server.use(APIFails);
    });
    it("renders <ErrorBox />", async () => {
      const { queryByTestId, getByTestId } = render(<ProductList />);
      expect(queryByTestId("products-skeleton")).toBeTruthy();
      await waitFor(() => getByTestId("error-box"));
      expect(queryByTestId("products-skeleton")).toBeFalsy();
    });
  });
});
