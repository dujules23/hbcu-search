import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../../models/dbConnect";
import School from "../../../../models/schoolSchema";

// get function that creates new school data/document
const addSchool = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // connects to database
    await dbConnect();
    // finds collection of schools
    const newSchool = await School.create(req.body);

    // response with data object
    res.status(200).json({ newSchool });
    // backend console log for verification of data retrieval
    console.log("Data created successfully");
  } catch (error) {
    res.status(500).json({ error });
  }
};

export default addSchool;
