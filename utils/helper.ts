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
