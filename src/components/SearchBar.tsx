import { Input } from "@/components/ui/input";
import { FC, useState } from "react";
import { SearchDialog } from "./SearchDialog";

interface Props {}

const SearchBar: FC<Props> = (props): JSX.Element => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center justify-center p-7 mt-1">
      <div className="pr-2 ">
        <Input
          onClick={() => setOpen(true)}
          className="w-72 rounded border-gray-700 hover:bg-gray-700 transition ease-in-out cursor-pointer"
          placeholder="Search..."
        />
      </div>
      <SearchDialog open={open} setOpen={setOpen} />
    </div>
  );
};

export default SearchBar;
