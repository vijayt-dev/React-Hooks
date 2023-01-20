import React, { useContext } from 'react'
import { CounterContext } from './App';


function ComponentC() {
  const countContext = useContext(CounterContext);
  console.log(countContext)
  return (
    <div>
       <h1>Countc {countContext.count}</h1>
        <button onClick={() => countContext.dispatch("increment")}>Increment</button>
        <button onClick={() => countContext.dispatch("decrement")}>Decrement</button>
        <button onClick={() => countContext.dispatch("reset")}>Reset</button>
    </div>
  )
}

export default ComponentC;