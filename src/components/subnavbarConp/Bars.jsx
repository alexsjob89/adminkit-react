import ViewWeekIcon from "@mui/icons-material/ViewWeek";
import React, { useState } from "react";
import BarsList from "./BarsList";

function Bars() {
  const [state, setState] = useState(false);
  const onClickEvent = () => {
    setState(true);
  };

  const onClickOut = () => {
    setState(false);
  };

  return (
    <div className="bars">
      <ViewWeekIcon onClick={onClickEvent} />
      {state ? (
        <ul onMouseLeave={onClickOut} className="barsList">
          <BarsList />
        </ul>
      ) : (
        []
      )}
    </div>
  );
}

export default Bars;
