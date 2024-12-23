import Link from "next/link";
import { FC } from "react";

interface Props {}

const Footer: FC<Props> = (props): JSX.Element => {
  const current_year = new Date().getFullYear();
  return (
    <div className="flex justify-center space-x-1 align-middle bottom-0 relative w-full mt-6 mb-2">
      <p>Copyright © {current_year},</p>
      <div className="content-center transform hover:scale-110 hover:-rotate-3 transition ease-in-out duration-300">
        <Link
          className="hover:bg-blue-500 rounded-lg px-1 py-1 hover:text-gray-50"
          href="https://durrell-portfolio.vercel.app/"
        >
          Durrell Jules.
        </Link>{" "}
      </div>
      <p>All Rights Reserved</p>
    </div>
  );
};

export default Footer;
