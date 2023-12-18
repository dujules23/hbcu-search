import { Schema, model, models, Model, ObjectId } from "mongoose";

export interface SchoolModelSchema {
  _id: ObjectId;
  name: string;
  link: string;
  location: string;
  specialization: string;
  description: string;
  image: string;
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
      required: false,
      unique: false,
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
      required: false,
      unique: false,
    },
    image: {
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
const School = models?.School || model("schoolSchema", SchoolSchema);

export default School as Model<SchoolModelSchema>;
