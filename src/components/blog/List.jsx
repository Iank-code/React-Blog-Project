import React, { useState } from "react";
import DisplaySelected from "./DisplaySelected";

export default function List({ list }) {
  const [visibleDetails, setVisibleDetails] = useState(false);

  function handleClick() {
    setVisibleDetails(!visibleDetails);
  }

  return (
    <div onClick={handleClick}>
      <img src={list && list.logoUrl} alt="random" />
      <h3>{list && list.name}</h3>

      {visibleDetails ? <DisplaySelected data={list} /> : ""}
    </div>
  );
}
