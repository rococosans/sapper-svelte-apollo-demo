import mongoose from 'mongoose'
const Schema = mongoose.Schema

const ProductSchema = new Schema(
  {
    user_id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    qty: {
      type: Number,
      default: 0,
    },
    status: {
      type: ['String'],
      enum: [
        'IN_STOCK',
        'OUT_OF_STOCK',
        'DISCONTINUED',
        'NEW_RELEASE',
        'ON_SALE',
        'SEASONAL',
        'STANDARD',
        'PREMIUM',
      ],
      default: ['STANDARD'],
    },
  },
  { timestamps: true }
)

export const Product = mongoose.model('product', ProductSchema)
