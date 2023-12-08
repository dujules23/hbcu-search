"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type School = {
  id: string;
  institution: string;
  specialization: string;
  location: string;
};

export const columns: ColumnDef<School>[] = [
  {
    accessorKey: "institution",
    header: () => <div className="">Institution</div>,
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
