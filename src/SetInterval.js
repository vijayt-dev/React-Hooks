import { useEffect, useState } from "react";

function SetInterval(){
    const [count,setCount] = useState(0)
    function inter(){
        setCount(count + 1)
        console.log(count)
    }
    useEffect(() => {
       const interval = setInterval(inter,1000)
       return () => {clearInterval(interval)}
    },[count])
    console.log(count)
    return (
        <div>
            <h1>{count}</h1>
        </div>
    )
}
export default SetInterval;