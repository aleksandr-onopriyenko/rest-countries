import { FC } from "react";

import { CountryCard } from "@components";
import "./style.scss";

interface Props {
  countries:
    | {
        name: string;
        image: string;
        population: string;
        region: string;
        capital: string;
      }[]
    | null;
}

export const ListOfCountries: FC<Props> = ({ countries }) => {
  if (!countries) {
    return <div></div>;
  }

  return (
    <div className="countries">
      {countries.map((country) => (
        <CountryCard country={country} key={country.name} />
      ))}
    </div>
  );
};
