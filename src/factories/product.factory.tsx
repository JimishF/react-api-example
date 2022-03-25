import * as faker from "faker";
import { Product } from "../types/product";

export const createProductFixture = (partial: Partial<Product> = {}) => {
  return {
    id: faker.datatype.uuid(),
    title: faker.commerce.productName(),
    images: [faker.internet.avatar()],
    description: faker.commerce.productDescription(),
    price: faker.finance.amount(),
    tags: [faker.commerce.productAdjective()],
    variants: [faker.commerce.productMaterial()],
    ...partial,
  };
};
