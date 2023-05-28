import { ComponentPropsWithoutRef, FC, useContext } from "react";
import { Link } from "react-router-dom";

import { Container } from "@components/UI";
import { ThemeMode } from "@context/ThemeContext";
import "./style.scss";

export const Header: FC<ComponentPropsWithoutRef<"header">> = ({ onClick }) => {
  const mode = useContext(ThemeMode);

  return (
    <header className="header">
      <Container>
        <h1>
          <Link to="/">Where in the world?</Link>
        </h1>
        <div className="theme-switcher">
          <button type="button" onClick={onClick}></button>
          {mode[0].toLocaleUpperCase() + mode.slice(1)} Mode
        </div>
      </Container>
    </header>
  );
};
