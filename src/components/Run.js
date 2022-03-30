import React from "react";

function Run({ runObj, handleClick }) {
  return (
    <div>
      {runObj.name} -- Difficulty: {runObj.difficulty}
      <button onClick={() => handleClick(runObj)}>+</button>
    </div>
  );
}

export default Run;
