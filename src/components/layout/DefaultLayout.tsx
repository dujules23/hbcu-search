import { FC, ReactNode } from "react";
import AppHead from "../common/AppHead";
import Navbar from "../common/nav/Navbar";
import SearchBar from "../search/SearchBar";
import Footer from "../Footer";

interface Props {
  name?: string;
  desc?: string;
  children?: ReactNode;
}

const DefaultLayout: FC<Props> = ({ name, desc, children }): JSX.Element => {
  return (
    <>
      <AppHead title={name} desc={desc} />
      <div className="min-h-screen transition dark:bg-dark-primary dark:text-light-primary bg-light-primary text-dark-primary">
        <Navbar />
        <div className="max-w-xl lg:max-w-6xl mx-auto">{children}</div>
      </div>
    </>
  );
};

export default DefaultLayout;
