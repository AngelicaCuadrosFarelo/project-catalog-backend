import Category from "../models/category.js";
import {
  ok,
  internalServerError,
  notFound,
  created,
  badRequest,
} from "../utils/sendResponse.js";

export async function getCategories(req, res) {
  try {
    const categories = await Category.find({});
    ok(res, { data: categories });
  } catch {
    internalServerError(res);
  }
}

export async function createCategory(req, res) {
  try {
    const { name, description } = req.body;

    const newCategory = await Category.create({
      name,
      description,
    });
    return created(res, newCategory);
  } catch (err) {
    return badRequest(res, "No se creó la categoria");
  }
}
