import { useState } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import './ToDolist.css';
const ToDolist = () => {
    let [task,setTask] = useState("");  //array destructuring
    let [taskArray,setTaskArray] = useState([]);
    let clickHandler=()=>{
        // console.log("Clicked");
        setTaskArray([...taskArray,task]);
        setTask(taskArray);
    }
    let onKeyDownHandler = (event) => {
        if (event.key === "Enter") {
            clickHandler();
        }
    }

    let onChangeHandler=(event)=>{
        // console.log(event.target.value);
        setTask(event.target.value)
    }
    return ( 
        
        <>
        <div class="container">
            <div class="mb-3">
            <label htmlFor="" class="form-label">Name</label>
            <input
                type="text"
                class="form-control"
                name=""
                id=""
                aria-describedby="helpId"
                placeholder="Enter your task"
                value={task}
                onChange={onChangeHandler}
                onKeyDown={onKeyDownHandler}
        
        />
         <button onClick={clickHandler}>Add Task</button><br></br><br/>
        <ol>
        {task}
        {
            taskArray.map((elem,index)=>{
                return <li>{index+1}. {elem}</li>
            })
        }
        </ol>
        </div>

        </div>
        
        
        
       
        </>
     );
}
 
export default ToDolist;