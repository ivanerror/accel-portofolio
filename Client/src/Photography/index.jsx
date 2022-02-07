import React from "react";
import PolaroidPhoto from "../PolaroidPhoto";
const index = () => {
  return (
    <>
      <div className="grid grid-cols-1">
        <PolaroidPhoto />
        <PolaroidPhoto />
        <PolaroidPhoto />
      </div>
    </>
  );
};

export default index;
