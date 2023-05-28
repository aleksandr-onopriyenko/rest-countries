import { useEffect, useState } from "react";

import { DetailsCountry } from "@types";
import { useGetCodesQuery } from "@store";

export const useCountryBorders = (
  isFetch: boolean,
  country?: DetailsCountry
) => {
  const [borderValue, setBorderValue] = useState<string[] | undefined>();
  const { data: borders, isFetching } = useGetCodesQuery(borderValue, {
    skip: !borderValue || !borderValue.length,
  });

  useEffect(() => {
    if (country && country.borders) {
      setBorderValue(() => country.borders);
    }
  }, [country]);

  return { borders, isFetching: isFetch || isFetching };
};
