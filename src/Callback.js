import React, {useState,useCallback, useEffect } from 'react'

function Callback() {
const [number,setNumber] = useState(1)
const [dark,setDark] = useState(false)

const getItems = useCallback(() => {
    return [number, number + 1, number + 2]
},[number])
const theme = {
    backgroundColor: dark ? "#333" : "#fff",
    color: dark ? "#fff" : "#333"
}
useEffect(() => {
    console.log("Update")
},[getItems])
  return (
    <div style={theme}>
        <input type="number" value={number} onChange={e => setNumber(e.target.value)} />
        <button onClick={() => setDark(prevDark => ! prevDark)}>
            Toggle Theme
        </button>

        <div>
            {
                getItems().map(item => <div key={item}>{item}</div>)
            }
        </div>
    </div>
  )
}

export default Callback