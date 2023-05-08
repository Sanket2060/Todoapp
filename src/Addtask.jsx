import { useState } from "react";
import axios from "axios"
const Addtask=()=>{
    const api_key = '6456780c7213f63d4325ec49';
  // const Addtodo=()=>{
  //     const upload= async()=>{
  //         await axios.post('https://react-workshop-todo.fly.dev/todos/all',{
  //             title:"Hello World",
  //             isDone: false
  //           },{
  //               headers:{
  //                   apiKey:api_key
  //               }
  //           })
  //       }
  // }
            
       

  return(
    <>
  <label htmlFor="title">Title:</label>
  <input type="text" id="title" name="title" /><br/>
  
  <button  className="myownbutton" >Submit</button>

    </>
  )
}
export default Addtask
