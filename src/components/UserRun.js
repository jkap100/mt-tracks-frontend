import React from "react";

function UserRun({ runObj, handleClick }) {
  return (
    <div>
      {runObj.name} -- Difficulty: {runObj.difficulty}
      <div className="runBtn">
        <button
          className="is-small button is-dark is-responsive is-outlined"
          onClick={() => handleClick(runObj)}
        >
          -
        </button>
      </div>
    </div>
  );
}

export default UserRun;
