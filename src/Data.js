import React,{useState,useEffect} from 'react';
import axios from 'axios';
function Data() {
    const [posts,setPosts] = useState({})
    const [id,setId] = useState(1)
    const [idBtn,setIdbtn] = useState(1)
    const handClick = () =>{
        setIdbtn(id)
    }
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => {
           setPosts(res.data)
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    },[idBtn])
  return (
    <div>
        <input type="text" value={id} onChange={(e) => { setId(e.target.value)}} />
        <button onClick={handClick}>Click Me</button>
        <ul>
            
            {
               <li key={posts.id}>{posts.title}</li>
            }
        </ul>

    </div>
  )
}

export default Data;