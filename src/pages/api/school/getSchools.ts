import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../../database/dbConnect";
import School from "../../../../database/schoolSchema";

// types for data
// type Data = {
//   name: string;
//   link: string;
//   location: string;
//   specialization: string;
//   description: string;
//   image: string;
//   errorMessage: string;
// };

// get function that grabs school data
const getSchools = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // connects to database
    await dbConnect();
    // finds collection of schools
    const schools = await School.find();
    // response with data object
    res.status(200).json({ data: schools });
    // backend console log for verification of data retrieval
    console.log("Data retrieved successfully");
  } catch (error) {
    console.log(error);
    res.status(404).json({ error: error });
  }
};

export default getSchools;
