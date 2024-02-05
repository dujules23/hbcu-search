import formidable from "formidable";
import { NextApiRequest } from "next";

interface FormidablePromise<T> {
  files: { [key: string]: formidable.File };
  body: T;
}

export const readFile = async <T extends object>(
  req: NextApiRequest
): Promise<FormidablePromise<T>> => {
  const form = formidable();
  const [fields, files] = await form.parse(req);

  // Initialize result with empty objects for body and files
  const result: FormidablePromise<T> = {
    body: {} as T,
    files: {} as { [key: string]: formidable.File },
  };

  for (let key in fields) {
    if (fields.hasOwnProperty(key)) {
      // Use type assertion to ensure type safety
      (result.body as any)[key] = (fields as any)[key]?.[0];
    }
  }

  for (let key in files) {
    if (files.hasOwnProperty(key)) {
      const file = files[key]?.[0];
      // Assign file only if it's defined
      if (file) {
        result.files[key] = file;
      }
    }
  }

  return result;
};
