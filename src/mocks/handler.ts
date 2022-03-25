import { rest } from "msw";
import { createProductFixture } from "../factories/product.factory";

export const APISucceeds = rest.get(
  process.env.REACT_APP_API_URL!,
  (_, response, context) => {
    return response(
      context.status(200),
      context.json([createProductFixture()])
    );
  }
);
export const APIFails = rest.get(
  process.env.REACT_APP_API_URL!,
  (_, response, context) => {
    return response(context.status(400));
  }
);
