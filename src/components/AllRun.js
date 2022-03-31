import React from "react";

function AllRun({ urObj }) {
  return (
    <div className="">
      <div className="card">
        <div className="card-content">
          <div className="content">
            {urObj.name} -- {urObj.difficulty}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllRun;
