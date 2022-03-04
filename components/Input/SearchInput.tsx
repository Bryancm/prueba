import type { FC } from "react";
import { SearchIcon } from "@heroicons/react/outline";

const SearchInput: FC = () => {
  return (
    <div className="m-4 w-5/6 md:w-1/2 relative">
      <SearchIcon className="absolute top-3 left-3 h-6 w-6 text-yellow-500" />
      <input
        placeholder="Search"
        className="bg-transparent h-12 rounded border shadow-lg p-4 pl-11 w-full transition ease-out duration-200 hover:shadow-md focus:outline-none focus:shadow-lg focus:border-yellow-500"
      />
    </div>
  );
};

export default SearchInput;
