"use client";

import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import { trimSchoolText } from "../../../utils/helper";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export interface School {
  id: string;
  name: string;
  specialization: string;
  location: string;
  link: string;
}

export const columns: ColumnDef<School>[] = [
  {
    accessorKey: "name",
    header: () => <div className="font-bold underline">Name</div>,
    // this allows you to modify cell, in this instance this returns a link to a school page
    cell: ({ row }) => {
      return (
        // not using a Link tag because this is for internal links/routing, a tag with the implicit protocol works for external links.
        <Link
          className="cursor-pointer hover:text-gray-600 hover:underline transition ease-in-out"
          href={"/" + trimSchoolText(row.original.name)}
        >
          {row.original.name}
        </Link>
      );
    },
  },
  {
    accessorKey: "specialization",
    header: () => <div className="font-bold underline">Specialization</div>,
  },
  {
    accessorKey: "location",
    header: () => <div className="font-bold underline">Location</div>,
  },
];
