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
        <SearchBar />
        <div className="max-w-7xl mx-auto">{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default DefaultLayout;
