import { ChangeEventHandler, FC, useEffect, useState } from "react";
import { Button } from "../ui/button";
import axios from "axios";

interface Props {
  initialValue?: string;
  onChange(file: File): void;
}

const ImageSelect: FC<Props> = ({ initialValue, onChange }) => {
  const [uploading, setUploading] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [images, setImages] = useState<{ src: string }[]>([]);

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = target;
    if (!files) return;

    const file = files[0];

    setSelectedImage(URL.createObjectURL(file));
    onChange(file);
  };

  // TODO: need to implement upload to cloudinary
  const handleImageUpload = async (image: File) => {
    setUploading(true);
    const formData = new FormData();
    formData.append("image", image);
    const { data } = await axios.post("/api/image", formData);
    setUploading(false);
    setImages([data, ...images]);
  };

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
        <label htmlFor="image">
          {selectedImage ? (
            <div className="flex flex-col">
              <img src={selectedImage} alt="" />
              <Button
                onClick={() => console.log("this works")}
                className="hover:bg-nav-primary hover:text-light-primary"
              >
                Upload Image
              </Button>
            </div>
          ) : (
            <div className="flex flex-col border w-full h-1/2 p-8 justify-center items-center cursor-pointer">
              <h3>Add Image</h3>
            </div>
          )}
        </label>
      </div>
    </>
  );
};

export default ImageSelect;
