import './App.css'
import Header from './Head'
import Body from './Body'
import Addtask from './addtask';
import axios from 'axios';
import { useEffect, useState } from 'react';
function App() {
  const [tasks,setTasks]=useState([])
  const fetchTasks=async ()=>{
    const tasks=await axios.get('https://react-workshop-todo.fly.dev/todos/all', {
      headers: {
        apiKey: '6456780c7213f63d4325ec49'
      }
    });
    // console.log(tasks.data);
    setTasks(tasks.data);
  }
  useEffect(()=>{
    fetchTasks()
  },[])
 

  return (
    <>
    <div className="container">

    
     <Header />
     <Addtask />
    {

      tasks.map((element,index)=>{
        return <Body titled={element.title} taskid={element._id} />

      })
    }
    {/* <Body titled="Wake up" taskid="45" />
     <Body titled={"Eat meal"}/>
     <Body titled={"Hello"}/>
     <Body titled={"hey"}/>
     <Body titled={"Get back to coding"}/> */}
    </div>
     
    </>
  )
}

export default App
