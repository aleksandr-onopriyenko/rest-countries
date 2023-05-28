import { FC } from "react";

import { DetailsCountry } from "@types";

import { DetailsBorders } from "./DetailsBorders";
import { DetailsCurrencies } from "./DetailsCurrencies";
import { DetailsDescription } from "./DetailsDescription";

interface Props {
  countryContent: DetailsCountry;
}

export const DetailsContent: FC<Props> = ({ countryContent }) => {
  const { image, currencies, name, borders, ...description } = countryContent;

  return (
    <div className="details-content">
      <div className="details-content-image">
        <img src={image} alt="flag image" />
      </div>
      <div className="details-content-description">
        <h1>{name}</h1>
        <div className="details-content-description-list">
          <DetailsDescription description={description} />
          <DetailsCurrencies currencies={currencies} />
        </div>
        <div className="details-content-description-borders">
          <DetailsBorders borders={borders} />
        </div>
      </div>
    </div>
  );
};
