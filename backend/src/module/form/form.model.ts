import mongoose, { Schema } from "mongoose";
import { TFormRequest } from "./form.interface";


const FormRequestSchema = new Schema<TFormRequest>({
  userId: {
    type:Schema.Types.ObjectId,
    ref: "user", 
    required: true,
  },
  cost: {
    type: Number,
    required: true,
  },
  formName: {
    type: String,
    required: true,
    trim: true,
  },
  proccess: {
    type: String,
    required: true,
    enum: ["pending", "finished"],
    default: "pending",
  },
  formDetails: {
    type: Object,
    required: true,
    default: {},
  },
}, { timestamps: true });

export const formRequest = mongoose.model<TFormRequest>("FormRequest", FormRequestSchema);


