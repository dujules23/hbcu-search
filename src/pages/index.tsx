import { Inter } from "next/font/google";
import SearchBar from "../../components/SearchBar";
import { DataTable } from "../app/schools/DataTable";
import { Payment, columns } from "../app/schools/columns";
import Navbar from "../../components/common/nav/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // const data = getData();
  // data.then((res) => {
  //   console.log(res);
  // });

  // console.log(getData());

  return (
    <>
      <Navbar />
      <SearchBar />
      <DataTable columns={columns} data={[]} />
    </>
  );
}
