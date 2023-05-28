import { FC } from "react";
import { useParams } from "react-router-dom";

import { useGetDetailsQuery as useDetails } from "@store";
import { Container, Loader, ErrorPage } from "@components/UI";
import { useCountryBorders as useBorders } from "@hooks/useCountryBorders";

import { DetailsActions } from "./DetailsActions";
import { DetailsContent } from "./DetailsContent";
import "./style.scss";

export const Details: FC = () => {
  const { country } = useParams();
  const { data, isFetching: isCountryFetching, isError } = useDetails(country);
  const { borders, isFetching } = useBorders(isCountryFetching, data);

  if ((!data || isFetching) && !isError) {
    return <Loader />;
  }

  if (isError) {
    return (
      <Container>
        <div className="details">
          <DetailsActions />
          <ErrorPage />
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <div className="details">
        <DetailsActions />
        <DetailsContent countryContent={{ ...data, borders }} />
      </div>
    </Container>
  );
};
