import express from "express";
import {
  getProductById,
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/products.js";

const routes = express.Router();

routes.get("/", getProducts);
routes.get("/:productId", getProductById);
routes.post("/", createProduct);
routes.patch("/:productId", updateProduct);
routes.delete("/:productId", deleteProduct);

export default routes;
