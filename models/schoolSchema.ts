import { Schema, model, models, Model, ObjectId } from "mongoose";

export interface SchoolModelSchema {
  _id: ObjectId;
  name: string;
  link: string;
  location: string;
  specialization: string;
  description: string;
  image: string;
  slug: string;
  type: string;
}

const SchoolSchema = new Schema<SchoolModelSchema>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    link: {
      type: String,
      required: true,
      unique: false,
    },
    location: {
      type: String,
      required: true,
    },
    specialization: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: false,
      unique: false,
    },
    image: {
      type: String,
      required: false,
      unique: false,
    },
    slug: {
      type: String,
      required: false,
      unique: true,
    },
    type: {
      type: String,
      required: false,
      unique: false,
    },
  },
  {
    timestamps: true,
  }
);

// Prevents duplicate entries from going to MongoDB
const School = models?.School || model("School", SchoolSchema);

export default School as Model<SchoolModelSchema>;
