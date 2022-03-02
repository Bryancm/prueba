import type { FC } from "react";

const SearchInput: FC = () => {
  return (
    <div className="m-4 w-1/2 relative">
      <span className="absolute top-3 left-2 text-gray-400">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </span>
      <input placeholder="Search" className=" bg-slate-50 h-12 rounded-sm border shadow p-4 pl-10 w-full" />
    </div>
  );
};

export default SearchInput;
