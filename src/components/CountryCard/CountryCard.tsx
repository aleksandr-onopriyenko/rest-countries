import { FC } from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

import "./style.scss";

interface Props {
  country: {
    name: string;
    image: string;
    population: string;
    region: string;
    capital: string;
  };
}

export const CountryCard: FC<Props> = ({
  country: { name, image, population, region, capital },
}) => {
  return (
    <div className="card">
      <Link to={name} className="card__link" />
      <div className="card__image">
        <LazyLoadImage src={image} alt="flag" />
      </div>
      <div className="card__description">
        <h2>{name}</h2>
        <p>
          <strong>Population: </strong>
          <span>{population}</span>
        </p>
        <p>
          <strong>Region: </strong>
          <span>{region}</span>
        </p>
        <p>
          <strong>Capital: </strong>
          <span>{capital}</span>
        </p>
      </div>
    </div>
  );
};
