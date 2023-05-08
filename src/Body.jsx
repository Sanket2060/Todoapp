import axios from "axios";
import { useEffect } from "react";
import { useState } from 'react';


const Body = ({ titled, taskid, isDone }) => {
    const [completedgreen, Setcompletedgreen] = useState("green")
    if (!isDone) {
        Setcompletedgreen("green");
    }
return (
    <>
        <div className="task" style={{ backgroundColor: "{ completedgreen }" }}>{titled}
            <div className="taskid">TI{taskid}</div>
            <button className="checkbox bggreen poscompleted " >C</button>
            <button className="checkbox posdelete">D</button>
        </div >

    </>



);
}
export default Body;