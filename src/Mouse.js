import { useEffect, useState } from "react";

function Mouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  function change(e) {
    console.log("CHange")
    setX(e.clientX);
    setY(e.clientY);
  }
  useEffect(() => {
    window.addEventListener("mousemove", change);
    return () => {window.removeEventListener("mousemove",change)}
  },[]);
  return (
    <div>
      <h2>x {x} y {y}</h2>
    </div>
  );
}
export default Mouse;
