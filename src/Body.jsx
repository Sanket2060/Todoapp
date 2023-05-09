


const Body = ({ titled, taskid }) => {
    
return (
    <>
        <div className="task" >{titled}
            <div className="taskid">TI{taskid}</div>
            <button className="checkbox bggreen poscompleted " >C</button>
            <button className="checkbox posdelete">D</button>
        </div >

    </>



);
}
export default Body;