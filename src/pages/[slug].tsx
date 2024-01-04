import DefaultLayout from "@/components/layout/DefaultLayout";
import { NextPage } from "next";
import { FC } from "react";

interface Props {
  name?: string;
  desc?: string;
}

const SchoolPage: NextPage<Props> = ({ name, desc }) => {
  console.log(name);
  return (
    <DefaultLayout name={name} desc={desc}>
      SchoolPage
    </DefaultLayout>
  );
};

export default SchoolPage;

// setup up get StaticProps
