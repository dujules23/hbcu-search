import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FC } from "react";
import { IoSearch } from "react-icons/io5";

interface Props {}

const SearchBar: FC<Props> = (props): JSX.Element => {
  return (
    <div className="flex items-center justify-center p-7 mt-1">
      <div className="pr-2">
        <Input className="w-72 rounded" placeholder="Search..." />
      </div>
      <div>
        <Button
          className="w-32 rounded hover:bg-white hover:text-black transition ease-in-out"
          variant="outline"
        >
          Search
          <div className="pl-3">
            <IoSearch />
          </div>
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;
