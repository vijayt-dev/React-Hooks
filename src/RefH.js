import React, { useEffect, useRef, useState } from "react";

function RefH() {
  const [name, setName] = useState("");
  const inputRef = useRef(0);
  console.log(inputRef)
  useEffect(() => {
    inputRef.current = inputRef.current + 1
  })
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
      />
      <h1>{name}</h1>
      <h2>{inputRef.current}</h2>
    </div>
  );
}

export default RefH;
