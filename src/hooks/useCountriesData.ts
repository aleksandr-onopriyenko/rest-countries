import { useState } from "react";

import { useCountriesAll } from "./useCountriesAll";
import { useCountriesByRegion } from "./useCountriesByRegion";
import { useCountriesBySearch } from "./useCountriesBySearch";

export const useCountriesData = () => {
  const [countries, setCountries] = useState(null);
  const handleData = (countries: any) => {
    setCountries(() => countries);
  };
  const { isLoading: isAllLoading, isError: isErrorAll } =
    useCountriesAll(handleData);

  const {
    setRegion,
    isLoading: isRegionLoading,
    isError: isErrorRegion,
  } = useCountriesByRegion(handleData);

  const {
    setSearchCountry,
    isLoading: isByNameLoading,
    isError: isErrorSearch,
  } = useCountriesBySearch(handleData);

  return {
    countries,
    isLoading: isAllLoading || isRegionLoading || isByNameLoading,
    isError: isErrorAll || isErrorRegion || isErrorSearch,
    setRegion,
    setSearchCountry,
  };
};
