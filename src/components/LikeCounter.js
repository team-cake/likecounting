import React, { useState, useEffect } from "react"; // <- note the added import of useState

export default function LikeCounter() {
  const initial_numLikes = 0;
  const [numLikes, set_numLikes] = useState(initial_numLikes); // <- using state!

  const increment = () => {
    console.log("Yes, clicked! Current number of likes:", numLikes);
    set_numLikes(numLikes + 1);
  };

  useEffect(() => {
    console.log("The useEffect action!");
  }, [numLikes]);


  console.log("A render!");  

  const reset = () => {
    console.log("No, reset! Number of likes back to zero");
    set_numLikes((numLikes) => 0);
  };
  return (
    <div>
      <p>
        This post has <b>{numLikes}</b> likes!
        <button onClick={increment}>Like</button>
        <button onClick={reset}>Reset</button>
      </p>
    </div>
  );
}
