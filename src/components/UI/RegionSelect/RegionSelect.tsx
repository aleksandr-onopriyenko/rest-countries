import { FC, useState } from "react";
import Select, { SingleValue } from "react-select";

import "./style.scss";
import { regionStyle } from "./regionStyle";
import { regionSelectOptions } from "./regionSelectOptions";

type Option = SingleValue<{
  label: string;
  value: string;
}>;

interface Props {
  onChange: (region: string) => void;
}

export const RegionSelect: FC<Props> = ({ onChange }) => {
  const [value, setValue] = useState<Option>(regionSelectOptions[0]);

  const handleChange = (option: Option) => {
    setValue(() => option);

    if (option && option.value) {
      onChange(option.value);
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
