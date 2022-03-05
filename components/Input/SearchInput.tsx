import type { ChangeEventHandler, FC } from "react";
import { SearchIcon } from "@heroicons/react/outline";

interface Props {
  value: string | number | readonly string[] | undefined;
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
}

const SearchInput: FC<Props> = ({ value, onChange }) => {
  return (
    <div className="m-4 w-full md:w-1/2 relative py-4">
      <SearchIcon className="absolute top-7 left-3 h-6 w-6 text-yellow-500" />
      <input
        aria-label="Type a name to start searching"
        value={value}
        onChange={onChange}
        placeholder="Search"
        className="bg-transparent h-12 rounded border shadow-lg p-4 pl-11 w-full transition ease-out duration-200 hover:shadow-md focus:outline-none focus:shadow-lg focus:border-yellow-500"
      />
    </div>
  );
};

export default SearchInput;
