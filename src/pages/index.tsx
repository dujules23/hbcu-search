import { Inter } from "next/font/google";
import SearchBar from "../../src/components/SearchBar";
import { DataTable } from "../app/schools/DataTable";
import { columns } from "../app/schools/columns";
import Navbar from "../components/common/nav/Navbar";
import { useEffect } from "react";
import axios from "axios";
import { GetServerSideProps, NextPage } from "next";
import dbConnect from "../../lib/dbConnect";
import School from "../../database/schoolSchema";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  schools: (typeof School)[];
};

const Home: NextPage<Props> = ({ schools }) => {
  console.log(schools);
  // const data = [
  //   {
  //     id: 1,
  //     institution: "Benedict College",
  //     specialization: "Technology",
  //     location: "Columbia, SC",
  //   },
  // ];

  // const getSchools = async () => {
  //   try {
  //     const { data } = await axios("/api/school/");
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getSchools();
  // }, []);

  return (
    <>
      {/* <div>
        {schools.map((school: ReactNode) => {
          school.name;
        })}
      </div> */}
      <Navbar />
      <SearchBar />
      <DataTable columns={columns} data={schools} />
    </>
  );
};

/* Retrieves school(s) data from mongodb database */
export const getServerSideProps: GetServerSideProps<Props> = async () => {
  try {
    await dbConnect();

    /* find all the data in our database */
    const result = await School.find({});
    console.log("Result:", result);

    /* Ensures all objectIds and nested objectIds are serialized as JSON data */
    const schools = result.map((doc: any) => doc);
    console.log("Schools:", schools);

    return {
      props: {
        schools: schools,
      },
    };
  } catch (error) {
    console.error("Error fetching data", error);
    return { notFound: true };
  }
};

export default Home;
