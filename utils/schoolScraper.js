const mongoose = require("mongoose");
const cheerio = require("cheerio");
const request = require("request-promise");
const dbConnect = require("dbConnect");

async function main() {
  const html = await request.get(
    "https://www.thehundred-seven.org/hbculist.html"
  );
  const $ = await cheerio.load(html);
  const schools = $("p");

  schools.each((i, element) => {
    const school = $(element).text();
    console.log(school);
  });
}

main();
