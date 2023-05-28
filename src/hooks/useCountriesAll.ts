import { useEffect } from "react";

import { useGetCountriesQuery } from "@store";

export const useCountriesAll = (handleData: (data: any) => void) => {
  const { data, isFetching, isError } = useGetCountriesQuery();

  useEffect(() => {
    handleData(data);
  }, [data]);

  return { allCountries: data, isLoading: isFetching, isError };
};
