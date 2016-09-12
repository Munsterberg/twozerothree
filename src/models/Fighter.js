import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const fighterSchema = new Schema({
  name: String,
  age: Number,
});

export default mongoose.model('fighters', fighterSchema);
