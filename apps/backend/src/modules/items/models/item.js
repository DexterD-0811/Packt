import { Schema, model } from 'mongoose';

const itemSchema = new Schema(
  {
    itemName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    quantity: {
      type: Number,
      required: true,
      default: 1,
    },
    container: {
      type: Schema.Types.ObjectId,
      ref: 'Container',
    },
    containerName: {
      type: String,
      default: '',
    },
    image: {
      type: String,
      default: '',
    },
  },
  { timestamps: true },
)

export const Item = model('Item', itemSchema);