import type { FC } from "react";
import { SearchIcon } from "@heroicons/react/outline";

const SearchInput: FC = () => {
  return (
    <div className="m-4 w-1/2 relative">
      <SearchIcon className="absolute top-3 left-2 h-6 w-6 text-gray-400" />
      <input placeholder="Search" className=" bg-slate-50 h-12 rounded-sm border shadow p-4 pl-10 w-full" />
    </div>
  );
};

export default SearchInput;
