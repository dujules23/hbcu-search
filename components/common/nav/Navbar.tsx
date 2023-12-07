import Link from "next/link";
import { FC } from "react";
import { APP_NAME } from "../AppHead";
import { HiLightBulb } from "react-icons/hi";

interface Props {}

const Navbar: FC<Props> = (props): JSX.Element => {
  return (
    <div className="flex items-center justify-between p-6">
      {/* Title */}
      <Link href="/">
        <div className="flex items-center space-x-2">
          <span>{APP_NAME}</span>
        </div>
      </Link>

      {/* Dark Mode Button */}
      <div className="flex items-center space-x-5">
        <button>
          <HiLightBulb size={34} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
