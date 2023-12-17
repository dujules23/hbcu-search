import { Inter } from "next/font/google";
import SearchBar from "../../src/components/SearchBar";
import { DataTable } from "../app/schools/DataTable";
import { School, columns } from "../app/schools/columns";
import Navbar from "../components/common/nav/Navbar";
import { useEffect } from "react";
import axios from "axios";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const data = [
    {
      id: 1,
      institution: "Benedict College",
      specialization: "Technology",
      location: "Columbia, SC",
    },
  ];

  const getSchools = async () => {
    try {
      const { data } = await axios("/api/school/");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSchools();
  }, []);

  return (
    <>
      <Navbar />
      <SearchBar />
      <DataTable columns={columns} data={data} />
    </>
  );
}
