import React, { useContext } from 'react'
import { CounterContext } from './App';


function ComponentF() {
  const countContext = useContext(CounterContext);
  
  return (
    <div>
       <h1>CountF {countContext.count}</h1>
       <button onClick={() => countContext.dispatch("increment")}>Increment</button>
        <button onClick={() => countContext.dispatch("decrement")}>Decrement</button>
        <button onClick={() => countContext.dispatch("reset")}>Reset</button>
    </div>
  )
}

export default ComponentF;