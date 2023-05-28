import { StylesConfig } from "react-select";
import { CSSObjectWithLabel } from "react-select";

export const regionStyle: StylesConfig = {
  singleValue(base: CSSObjectWithLabel) {
    return { ...base, color: "var(--color)" };
  },
  control(base: CSSObjectWithLabel) {
    return {
      ...base,
      backgroundColor: "var(--bg-elements)",
      borderColor: "var(--box-shadow)",
    };
  },
  menu(base) {
    return {
      ...base,
      zIndex: 9999,
      background: "var(--bg-elements)",
      "& > div > div": {
        background: "inherit",
        color: "inherit",
      },
      "& > div > div:hover": {
        backgroundColor: "var(--box-shadow)",
      },
    };
  },
};
