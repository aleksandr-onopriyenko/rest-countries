import { FC } from "react";

import "./style.scss";

export const Loader: FC = () => {
  return (
    <div className="overlay">
      <div className="overlay__inner">
        <div className="overlay__content">
          <span className="spinner"></span>
        </div>
      </div>
    </div>
  );
};
