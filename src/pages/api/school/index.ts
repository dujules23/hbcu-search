import { NextApiHandler } from "next";
import dbConnect from "../../../../lib/dbConnect";
import School from "../../../../database/schoolSchema";

const handler: NextApiHandler = async (req, res) => {
  const { method } = req;
  switch (method) {
    case "GET":
      return getSchools(req, res);
    case "POST":
      return addSchool(req, res);
    default:
      break;
  }
};

// post function
const addSchool: NextApiHandler = async (req, res) => {
  try {
    // connects to database
    await dbConnect();
    // finds collection of schools
    const newSchool = await School.create(req.body);

    // response with data object
    res.status(201).json({ success: true, data: newSchool });
    // backend console log for verification of data retrieval
    console.log("Data created successfully");
  } catch (error) {
    res.status(500).json({ success: false, data: error });
  }
};

// get function
const getSchools: NextApiHandler = async (req, res) => {
  // TODO
  // needs types for incoming school ( put in types.ts)
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
    res.status(404).json({ success: false, data: error });
  }
};

export default handler;
