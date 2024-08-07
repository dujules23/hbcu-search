const axios = require("axios");
const mongoose = require("mongoose");
require("dotenv").config();
const School = require("./models/SchoolModel");

const apiKey = process.env.GOOGLE_API_KEY;
const cseId = process.env.CSE_ID;

async function connectToMongoDB() {
  await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });
  console.log("Connected to MongoDB!");
}
const school = new School({
  name: "name",
  location: "location",
  link: "link",
  slug: "slug",
  type: "type",
  image: "image",
});

const fetchImages = async (hbcuName) => {
  const searchUrl = `https://www.googleapis.com/customsearch/v1?q=${hbcuName}+campus&cx=${cseId}&key=${apiKey}&searchType=image`;
  console.log(searchUrl);
  const response = await axios.get(searchUrl);
  return response.data.items.map((item) => item.link);
};

const scrapeAndStoreImages = async () => {
  const hbcus = await school.find();

  for (const hbcu of hbcus) {
    try {
      const images = await fetchImages(hbcu.name);
      hbcu.image = images;
      console.log(`This is your image ${hbcu.image} `);
      console.log(`Saved images for ${hbcu.name}`);
    } catch (error) {
      console.error(`Error fetching images for ${hbcu.name}:`, error);
    }
  }

  mongoose.connection.close();
};

// const main = () => {
//   connectToMongoDB();
//   console.log(scrapeAndStoreImages());
//   // scrapeAndStoreImages();
// };

connectToMongoDB();
scrapeAndStoreImages();

// main();
