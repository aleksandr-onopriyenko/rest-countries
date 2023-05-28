import { FC, useEffect, useState } from "react";

interface Props {
  description: {
    [key: string]: any;
  };
}

export const DetailsDescription: FC<Props> = ({ description: value }) => {
  const [description, setDescription] = useState<string[]>();

  useEffect(() => {
    setDescription(() =>
      Object.keys(value).sort((a, b) => a.length - b.length)
    );
  }, [value]);

  return description ? (
    <>
      {description.map(
        (desc) =>
          value[desc] && (
            <p key={desc}>
              <b style={{ textTransform: "capitalize" }}>
                {desc.replace(/-/g, " ")}:{" "}
              </b>
              <span>{value[desc]}</span>
            </p>
          )
      )}
    </>
  ) : (
    <></>
  );
};
