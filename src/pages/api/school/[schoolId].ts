import { NextApiHandler } from "next";
import School from "../../../../models/schoolSchema";
import { readFile } from "../../../../lib/utils";

export const config = {
  api: { bodyParser: false },
};

const handler: NextApiHandler = (req, res) => {
  const { method } = req;

  switch (method) {
    case "PATCH":
      return updateSchool(req, res);
    default:
      res.status(404).send("Not Found!");
  }
};

const updateSchool: NextApiHandler = async (req, res) => {
  const schoolId = req.query.schoolId as string;
  const school = await School.findById(schoolId);
  if (!school) return res.status(404).json({ error: "School not found!" });

  const { files, body } = await readFile(req);

  const { image } = body;
  school.image = image;

  await school.save();
  res.json({ school });
};

export default handler;
