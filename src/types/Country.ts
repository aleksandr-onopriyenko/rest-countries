import { formatPopulation } from "@utils";
import { ResponseCountry } from "./ResponseCountry";

export class Country {
  ["name"]!: string;
  ["image"]!: string;
  ["population"]!: number | string;
  ["region"]!: string;
  ["capital"]!: string[];
  ["borders"]?: string[];
  constructor(country: ResponseCountry) {
    this["name"] = country.name.common;
    this["image"] = country.flags.svg;
    this["population"] = formatPopulation(country.population);
    this["region"] = country.region;
    this["capital"] = country.capital;
    this["borders"] = country.borders;
  }
  [key: string]: any;
}
