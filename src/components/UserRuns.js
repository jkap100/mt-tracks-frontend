import React from "react";
import AllRun from "./AllRun";
import { Link } from "react-router-dom";

function UserRuns({ userRuns, id }) {
  // const aR = userRuns.map((ur) => {
  //   <AllRun key={ur.id} urObj={ur} />;
  // });
  const ar = userRuns.map((ur) => <AllRun key={ur.id} urObj={ur} />);
  return (
    <div className="container">
      <div className="box">
        <h1 className="title is-2 header">My Runs</h1>
      </div>
      {ar}
      <div className="field is-grouped">
        <Link to={`/user_mts_list/${id}`}>
          <button className="mt-4 mb-6 mr-4 button is-dark is-responsive is-outlined">
            My Mountains
          </button>
        </Link>

        <p>
          <Link to="/">
            <button className="mt-4 mb-6 button is-dark is-focused is-outlined">
              Log Out
            </button>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default UserRuns;
