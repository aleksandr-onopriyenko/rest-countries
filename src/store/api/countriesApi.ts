import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

import { Country, DetailsCountry, ResponseCountry } from "@types";

export const countriesApi = createApi({
  reducerPath: "countriesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_COUNTRIES_API,
    validateStatus(response) {
      return response.status !== 503;
    },
  }),
  endpoints: (builder) => ({
    getCountries: builder.query<Country[], void>({
      query: () => ({
        url: "all",
      }),
      transformResponse: (response: ResponseCountry[]) =>
        response.map((country) => new Country(country)),
    }),
    getDetails: builder.query<DetailsCountry, string | undefined>({
      query: (name) => ({
        url: "name/" + name,
      }),
      transformResponse: (response: ResponseCountry[], _meta, args) => {
        return new DetailsCountry(
          response.find((c) => c.name.common === args)!
        );
      },
    }),
    getCodes: builder.query<string[], string[] | undefined>({
      query: (codes) => (codes ? "alpha?codes=" + codes.join(",") : ""),
      transformResponse: (response: ResponseCountry[]) =>
        response.map((country) => country.name.common),
    }),
    getByRegion: builder.query<Country[], string>({
      query: (region) => "region/" + region,
      transformResponse: (response: ResponseCountry[]) =>
        response.map((country) => new Country(country)),
    }),
    getBySearch: builder.query<Country[], string>({
      query: (name) => ({
        url: "name/" + name,
        validateStatus(response) {
          return response.status === 200;
        },
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
