import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    stock: { type: Number, required: true, default: 0 }, // Cantidad disponible
    sold: { type: Number, default: 0 },
    image: { type: String }, // URL de la imagen
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
    active: { type: Boolean, default: true },
  },
  { timestamps: true },
);

const Product = mongoose.model("Product", productSchema);
export default Product;
