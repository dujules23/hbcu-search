import { NextApiHandler } from "next";
import dbConnect from "../../../../database/dbConnect";
import School from "../../../../database/schoolSchema";

export const config = {
  api: { bodyParser: false },
};

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

    console.log(newSchool);

    // response with data object
    res.status(200).json({ newSchool });
    // backend console log for verification of data retrieval
    console.log("Data created successfully");
  } catch (error) {
    res.status(500).json({ error });
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
    res.status(404).json({ error: error });
  }
};

export default handler;
