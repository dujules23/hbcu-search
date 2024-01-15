import Link from "next/link";
import { FC, useState } from "react";
import { APP_NAME } from "../AppHead";
import { HiLightBulb } from "react-icons/hi";

interface Props {}

const Navbar: FC<Props> = (): JSX.Element => {
  const [isClicked, setIsClicked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const openForm = () => {
    if (!isClicked) {
      setIsClicked(false);
    }
    setIsClicked(true);
  };

  return (
    <>
      <div className="flex items-center justify-between p-6 card-foreground bg-nav-primary text-light-primary">
        {/* Title */}
        <Link href="/">
          <div className="flex items-center space-x-2">
            <span>{APP_NAME}</span>
          </div>
        </Link>
        <div className="flex items-center space-x-4">
          {/* Dark Mode Button */}
          <div className="flex items-center space-x-5 hover:text-yellow-400 transition ease-in-out">
            <button>
              <HiLightBulb size={34} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
