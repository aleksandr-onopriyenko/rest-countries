import { useEffect, useState } from "react";

import { useDebounce } from "@hooks";
import { countriesApi, dispatch, useGetBySearchQuery } from "@store";

export const useCountriesBySearch = (handleData: (data: any) => void) => {
  const [searchCountry, setSearchCountry] = useState("");
  const debouncedSearchCountry = useDebounce(searchCountry, 800);
  const { data, isFetching, isError } = useGetBySearchQuery(
    debouncedSearchCountry,
    {
      skip: !debouncedSearchCountry,
    }
  );

  useEffect(() => {
    handleData(data);
  }, [data]);

  useEffect(() => {
    if (!searchCountry.length) {
      dispatch(countriesApi.endpoints.getCountries.initiate()).then(
        ({ data }) => handleData(data)
      );
    }
  }, [searchCountry]);

  return {
    byNameCountries: data,
    isLoading: isFetching,
    isError,
    setSearchCountry,
  };
};
