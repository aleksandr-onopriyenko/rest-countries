import { FC } from "react";

interface Props {
  currencies: {
    name: string;
    symbol: string;
  }[];
}

export const DetailsCurrencies: FC<Props> = ({ currencies }) => {
  return (
    <p>
      <b>Currencies: </b>
      {currencies.map(({ name, symbol }) => (
        <span key={name}>
          {symbol && (
            <b
              style={{
                color: "red",
                fontSize: "1.2rem",
                marginInline: "1rem",
                padding: "0 1rem",
                border: "1px dashed var(--box-shadow)",
              }}
            >
              {symbol}
            </b>
          )}
          {name}
        </span>
      ))}
    </p>
  );
};
