import { useState } from "react";
import axios from "axios";

const Addtask = () => {
  const [value, setValue] = useState("");

  const api_key = "6456780c7213f63d4325ec49";
  // POST request
  const saveTask =async () => {
  await  axios.post(
      "https://react-workshop-todo.fly.dev/todos",
      {
        title: { value },
        isDone: false,
      },
      {
        headers: {
          apiKey: "6456780c7213f63d4325ec49",
        },
      }
    );
    console.log("pushed to server");
  };

  return (
    <>
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        name="title"
        onChange={(e) => setValue(e.target.value)}
      />
      <br />

      <button className="myownbutton" onClick={saveTask}>
        Submit
      </button>
    </>
  );
};
export default Addtask;
