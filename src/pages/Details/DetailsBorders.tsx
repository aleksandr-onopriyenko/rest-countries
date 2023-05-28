import { FC } from "react";
import { Link } from "react-router-dom";

interface Props {
  borders?: string[];
}

export const DetailsBorders: FC<Props> = ({ borders }) => {
  return (
    <div className="flex">
      {borders && (
        <>
          <b>Border Countries: </b>
          {borders.map((border) => (
            <Link key={border} className="tag" to={"/" + border}>
              {border}
            </Link>
          ))}
        </>
      )}
    </div>
  );
};
