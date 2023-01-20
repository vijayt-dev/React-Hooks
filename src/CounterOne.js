import React, { useReducer, useState } from "react";

function CounterOne() {
  const initialState = { counter: 0 };
  function reducer(state, action) {
    switch (action.type) {
      case "increment":
        console.log(state, action);
        return {counter: state.counter + action.value};
      case "decrement":
        return {counter: state.counter - action.value};
      case "reset":
        return {counter: 0};
      default:
        return {counter: state.counter};
    }
  }
  const [count, dispatch] = useReducer(reducer, initialState);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState);

  return (
    <div>
      <div>
        <h1>Count1 {count.counter}</h1>
        <button onClick={() => dispatch({type:"increment",value: 1})}>Increment</button>
        <button onClick={() => dispatch({type: "decrement",value: 1})}>Decrement</button>
        <button onClick={() => dispatch({type:"increment",value:2})}>Increment 2</button>
        <button onClick={() => dispatch({type: "decrement",value:2})}>Decrement 2</button>
        <button onClick={() => dispatch({type: "reset"})}>Reset</button>
      </div>

      <div>
        <h1>Count2 {countTwo.counter}</h1>
        <button onClick={() => dispatchTwo({type:"increment",value: 1})}>Increment</button>
        <button onClick={() => dispatchTwo({type: "decrement",value: 1})}>Decrement</button>
        <button onClick={() => dispatchTwo({type:"increment",value:2})}>Increment 2</button>
        <button onClick={() => dispatchTwo({type: "decrement",value:2})}>Decrement 2</button>
        <button onClick={() => dispatchTwo({type: "reset"})}>Reset</button>
      </div>
    </div>
  );
}

export default CounterOne;
