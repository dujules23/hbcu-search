import { FC, ReactNode } from "react";
import AppHead from "../common/AppHead";
import Navbar from "../common/nav/Navbar";
import SearchBar from "../SearchBar";
import Footer from "../Footer";

interface Props {
  title?: string;
  desc?: string;
  children?: ReactNode;
}

const DefaultLayout: FC<Props> = ({ title, desc, children }): JSX.Element => {
  return (
    <>
      <AppHead title={title} desc={desc} />
      <div className="min-h-screen transition">
        <Navbar />
        <SearchBar />
        <div className="max-w-7xl mx-auto">{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default DefaultLayout;
