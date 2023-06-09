import mongoose, { Schema, Document } from "mongoose";

export interface IProduct extends Document {
  name: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  price: string;
  color: string;
}

const ProductSchema: Schema = new mongoose.Schema({
  // Define your schema fields here
  name: { type: String, required: true },
  href: { type: String, required: true },
  imageSrc: { type: String, required: true },
  imageAlt: { type: String, required: true },
  price: { type: String, required: true },
  color: { type: String, required: true },
});

export default mongoose.models.Product ||
  mongoose.model<IProduct>("Product", ProductSchema);
