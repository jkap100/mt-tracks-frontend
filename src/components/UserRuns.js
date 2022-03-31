import React from "react";
import AllRun from "./AllRun";

function UserRuns({ userRuns }) {
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
    </div>
  );
}

export default UserRuns;
