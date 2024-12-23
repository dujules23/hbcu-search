import Link from "next/link";
import { FC, useState } from "react";
import { APP_NAME } from "../AppHead";
import { HiLightBulb } from "react-icons/hi";
import useDarkMode from "../../../../hooks/useDarkMode";
import { Button } from "@/components/ui/button";

interface Props {}

const Navbar: FC<Props> = (): JSX.Element => {
  const { toggleTheme } = useDarkMode();

  return (
    <>
      <div className="flex items-center justify-between p-4 card-foreground bg-nav-primary text-light-primary">
        {/* Title */}
        <Link href="/">
          <div className="flex items-center space-x-2">
            <span>{APP_NAME}</span>
          </div>
        </Link>
        <div className="flex items-center space-x-4">
          {/* Admin Login Button */}
          <div className="border rounded hover:text-black hover:bg-white transition ease-in-out">
            <Button>Admin Login</Button>
          </div>

          <Link href={"https://commonblackcollegeapp.com/"}>
            {" "}
            <div className="hover:text-lime-500">Common App</div>
          </Link>

          {/* Dark Mode Button */}
          <div className="flex items-center space-x-5 hover:text-yellow-400 transition ease-in-out">
            <button onClick={toggleTheme}>
              <HiLightBulb size={34} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
