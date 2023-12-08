import { Inter } from "next/font/google";
import SearchBar from "../../components/SearchBar";
import { DataTable } from "../app/schools/DataTable";
import { School, columns } from "../app/schools/columns";
import Navbar from "../../components/common/nav/Navbar";

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

  return (
    <>
      <Navbar />
      <SearchBar />
      <DataTable columns={columns} data={data} />
    </>
  );
}
