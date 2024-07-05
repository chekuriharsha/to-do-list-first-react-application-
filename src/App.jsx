import {  useState } from 'react';
import { useRef } from 'react';
import './App.css';

function App() {

  const [todolist,setTodolist]=useState([]);

  const [task,setTask] = useState("");

  const inputRef = useRef(null);

  const changeHandler = (event) => {
    setTask(event.target.value);
  };

  const clickHandler = () => {
    if(inputRef.current.value !==null && inputRef.current.value.trim()!==""){
      const data = {
        id: todolist.length===0 ? 1 : todolist[todolist.length-1].id +1 , 
        item: task
      };
      setTodolist([...todolist,data]);
      setTask("");
    }
  };

  const deleteFunction = (deleteTask) => {
    const tasks = todolist.filter((element)=> element.id !== deleteTask)
    setTodolist(tasks);
  };

  return ( 
    <div className='body'>

      <div className="container">
        <h1>To-Do List</h1>
        <div className='field'>
          <input type="text" name='input' value={task} onChange={changeHandler} ref={inputRef} placeholder='Enter Task Here'/>
          <button onClick={clickHandler}>Add Task</button>
        </div>
      </div>

      <div className="titleDisplay">
        <h1>List of Tasks</h1>
      </div>

      <div className="taskDisplay">
        {todolist.map((element)=>{
            return(
              <div key={element.id} className='task'>
              <li>{todolist.indexOf(element)+1}. {element.item}</li>
              <button onClick={()=>deleteFunction(element.id)}>Delete</button>
              </div>
            );
        })}
      </div>

    </div>
  )
};

export default App;