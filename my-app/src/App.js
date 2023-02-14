import { useState } from "react";
import "./App.css";

function App () {
  let [todoList,setTodoList] =useState([]);
  let [newTask,setNewTask] = useState("");

  const handletask = (Event) =>{
    setNewTask(Event.target.value);
  }

  const Addtask = () =>{
    let isadded = todoList.some(task => {
      if(task === newTask){
        return true;
      }
      else{
        return false;
      }
    })
      if(isadded){
        window.alert('Task already in list');
      }
      else{
        setTodoList([...todoList,newTask]);
      }
  // setTodoList([...todoList,newTask]);
    }


  const deletetask =(taskname) =>{
    const newlist =todoList.filter((task) => {
      return (task===taskname?false:true);
    })
    setTodoList(newlist);
  }

  return (
    <div class="App">
      <div>Add your Text here
        <input type="text" onChange={handletask}></input>
        <button onClick={Addtask}>Add</button>
        </div>
      <div>
        {todoList.map((task) => {
          return (
            <div><h1>{task}</h1>
            <button onClick={() => deletetask(task)}>Remove</button>
            <button >Done ?</button></div>
          );
        })}
      </div>
    </div>
  )
}

export default App;
