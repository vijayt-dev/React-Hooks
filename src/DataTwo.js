import React,{useState,useReducer,useEffect} from 'react';
import axios from 'axios';
function DataTwo() {

    const initialState = {
        post: {},
        loading: true,
        error: ""
    }
    function reducer(state, action) {
        switch (action.type) {
          case "FETCH_SUCCESS":
            console.log(state, action);
            return {post: action.payload,loading: false};
          case "FETCH_SUCCESS":
            return {error: state.error,loading: false};
          default:
            return state;
        }
      }
      const [post, dispatch] = useReducer(reducer, initialState);

    const [id,setId] = useState(1)
    const [idBtn,setIdbtn] = useState(1)
    const handClick = () =>{
        setIdbtn(id)
    }
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => {
            dispatch({type: "FETCH_SUCCESS",payload: res.data})
        })
        .catch(err => {
            dispatch({type: "FETCH_ERROR"})
        })
    },[idBtn])
  return (
    <div>
        <input type="text" value={id} onChange={(e) => { setId(e.target.value)}} />
        <button onClick={handClick}>Click Me</button>
        <ul>
            {post.loading ? "Loading" : <li key={post.post.id}>{post.post.title}</li>}
            {post.error ? "Something Wen Wrong" : null}
        </ul>

    </div>
  )
}

export default DataTwo;