import { FC, useState } from "react";
import { Outlet } from "react-router-dom";

import { Header } from "@components/UI";
import { ThemeMode } from "@context/ThemeContext";

export const App: FC = () => {
  const [mode, setState] = useState("light");

  const handleThemeMode = () => {
    setState((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeMode.Provider value={mode}>
      <div className={`theme theme-${mode}`}>
        <Header onClick={handleThemeMode} />
        <main>
          <Outlet />
        </main>
      </div>
    </ThemeMode.Provider>
  );
};
