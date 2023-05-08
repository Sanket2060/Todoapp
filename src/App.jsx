import './App.css'
import Header from './Head'
import Body from './Body'
import { useState } from 'react';
import { useEffect } from 'react';
import Addtask from './addtask';
import axios from 'axios';
function App() {
  const [tasks, setTasks] = useState([]);

const api_key = '6456780c7213f63d4325ec49';
  const fetchTasks = async () => {
    const tasks = await axios.get('https://react-workshop-todo.fly.dev/todos/all', {
      headers: {
        apiKey: api_key
      }
    })
    setTasks(tasks.data);
    console.log(tasks);
    console.log(tasks.data[0].title)

  };
  useEffect(() => {   //special use of useEffect??
    fetchTasks();
    
  }, []);
  return (
    <>
    <div className="container">


     <Header />
     <Addtask />
    {
      tasks.map(currentvalue=>
        {
          <Body titled={currentvalue.title} taskid={currentvalue._id} isDone={currentvalue.isDone}/>              
        }
        )
      }
     {/* /* <Body titled="Wake up" taskid="45" />
     <Body titled={"Eat meal"}/>
     <Body titled={"Hello"}/>
     <Body titled={"hey"}/>
     <Body titled={"Get back to coding"}/> */ }
    </div>
     
    </>
  )
}

export default App
