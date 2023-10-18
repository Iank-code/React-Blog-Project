import React, { useState } from "react";
import DisplaySelected from "./DisplaySelected";

export default function List({ list, message }) {
  const [isVisible, setIsVisible] = useState(false);

  function showMore() {
    setIsVisible(!isVisible);
  }
  return (
    <div
      className="flex flex-col justify-center items-center mt-10 cursor-pointer"
      onClick={showMore}
    >
      <img src={list && list.logoUrl} alt="" />
      <h3>{list && list.name}</h3>

      {isVisible && <DisplaySelected data={list} />}
    </div>
  );
}
