import React from "react";

const Display = props => (
  <div className="display">
    <input
      type={"text"}
      disabled={true}
      value={props.display}
      id={"display"}
    />
  </div>
);
export default Display