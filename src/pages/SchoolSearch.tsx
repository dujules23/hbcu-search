import { GetServerSideProps, NextPage } from "next";
import dbConnect from "../../lib/dbConnect";
import School from "../../models/schoolSchema";
import DefaultLayout from "@/components/layout/DefaultLayout";
import PageContent from "@/components/common/PageContent";
import { SchoolDetail } from "../../utils/types";
import { FC, Suspense, useEffect, useState } from "react";
import { DataTable } from "@/app/schools/DataTable";
import { columns } from "../app/schools/columns";
import SearchBar from "@/components/search/SearchBar";
import { SearchLoadingSkeleton } from "@/components/common/SearchLoadingSkeleton";

interface Props {
  schools: SchoolDetail[];
}

const SchoolSearch: NextPage<Props> = ({ schools }): JSX.Element => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay to demonstrate client-side hydration
    const timer = setTimeout(() => setLoading(false), 500); // Adjust time as needed
    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  if (loading) {
    return (
      <DefaultLayout>
        <SearchBar />
        <SearchLoadingSkeleton />
      </DefaultLayout>
    );
  }

  return (
    <DefaultLayout>
      <SearchBar />
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

export default SchoolSearch;
