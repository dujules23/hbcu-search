import dbConnect from "../lib/dbConnect";
import School, { SchoolModelSchema } from "../models/schoolSchema";
import { SchoolDetail } from "./types";

// function that trims SchoolText
export const trimSchoolText = (text: string) => {
  const newString = text
    .split(",")
    // maps through string and sets to lowercase, replaces all spaces with hyphen
    .map((item: string) => item.trim().toLocaleLowerCase().replace(/ /g, "-"));

  return newString;
};

export const selectedSchools = async (limit: number) => {
  if (!limit) throw Error("No Limit");
  await dbConnect();

  const schools = await School.find().limit(5);
  return schools;
};

interface Address {
  street: string;
  cityState: string;
  zip: string;
}

export const parseAddress = (address: string) => {
  // Make sure the address is a string.
  if (typeof address !== "string") throw "Address is not a string.";

  // Trim the address.
  address = address.trim();

  // Make an object to contain the data.
  let returned: Address = {
    street: "",
    cityState: "",
    zip: "",
  };

  // Find the comma.
  var comma = address.indexOf(",");

  // Pull out the city.
  returned.street = address.slice(0, comma);

  // Get everything after the city.
  var after = address.substring(comma + 2); // The string after the comma, +2 so that we skip the comma and the space.

  // Find the space.
  var space = after.lastIndexOf(" ");

  // Pull out the state.
  returned.cityState = after.slice(0, space);

  // Pull out the zip code.
  returned.zip = after.substring(space + 1);

  // Return the data.
  return returned.cityState;
};
