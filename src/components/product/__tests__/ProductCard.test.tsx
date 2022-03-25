import React from "react";
import { render } from "@testing-library/react";
import ProductCard from "../ProductCard";
import { Product } from "../../../types/product";
import { createProductFixture } from "../../../factories/product.factory";

describe("<ProductCard />", () => {
  describe("for all product data", () => {
    let product: Product;
    beforeEach(() => {
      product = createProductFixture();
    });
    it("renders", () => {
      const {
        queryByAltText,
        getByAltText,
        queryByTestId,
        getByTestId,
      } = render(<ProductCard product={product} />);

      expect(queryByAltText(product.title)).toBeTruthy();
      expect(getByAltText(product.title)).toHaveAttribute(
        "src",
        product.images[0]
      );

      expect(queryByTestId("product-total-variants")).toBeTruthy();
      expect(getByTestId("product-total-variants").textContent).toBe(
        `${product.variants.length} variants`
      );

      expect(queryByTestId("product-title")).toBeTruthy();
      expect(getByTestId("product-title").textContent).toBe(product.title);

      expect(queryByTestId("product-description")).toBeTruthy();
      expect(getByTestId("product-description").textContent).toBe(
        product.description
      );
      expect(
        getByTestId("product-description").classList.contains("line-clamp-2")
      ).toBeTruthy();

      expect(queryByTestId("product-tags")).toBeTruthy();

      const renderedChips =
        queryByTestId("product-tags")?.querySelectorAll("[data-testid=chip]");
      renderedChips?.forEach((chip, index) =>
        expect(chip).toHaveTextContent(product.tags[index])
      );

    });
  });

  describe("without tags", () => {
    let product: Product;
    beforeEach(() => {
      product = createProductFixture({ tags: [] });
    });
    it("does not render tags", () => {
      const { queryByTestId } = render(<ProductCard product={product} />);

      expect(queryByTestId("product-tags")).toBeFalsy();
    });
  });

  describe("without variants", () => {
    let product: Product;
    beforeEach(() => {
      product = createProductFixture({ variants: [] });
    });
    it("does not render variants badge", () => {
      const { queryByTestId } = render(<ProductCard product={product} />);

      expect(queryByTestId("product-total-variants")).toBeFalsy();
    });
  });
});
