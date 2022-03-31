import React from "react";

function AllRun({ urObj }) {
  return (
    <div className="container">
      <div>
        {urObj.name} -- {urObj.difficulty} -- {urObj.mountain}
      </div>
    </div>
  );
}

export default AllRun;
