import React, { useState } from "react";
import { sculptureList } from "./data";

export default function GalleryMore() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const hasNext = index < sculptureList.length - 1;

  //handling next
  function handleNextClick() {
    if (hasNext) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  //handling show more details
  function handleMoreClick() {
    setShowMore(!showMore);
  }

  return (
    <div>
      <button onClick={handleNextClick}>Next</button>

      <h2>
        <i>{sculptureList[index].name}</i> by {sculptureList[index].artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList?.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? "Hide" : "Show"} details
      </button>
      {showMore && <p>{sculptureList[index].description}</p>}
      <img src={sculptureList[index].url} alt={sculptureList[index].alt} />
    </div>
  );
}
