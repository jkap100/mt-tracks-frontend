import React from "react";

function UserRun({ runObj, handleClick }) {
  return (
    <div>
      {runObj.name}
      <button onClick={() => handleClick(runObj)}>-</button>
    </div>
  );
}

export default UserRun;
