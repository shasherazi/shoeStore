import mongoose from "mongoose";

interface IShoe {
  name: string;
  discount: number;
  price: number;
  image: string;
}

const Schema = mongoose.Schema;

const shoeSchema = new Schema<IShoe>({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  discount: { type: Number, default: 0 },
}, { timestamps: true })

const Shoe = mongoose.model<IShoe>("Shoe", shoeSchema);

export default Shoe;
