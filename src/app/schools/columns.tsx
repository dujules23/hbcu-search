"use client";

import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import { parseAddress, trimSchoolText } from "../../../utils/helper";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export interface School {
  id: string;
  name: string;
  location: string;
  type: string;
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
          className="cursor-pointer hover:underline"
          href={"/" + trimSchoolText(row.original.name)}
        >
          {row.original.name}
        </Link>
      );
    },
  },
  {
    accessorKey: "location",
    header: () => <div className="font-bold underline">Location</div>,
    cell: ({ row }) => <div>{parseAddress(row.original.location)}</div>,
  },
  {
    accessorKey: "type",
    header: () => <div className="font-bold underline">Type</div>,
  },
];
