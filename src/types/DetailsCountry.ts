import { Country } from "./Country";
import { ResponseCountry } from "./ResponseCountry";

export class DetailsCountry extends Country {
  ["sub-region"]: string;
  ["top-level-domain"]?: string;
  ["currencies"]: any;
  ["languages"]?: string;
  constructor(country: ResponseCountry) {
    super(country);
    if (country.languages) {
      this["languages"] = Object.values(country.languages).join(", ");
    }

    if (country.currencies) {
      this["currencies"] = Object.keys(country.currencies).map((el) => ({
        name: country.currencies[el].name,
        symbol: country.currencies[el].symbol,
      }));
    }

    if (country.tld) {
      this["top-level-domain"] = country.tld.join(" ").toLowerCase();
    }

    this["sub-region"] = country.subregion;
  }
}
