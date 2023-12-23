import { Inter } from "next/font/google";
import SearchBar from "../../src/components/SearchBar";
import { DataTable } from "../app/schools/DataTable";
import { columns } from "../app/schools/columns";
import Navbar from "../components/common/nav/Navbar";
import { useEffect } from "react";
import axios from "axios";
import { GetServerSideProps, NextPage } from "next";
import dbConnect from "../../lib/dbConnect";
import School from "../../models/schoolSchema";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  schools: (typeof School)[];
};

const Home: NextPage<Props> = ({ schools }) => {
  return (
    <>
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
    const result = await School.find({}).sort({ name: "asc" });

    /* Ensures all objectIds and nested objectIds are serialized as JSON data */
    const schools = result.map((doc: any) => {
      const school = JSON.parse(JSON.stringify(doc));
      return school;
    });

    return {
      props: {
        schools: schools,
      },
    };
  } catch (error) {
    return { notFound: true };
  }
};

export default Home;
