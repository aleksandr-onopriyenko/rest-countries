import { FC, useState } from "react";
import Select, { ActionMeta } from "react-select";

import "./style.scss";
import { regionStyle } from "./regionStyle";
import { regionSelectOptions } from "./regionSelectOptions";

type Option = {
  label: string;
  value: string;
};

interface Props {
  onChange: (region: string) => void;
}

export const RegionSelect: FC<Props> = ({ onChange }) => {
  const [value, setValue] = useState<Option>(regionSelectOptions[0]);

  const handleChange = (
    option: unknown,
    _actionMeta: ActionMeta<unknown>
  ): void => {
    const opt = option as Option;
    setValue(() => opt);

    if (opt && opt.value) {
      onChange(opt.value);
    }
  };

  return (
    <div>
      <Select
        value={value}
        styles={regionStyle}
        options={regionSelectOptions}
        onChange={handleChange}
        className="select"
        placeholder="Filter by region"
      />
    </div>
  );
};
