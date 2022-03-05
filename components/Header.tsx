import type { FC } from "react";
import { GlobeIcon } from "@heroicons/react/outline";
import Link from "next/link";

const Header: FC = () => {
  return (
    <div className="flex flex-row justify-between items-center">
      <Link href="/">
        <h1 className="text-2xl text-gray-800 font-bold cursor-pointer">Prueba</h1>
      </Link>
      <Link href="/">
        <button className="text-gray-800">
          <GlobeIcon className="w-8 h-8" />
        </button>
      </Link>
    </div>
  );
};

export default Header;
