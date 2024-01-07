// function that trims SchoolText
export const trimSchoolText = (text: string) => {
  const newString = text
    .split(",")
    // maps through string and sets to lowercase, replaces all spaces with hyphen
    .map((item: string) => item.trim().toLocaleLowerCase().replace(/ /g, "-"));

  return newString;
};
