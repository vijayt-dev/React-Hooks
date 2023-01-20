import React, { useId } from 'react'

function Id() {
    const id = useId()
    const id1 = useId()

  return (
    <div>
     <div id={id}>
            box1
     </div>
     <div id={id} className="hello">
            box2
     </div>
     <div>
        <input type="text" id={id + "text" + "input"} /> <br />
        <input type="email" id={id1 + "email" + "input"} />
     </div>
    </div>
  )
}

export default Id