import axios from "axios";
import { useEffect, useState } from "react";

const Body = ({ titled, taskid,isDone }) => {
const [taskcolor,setTaskColor]=useState("burlywood")
const colorGreen=()=>{
    setTaskColor("#2FBF71");
 }
const deleteTask=async ()=>{
    console.log(taskid);
   console.log("Delete task")
    // DELETE request
await axios.delete('https://react-workshop-todo.fly.dev/todos/'+{taskid}, {
	headers: {
		apiKey:'6456780c7213f63d4325ec49'
	}
}) 
console.log("taskdeleted");
}
return (
    <>
        <div className="task" style={{backgroundColor:taskcolor}} >{titled}
            <div className="taskid">TI{taskid}</div>
            <button className="checkbox bggreen poscompleted " onClick={colorGreen} >C</button>
            <button className="checkbox posdelete" onClick={deleteTask}>D</button>
        </div >

    </>



);
}
export default Body;