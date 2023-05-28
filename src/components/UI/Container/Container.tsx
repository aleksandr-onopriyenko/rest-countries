import { ComponentPropsWithoutRef, FC } from "react";

import "./style.scss";

export const Container: FC<ComponentPropsWithoutRef<"div">> = ({
  children,
}) => {
  return <div className="container">{children}</div>;
};
