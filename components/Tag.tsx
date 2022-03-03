import type { FC } from "react";

interface Props {
  text: string;
}

const Tag: FC<Props> = ({ text }) => {
  return <p className=" bg-slate-200 mr-2 mb-2 px-2 py-1 rounded text-gray-700 text-sm">{text}</p>;
};

export default Tag;
