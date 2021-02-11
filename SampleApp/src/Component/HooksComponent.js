import React,{useState,useEffect} from 'react';
import axios from 'axios';

function Hooks(){
    const [title,setTitle]=useState("React hooks component",);
    const [count,setCount]=useState(0);
    const [artists,setArtists]=useState();
    const url='http://localhost:8900/artists'
    
    useEffect(()=>{
        axios.get(url)
        .then((res)=>{
            const mydata=res.data
            setArtists(mydata)
        })

    },[artists])


    return(
        <div>
           <h1>{title}</h1>
    <h2>Counter variable is {count}</h2>
    <button className="btn btn-info"
    onClick={()=>{(setTitle('Hooks Component'))}}
    >ClickTOChangeTitle</button>

<button className="btn btn-primary"
    onClick={()=>{(setCount(count+1))}}
    >ClickTOChangeCount</button>
    <div className="panel panel-primary">
        <div className="panel panel-heading">
         Artists data
        </div>
         <div className="panel panel-body">
    <h1>{artists.name}</h1>
         </div>
    </div>


        </div>
    )
}
export default Hooks;