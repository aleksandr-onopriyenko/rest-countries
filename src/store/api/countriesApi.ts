import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

import { Country, DetailsCountry, ResponseCountry } from "@types";

export const countriesApi = createApi({
  reducerPath: "countriesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://restcountries.com/v3.1/",
    mode: "cors",
  }),
  endpoints: (builder) => ({
    getCountries: builder.query<DetailsCountry[], void>({
      query: () => ({
        url: "all",
      }),
      transformResponse: (response: ResponseCountry[]) => {
        return response.map((e) => new DetailsCountry(e));
      },
    }),
    getDetails: builder.query<DetailsCountry, string | undefined>({
      query: (name) => ({
        url: "name/" + name,
      }),
      transformResponse: (response: ResponseCountry[], _meta, args) => {
        return new DetailsCountry(
          response.find(
            (c) => c.name.common.toLowerCase() === args!.toLowerCase()
          )!
        );
      },
    }),
    getCodes: builder.query<string[] | undefined, string[]>({
      query: (codes) => (codes ? "alpha?codes=" + codes.join(",") : ""),
      transformResponse: (response: ResponseCountry[]) => {
        return response.map((country) => country.name.common);
      },
    }),
    getByRegion: builder.query<Country[], string>({
      query: (region) => "region/" + region,
      transformResponse: (response: ResponseCountry[]) => {
        return response.map((country) => new Country(country));
      },
    }),
    getBySearch: builder.query<Country[], string>({
      query: (name) => ({
        url: "name/" + name,
      }),
      transformResponse: (response: ResponseCountry[]) => {
        return response.map((country) => new Country(country));
      },
    }),
  }),
});

export const {
  useGetCountriesQuery,
  useGetDetailsQuery,
  useGetByRegionQuery,
  useGetCodesQuery,
  useGetBySearchQuery,
} = countriesApi;
