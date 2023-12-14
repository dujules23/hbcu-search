import Link from "next/link";
import { FC, useState } from "react";
import { APP_NAME } from "../AppHead";
import { HiLightBulb } from "react-icons/hi";
import { AddSchoolForm } from "../../../src/app/schools/AddSchoolForm";

interface Props {}

const Navbar: FC<Props> = (props): JSX.Element => {
  const [isClicked, setIsClicked] = useState(false);

  const openForm = () => {
    if (!isClicked) {
      setIsClicked(false);
    }
    setIsClicked(true);
  };

  return (
    <div className="flex items-center justify-between p-6">
      {/* Title */}
      <Link href="/">
        <div className="flex items-center space-x-2">
          <span>{APP_NAME}</span>
        </div>
      </Link>
      <div className="flex items-center space-x-4">
        {/* Add a School Button*/}
        <div className="border p-3 rounded hover:text-black hover:bg-white transition ease-in-out">
          <button onClick={openForm}>Add a School</button>
        </div>

        {isClicked && <AddSchoolForm setIsClicked={setIsClicked} />}

        {/* Dark Mode Button */}
        <div className="flex items-center space-x-5 hover:text-yellow-400 transition ease-in-out">
          <button>
            <HiLightBulb size={34} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
