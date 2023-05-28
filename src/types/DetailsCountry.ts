import { Country } from "./Country";
import { ResponseCountry } from "./ResponseCountry";

export class DetailsCountry extends Country {
  ["sub-region"]: string;
  ["top-level-domain"]: string;
  ["currencies"];
  ["languages"]: string;
  constructor(country: ResponseCountry) {
    super(country);

    this["sub-region"] = country.subregion;
    this["top-level-domain"] = country.tld.join(" ").toLowerCase();
    this["currencies"] = Object.keys(country.currencies).map((el) => ({
      name: country.currencies[el].name,
      symbol: country.currencies[el].symbol,
    }));
    this["languages"] = Object.values(country.languages).join(", ");
  }
}
