import { useEffect, useState } from "react";

import "./App.css";
import TaskSection from "./components/TaskSection";
import TaskHeader from './components/TaskHeader';
import TodoImg from "./assets/direct-hit.png"
import DoingImg from "./assets/glowing-star.png"
import  DoneImg from "./assets/check-mark-button.png"

const oldTasks = localStorage.getItem("tasks");


function App() {

  const [tasks, setTasks] = useState(JSON.parse(oldTasks) || []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  },[tasks])

  const deleteTask = (taskIndex) => {
    const newTasks = tasks.filter((task, index) => index !== taskIndex);
    setTasks(newTasks);
  }

  return (
    <div className='app'>
      
      <TaskHeader setTasks = {setTasks} />
      <main className='app_main'>
        <TaskSection title = "ToDo" icon = {TodoImg} tasks = {tasks} status = "todo" deleteTask = {deleteTask} />
        <TaskSection title = "Doing" icon = {DoingImg} tasks = {tasks} status = "doing" deleteTask = {deleteTask} />
        <TaskSection title = "Done" icon = {DoneImg} tasks = {tasks} status = "done" deleteTask = {deleteTask} /> 
      </main>
    
    </div>
  )
}

export default App