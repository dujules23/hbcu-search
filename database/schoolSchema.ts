import { Schema, model, models } from "mongoose";

const schoolSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  link: {
    type: String,
    required: true,
    unique: true,
  },
  location: {
    type: String,
    required: true,
  },
  specialization: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: String,
    required: true,
    unique: true,
  },
});

// Prevents duplicate entries from going to MongoDB
const School = models?.School || model("schoolSchema", schoolSchema);

export default School;
