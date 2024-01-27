import { NextApiHandler } from "next";
import formidable from "formidable";
import cloudinary from "../../../lib/cloudinary";

export const config = {
  api: { bodyParser: false },
};

const handler: NextApiHandler = (req, res) => {
  const { method } = req;

  switch (method) {
    case "POST":
      return uploadNewImage(req, res);
    case "GET":
      return readAllImages(req, res);
    default:
      return res.status(404).send("Not Found!");
  }
};

const uploadNewImage: NextApiHandler = async (req, res) => {
  const form = formidable();
  form.parse(req, async (err, fields, files) => {
    if (err) return res.status(500).json({ error: err.message });

    const imageFile = files.image as formidable.File[];
    const { secure_url, url } = await cloudinary.uploader.upload(
      imageFile[0].filepath,
      {
        folder: "hbcu-database",
      }
    );
    res.json({ image: secure_url, url });
  });
};

const readAllImages: NextApiHandler = async (req, res) => {
  try {
    const { resources } = await cloudinary.api.resources({
      resource_type: "image",
      type: "upload",
      prefix: "hbcu-database",
    });

    const images = resources.map(({ secure_url }: any) => {
      return { src: secure_url };
    });

    res.json({ images });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export default handler;
