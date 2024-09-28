import { NextApiHandler } from "next";
import dbConnect from "../../../../lib/dbConnect";
import School from "../../../../models/schoolSchema";
import { selectedSchools } from "../../../../utils/helper";

const handler: NextApiHandler = async (req, res) => {
  const { method } = req;
  switch (method) {
    case "GET":
      return getLimitedSchools(req, res);
    default:
      break;
  }
};

const getLimitedSchools: NextApiHandler = async (req, res) => {
  try {
    const { limit } = req.query as {
      limit: string;
    };
    const schools = await selectedSchools(parseInt(limit));
    res.status(200).json({ schools: schools });
    // console.log("Data retrieved successfully");
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export default handler;
