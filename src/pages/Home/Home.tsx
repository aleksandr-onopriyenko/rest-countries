import { FC } from "react";

import { useCountriesData } from "@hooks";
import { Loader, Container, ErrorPage } from "@components/UI";
import { Filters, ListOfCountries } from "@components";

import "./style.scss";
import reload from "@assets/images/reload.svg";

export const Home: FC = () => {
  const { countries, isLoading, setRegion, setSearchCountry, isError } =
    useCountriesData();

  const handleSelectChange = (e: string) => setRegion(() => e);
  const handleInputChange = (e: string) => setSearchCountry(e);

  if (isError && !isLoading) {
    return (
      <>
        <ErrorPage />
        <button
          onClick={() => location.reload()}
          style={{
            marginInline: "auto",
            display: "block",
            width: "48px",
            height: "48px",
            padding: "1rem",
            filter: "var(--arrow)",
          }}
        >
          <img src={reload} />
        </button>
      </>
    );
  }

  return (
    <Container>
      <Filters
        handlers={{
          input: handleInputChange,
          select: handleSelectChange,
        }}
      />
      {isLoading && <Loader />}
      <ListOfCountries countries={countries} />
    </Container>
  );
};
