import { ChangeEvent, FC, useState } from "react";

import "./style.scss";

interface Props {
  onChange: (value: string) => void;
}

export const Input: FC<Props> = ({ onChange }) => {
  const [value, setValue] = useState("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
    onChange(e.currentTarget.value);
  };

  return (
    <div className="input-wrapper">
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Enter country..."
      />
    </div>
  );
};
