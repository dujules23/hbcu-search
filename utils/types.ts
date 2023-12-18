export interface SchoolData {
  schoolName?: string;
  link?: string;
  location?: string;
  specialization?: string;
  description?: string;
  image?: string;
}

export interface SchoolInput {
  name?: string;
  label?: string;
  placeholder?: string;
}

export interface IncomingSchool {
  school?: string;
  specialization?: string;
  location?: string;
}
