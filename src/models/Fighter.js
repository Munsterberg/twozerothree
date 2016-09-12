import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const fighterSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  age: {
    type: Number,
    required: true,
    min: 1,
    max: 99,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('fighters', fighterSchema);
