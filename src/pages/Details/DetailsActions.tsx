import { FC } from "react";

export const DetailsActions: FC = () => {
  const handleHistoryBack = () => history.back();

  return (
    <div className="details-actions">
      <button className="details-actions__button" onClick={handleHistoryBack}>
        Back
      </button>
    </div>
  );
};
