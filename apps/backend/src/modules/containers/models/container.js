import { Schema, model }  from 'mongoose';
import { generateQrCode } from '../middlewares/generateQrCode.js';

const containerSchema = new Schema(
  {
    containerName: {
      type: String,
      required: true,
    },
      notes: {
        type: String,
    },
      location: {
        type: String,
        required: true,
    },
      icon: {
        type: String,
    },
    tags: {
      type: [String],
      default:  [],
    },
      qrCode: {
        type: String,
        default: '',
    }
  },
  { timestamps: true },
)

containerSchema.post('save', generateQrCode)

export const Container = model('Container', containerSchema);