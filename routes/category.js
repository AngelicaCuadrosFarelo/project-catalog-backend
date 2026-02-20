import express from "express";
import { getCategories, createCategory } from "../controllers/categories.js";

const routes = express.Router();

routes.get("/", getCategories);
routes.post("/", createCategory);

export default routes;
