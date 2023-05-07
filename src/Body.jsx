import axios from "axios";
import { useEffect } from "react";
import { useState } from 'react';


const Body = ({titled,taskid}) => {
    const [users, setUser] = useState([]);

const api_key = '6456780c7213f63d4325ec49';
  const fetchTweets = async () => {
    const posts = await axios.get('https://react-workshop-todo.fly.dev/todos/all', {
        headers: {
            apiKey: api_key
        }
    })

    console.log(posts.data);
    // setUser(posts.data);
  };
  useEffect(() => {
    fetchTweets();
  }, []);
// function TodoList() {
//   useEffect(() => {
//     axios.get('https://react-workshop-todo.fly.dev/todos/all', {
//       headers: {
//         apiKey: api_key
//       }
//     })
//     .then(response => {
//         console.log("Done successfully");
//       console.log(response.data);
//     })
//     .catch(error => {
//       console.log(error);
//     });
//   }, []);

//   // render todo list here
// }

//     const api_key="6456780c7213f63d4325ec49"
//     axios.get('https://react-workshop-todo.fly.dev/todos/all', {
// 	headers : {
// 		apiKey : {api_key}
// 	}
// }).then(response => {
//     // Handle successful response
//     console.log(response.data);
//   })
    return (
        <>
            <div className="task">{titled}
            <div className="taskid">TI{taskid}</div>
                <button className="checkbox bggreen poscompleted">C</button>
                <button className="checkbox posdelete">D</button>
     </div >
     
    </>
    


    );
}
export default Body;