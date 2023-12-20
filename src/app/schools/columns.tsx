"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export interface School {
  id: string;
  name: string;
  specialization: string;
  location: string;
}

export const columns: ColumnDef<School>[] = [
  {
    accessorKey: "name",
    header: () => <div className="">Name</div>,
  },
  {
    accessorKey: "specialization",
    header: () => <div className="">Specialization</div>,
  },
  {
    accessorKey: "location",
    header: () => <div className="">Location</div>,
  },
];
