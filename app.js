import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import productRoutes from "./routes/product.js";
import categoryRoutes from "./routes/category.js";
import { errors } from "celebrate";
//import { loadEnvFile } from "node:process";
//loadEnvFile();
const PORT = process.env.PORT ?? 3000;
const DBPASSWORD = process.env.DB_PASSWORD;

const app = express();
app.use(cors());
app.use(express.json());

// routes
app.use("/product", productRoutes);
app.use("/category", categoryRoutes);
app.use(errors());

mongoose.connect(
  `mongodb+srv://angelica:${DBPASSWORD}@cluster0.wmzxtad.mongodb.net/?appName=Cluster0`,
);

app.listen(PORT, function () {
  console.log(`Servidor encendido en el puerto ${PORT}`);
  console.log(
    `mongodb+srv://angelica:${DBPASSWORD}@cluster0.wmzxtad.mongodb.net/?appName=Cluster0`,
  );
});
