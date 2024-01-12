import { Inter } from "next/font/google";
import { DataTable } from "../app/schools/DataTable";
import { columns } from "../app/schools/columns";
import { GetServerSideProps, NextPage } from "next";
import dbConnect from "../../lib/dbConnect";
import School from "../../models/schoolSchema";
import DefaultLayout from "@/components/layout/DefaultLayout";
import PageContent from "@/components/common/PageContent";
import { SchoolDetail } from "../../utils/types";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  schools: SchoolDetail[];
};

const Home: NextPage<Props> = ({ schools }) => {
  return (
    <DefaultLayout>
      <DataTable columns={columns} data={schools} />
    </DefaultLayout>
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
