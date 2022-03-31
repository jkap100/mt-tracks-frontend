import React from "react";

function Run({ runObj, handleClick }) {
  return (
    <div>
      <p>
        {runObj.name} -- Difficulty: {runObj.difficulty}
        <div className="runBtn">
          <button
            className="is-small button is-light is-responsive is-outlined"
            onClick={() => handleClick(runObj)}
          >
            +
          </button>
        </div>
      </p>
    </div>
  );
}

export default Run;
