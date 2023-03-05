import mongoose from "mongoose";

const schema: mongoose.Schema = new mongoose.Schema(
  {
    id: { type: String, unique: true },
    createdAt: { type: Date, required: true },
    paymentDue: { type: Date, required: true },
    description: String,
    paymentTerms: { type: Number, required: true },
    clientName: { type: String, required: true },
    clientEmail: String,
    status: { type: String, required: true },
    senderAddress: {
      street: String,
      city: String,
      postCode: String,
      country: String,
    },
    clientAddress: {
      street: String,
      city: String,
      postCode: String,
      country: String,
    },
    items: [
      {
        name: String,
        quantity: Number,
        price: Number,
        total: Number,
      },
    ],
    total: Number,
  },
  {
    timestamps: true,
    strict: true,
    strictQuery: true,
  }
);

export default mongoose.model("Invoice", schema);
