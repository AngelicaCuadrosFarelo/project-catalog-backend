import Product from "../models/product.js";
import Category from "../models/category.js";
import {
  ok,
  internalServerError,
  notFound,
  created,
  badRequest,
} from "../utils/sendResponse.js";

export async function getProducts(req, res) {
  try {
    const { limit, page, search, category } = req.query;
    const filters = { active: true };
    if (search && search != "") {
      filters.name = { $regex: search, $options: "i" };
    }
    if (category && category != "") {
      const currentCategory = await Category.findOne({
        name: { $regex: `^${category}$`, $options: "i" },
      });
      if (currentCategory) {
        filters.category = currentCategory._id;
      } else {
        filters.category = null;
      }
    }

    const productos = await Product.find(filters)
      .populate("category", "name")
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .sort({ createdAt: -1 });

    const total = await Product.countDocuments(filters);

    return ok(res, {
      data: productos,
      total,
      currentPage: Number(page),
      limit: Number(limit),
      totalPages: Math.ceil(total / limit),
    });
  } catch (err) {
    console.error(err);
    internalServerError(res);
  }
}
export async function getProductById(req, res) {
  try {
    const productId = req.params.productId;
    const producto = await Product.findById(productId).populate(
      "category",
      "name",
    );
    if (producto) {
      return ok(res, { data: producto });
    } else {
      return notFound(res, "Producto no encontrado");
    }
  } catch (err) {
    return notFound(res, "Producto no encontrado");
  }
}
export async function createProduct(req, res) {
  try {
    // obtener los datos
    const { name, description, price, stock, sold, image, category } = req.body;
    const currentCategory = await Category.findById(category);
    if (!category || !currentCategory) {
      return badRequest(res, "Categoria invalida");
    }
    // crear el producto con los datos
    const newProduct = await Product.create({
      name,
      description,
      price,
      stock,
      sold,
      image,
      category,
    });
    // Enviamos una respuesta
    return created(res, newProduct);
  } catch (err) {
    // mandamos el error
    return badRequest(res, "No se pudo agregar el producto");
  }
}
export async function updateProduct(req, res) {
  try {
    const id = req.params.productId;
    const { name, description, price, image } = req.body;
    const currentProduct = await Product.findById(id);
    if (!currentProduct) {
      return badRequest(res, "El producto no existe");
    }
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      {
        name,
        description,
        price,
        image,
      },
      {
        new: true,
        runValidators: true,
      },
    );
    return ok(res, { data: updatedProduct });
  } catch (err) {
    return badRequest(res, "No se ha podido actualizar el producto");
  }
}
export async function deleteProduct(req, res) {
  try {
    const id = req.params.productId;

    const product = await Product.findById(id);
    if (!product) {
      return badRequest(res, "No se encontro el producto");
    }
    const deletedProduct = await Product.findByIdAndDelete(id);

    return ok(res, { message: "Producto eliminado correctamente" });
  } catch {
    return badRequest(res, "No se ha podido eliminar el producto");
  }
}
