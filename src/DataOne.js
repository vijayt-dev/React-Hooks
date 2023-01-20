import React,{useState,useEffect} from 'react';
import axios from 'axios';
function DataOne() {

    const [posts,setPosts] = useState({})
    const [id,setId] = useState(1)
    const [idBtn,setIdbtn] = useState(1)
    const handClick = () =>{
        setIdbtn(id)
    }
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState("");
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => {
           setPosts(res.data)
           setLoading(false)
           setError("")
        })
        .catch(err => {
            setPosts({})
            setLoading(false)
            setError(err)
        })
    },[idBtn])
  return (
    <div>
        <input type="text" value={id} onChange={(e) => { setId(e.target.value)}} />
        <button onClick={handClick}>Click Me</button>
        <ul>
            {loading ? "Loading" : <li key={posts.id}>{posts.title}</li>}
            {error ? "Something Wen Wrong" : null}
        </ul>

    </div>
  )
}

export default DataOne;