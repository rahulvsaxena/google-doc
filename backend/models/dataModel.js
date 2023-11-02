import mongoose from 'mongoose';

const docSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    userData: {
      type: String
    }
  },
  {
    timestamps: true,
  }
);

export const Doc = mongoose.model('Documents', docSchema);

