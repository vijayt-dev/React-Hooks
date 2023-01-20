import React, { useCallback, useMemo, useState } from 'react'

function CounterMemo() {
    const [countOne,setCountOne] = useState(0)
    const [countTwo,setCountTwo] = useState(0)
    const [toggle,setToggle] = useState(false)
    const incrementOne = () => {
        setCountOne(countOne+ 1)
    }
    const incrementTwo = () => {
        setCountTwo(countTwo + 1)
    }
    // const isEven = useMemo( () => {
    //    // while(i < 9000000000) i++
    //     console.log("Render")
    //     return countOne % 2 === 0
    // },[countOne])
function isEven() {
    console.log("Render")
    return countOne % 2 === 0
}
   const isEvenCall = useCallback(() => isEven(),[countOne])
  return (
    <div>
        <h1>Count1 {countOne}</h1>
        <button onClick={() => incrementOne()}>Increment</button>
        {isEvenCall ? "Even" : "Odd"}
        <h1>Count2 {countTwo}</h1>
        <button onClick={() => incrementTwo()}>Increment</button>
        <button onClick={() => setToggle(!toggle)}>Toggle</button>
        {toggle && <p>Toggle</p>}


    </div>
  )
}

export default CounterMemo