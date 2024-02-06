"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

interface Props {
  onClose: () => void;
}

const AddImageForm: FC<Props> = ({ onClose }): JSX.Element => {
  const [selectedImage, setSelectedImage] = useState<string>("");
  const formSchema = z.object({
    image: z.string().min(2, {
      message: "Must have Image",
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      image: "",
    },
  });

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = target;
    if (!files) return;

    const file = files[0];

    setSelectedImage(URL.createObjectURL(file));
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50">
      <div className="bg-white p-6 rounded-xl">
        <Form {...form}>
          <form className="flex-col space-y-4 p-4 bg-gray-500 rounded-xl">
            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="cursor-pointer">Add Image</FormLabel>
                  <FormControl>
                    {/* <Input placeholder="name" {...field} /> */}
                    <input
                      type="file"
                      hidden
                      accept="image/jpg, image/png, image/jpeg"
                      id="image"
                      onChange={handleChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
          <div className="flex justify-end mt-4">
            <button
              onClick={onClose} // Call onClose when the button is clicked
              className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
            >
              Close
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default AddImageForm;
