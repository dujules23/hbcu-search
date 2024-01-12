"use client";

import * as React from "react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { GetServerSideProps, GetStaticProps, NextPage } from "next";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { trimSchoolText } from "../../../utils/helper";

type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export interface School {
  _id: string;
  name: string;
  location: string;
  specialization: string;
  link: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export const SearchDialog: React.FC<Props> = ({
  open,
  setOpen,
}): JSX.Element => {
  const [schools, setSchools] = useState<School[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios("/api/school");
      setSchools(data.data);
    };

    fetchData();
  }, []);

  return (
    <>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search for a school..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {schools.map((school) => {
            return (
              <CommandItem key={school._id}>
                <Link
                  className="hover:text-gray-700 hover:underline transition ease-in-out p-2"
                  href={"/" + trimSchoolText(school.name)}
                >
                  {school.name}
                </Link>
              </CommandItem>
            );
          })}
        </CommandList>
      </CommandDialog>
    </>
  );
};
