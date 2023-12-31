const mongoose = require("mongoose");
const cheerio = require("cheerio");
const request = require("request-promise");
const dotenv = require("dotenv").config();
const School = require("./models/SchoolModel");

async function connectToMongoDB() {
  await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });
  console.log("Connected to MongoDB!");
}

async function schoolScraper() {
  const html = await request.get(process.env.DATA_SITE);
  const $ = await cheerio.load(html);
  const schools = $("tr");

  schools.each(async (i, element) => {
    // console.log($($(element).find("td")[0]).text());
    try {
      // first index of the table is headers, this removes them
      if (i === 0) return true;
      // find all tds
      const tds = $(element).find("td");
      // finds school names
      const name = $(tds[0]).text();
      // finds locations
      const location = $(tds[1]).text();
      // finds all links
      const link = $(tds[2]).text();
      // creates a new school document for each school
      const school = new School({
        name: name,
        location: location,
        link: link,
      });
      // saves to MongoDB
      await school.save();
      console.log("Data has been saved to MongoDB!");
    } catch (error) {
      console.log("Could not save data.", error);
    }
  });
}

async function main() {
  await connectToMongoDB();
  await schoolScraper();
}

main();
