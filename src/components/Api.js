import { Button } from "@mui/material";
import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';

function Api() {
    const [count,setCount] = useState(1);
    const [post,setPost] = useState([]);

    useEffect(() => { 
        console.log('https://jsonplaceholder.typicode.com/posts/'+count);
        axios.get('https://jsonplaceholder.typicode.com/posts').then((response)=>{
            setPost(response.data);
        })
      console.log("calisiyor");
    }, [])
    

    function updateCount(){
        setCount(count + 1 );
        
    }


    return(
        <div>
            {post!=null ? "dolu": "bos"}
            <Button onClick={updateCount}>Arttir</Button>

            <label>{count}</label>

           
        {console.log(post)}
       <br></br>
       {post && JSON.stringify(post.title)}
            
        </div>
    )
}



export default Api;