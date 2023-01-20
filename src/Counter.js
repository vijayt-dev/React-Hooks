import { useEffect, useState } from "react";
import SetInterval from "./SetInterval";

function Counter() {
  const [display,setDisplay] = useState(true)
  return (
    <div>
       <button onClick={() => setDisplay(!display)}>Toggle display</button>
       {display && <SetInterval />}
    </div>
  )
}
export default Counter;
