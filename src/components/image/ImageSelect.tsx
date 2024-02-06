import { ChangeEventHandler, FC, useEffect, useState } from "react";
import { Button } from "../ui/button";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import axios from "axios";

interface Props {
  initialValue?: string;
}

const ImageSelect: FC<Props> = ({ initialValue }) => {
  const [uploading, setUploading] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [images, setImages] = useState<{ src: string }[]>([]);

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = target;
    if (!files) return;

    const file = files[0];

    setSelectedImage(URL.createObjectURL(file));
    handleImageUpload(file);
  };

  // TODO: need to implement upload to cloudinary
  const handleImageUpload = async (image: File) => {
    try {
      setUploading(true);
      const formData = new FormData();
      formData.append("image", image);
      const { data } = await axios.post("/api/image", formData);
      console.log(data);
      setUploading(false);
      setImages([data, ...images]);
      console.log("sent image");
    } catch (error) {
      console.log(error);
    }
  };

  // const handleImageUpload = async (
  //   event: React.MouseEvent<HTMLButtonElement>
  // ) => {
  //   // Inside this function, you can access the file using selectedImage state
  //   try {
  //     setUploading(true);
  //     const formData = new FormData();
  //     formData.append("image", selectedImage);
  //     const { data } = await axios.post("/api/image", formData);
  //     setUploading(false);
  //     setImages([data, ...images]);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    if (typeof initialValue === "string") setSelectedImage(initialValue);
  }, [initialValue]);

  return (
    <>
      <div>
        <input
          type="file"
          hidden
          accept="image/jpg, image/png, image/jpeg"
          id="image"
          onChange={handleChange}
        />
        {selectedImage && <div>{selectedImage}</div>}
        <label htmlFor="image">
          <div className="flex flex-col border w-full h-1/2 px-4 py-1 justify-center items-center cursor-pointer">
            <h3>Add Image</h3>
            {uploading && <AiOutlineLoading3Quarters className="" />}
          </div>
        </label>
      </div>
    </>
  );
};

export default ImageSelect;
