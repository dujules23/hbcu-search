import { Inter } from "next/font/google";
import { GetServerSideProps, NextPage } from "next";
import DefaultLayout from "@/components/layout/DefaultLayout";
import PageContent from "@/components/common/PageContent";
import React from "react";
import HeroSection from "@/components/common/HeroSection";

const inter = Inter({ subsets: ["latin"] });

type Props = {};

const Home: NextPage<Props> = () => {
  return (
    <DefaultLayout>
      <HeroSection />
    </DefaultLayout>
  );
};

export default Home;
