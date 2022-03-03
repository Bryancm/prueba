import type { FC } from "react";
import { SearchIcon } from "@heroicons/react/outline";

const SearchInput: FC = () => {
  return (
    <div className="m-4 w-5/6 md:w-1/2 relative">
      <SearchIcon className="absolute top-3 left-3 h-6 w-6 text-gray-400" />
      <input
        placeholder="Search"
        className="bg-slate-50 h-12 rounded border shadow p-4 pl-11 w-full transition ease-out duration-200 hover:shadow-md focus:outline-none focus:shadow-lg focus:border-gray-400"
      />
    </div>
  );
};

export default SearchInput;
