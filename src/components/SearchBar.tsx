import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FC } from "react";

interface Props {}

const SearchBar: FC<Props> = (props): JSX.Element => {
  return (
    <div className="flex items-center justify-center p-7 mt-3">
      <div className="pr-2">
        <Input className="w-72 rounded" placeholder="Search..." />
      </div>
      <div>
        <Button className="w-32 rounded" variant="outline">
          Search
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;
