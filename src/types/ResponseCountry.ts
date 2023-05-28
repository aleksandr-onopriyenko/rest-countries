export interface ResponseCountry {
  name: {
    common: string;
    official: string;
    nativeName: {
      eng: {
        official: string;
        common: string;
      };
      ton: {
        official: string;
        common: string;
      };
    };
  };
  tld: string[];
  currencies: {
    [code: string]: {
      name: string;
      symbol: string;
    };
  };
  capital: string[];
  region: string;
  subregion: string;
  languages?: {
    [code: string]: string;
  };
  population: number;
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  borders: string[];
}
