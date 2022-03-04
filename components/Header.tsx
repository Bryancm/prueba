import type { FC } from "react";
import { SunIcon } from "@heroicons/react/outline";

const Header: FC = () => {
  return (
    <div className="flex flex-row justify-between items-center">
      <h1 className="text-2xl text-gray-800 font-bold">Prueba</h1>
      <button className="text-gray-800">
        <SunIcon className="w-8 h-8" />
      </button>
    </div>
  );
};

export default Header;
