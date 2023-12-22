import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FC, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { SearchDialog } from "./SearchDialog";
import { SearchCheck } from "lucide-react";

interface Props {}

const SearchBar: FC<Props> = (props): JSX.Element => {
  const [open, setOpen] = useState(false);
  const openSearchDialog = () => {
    console.log("this works");
  };

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
      {/* <div>
        <Button
          className="w-32 rounded hover:bg-white hover:text-black transition ease-in-out"
          variant="outline"
        >
          Search
          <div className="pl-3">
            <IoSearch />
          </div>
        </Button>
      </div> */}
    </div>
  );
};

export default SearchBar;
