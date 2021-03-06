import type { FC } from "react";

interface Props {
  text: string;
}

const Tag: FC<Props> = ({ text }) => {
  return (
    <button className="bg-yellow-500 mr-2 mb-2 px-2 py-1 rounded text-slate-50 text-xs sm:text-sm transition ease-in duration-200 hover:shadow-md">
      {text}
    </button>
  );
};

export default Tag;
