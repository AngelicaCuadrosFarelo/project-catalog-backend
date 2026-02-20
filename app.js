import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import productRoutes from "./routes/product.js";
import categoryRoutes from "./routes/category.js";
const PORT = process.env.PORT ?? 3000;

const app = express();
app.use(cors());
app.use(express.json());

// routes
app.use("/product", productRoutes);
app.use("/category", categoryRoutes);

mongoose.connect("mongodb://localhost:27017/catalogdb");

app.listen(PORT, function () {
  console.log(`Servidor encendido en el puerto ${PORT}`);
});
