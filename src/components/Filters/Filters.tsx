import { FC } from "react";

import { Input, RegionSelect } from "@components/UI";
import "./style.scss";

export const Filters: FC<{
  handlers: {
    input: (value: string) => void;
    select: (value: string) => void;
  };
}> = ({ handlers }) => {
  return (
    <div className="filters">
      <Input onChange={handlers.input} />
      <RegionSelect onChange={handlers.select} />
    </div>
  );
};
