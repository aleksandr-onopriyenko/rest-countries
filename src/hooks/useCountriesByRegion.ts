import { useEffect, useState } from "react";

import { useGetByRegionQuery } from "@store";

export const useCountriesByRegion = (handleData: (data: any) => void) => {
  const [region, setRegion] = useState("All");
  const { data, isFetching, isError } = useGetByRegionQuery(region, {
    skip: region === "All",
  });

  useEffect(() => {
    handleData(data);
  }, [data]);

  return {
    byRegionCountries: data,
    isLoading: isFetching,
    isError,
    setRegion,
  };
};
