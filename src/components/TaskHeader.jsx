import { useState } from "react";

import "./TodoHeader.css";
import Tag from './Tag';

function TodoHeader({setTasks}) {

    const [taskData, setTaskData] = useState({
        task: "",
        status: "todo",
        tags: []
    });

    const handleChange = (e) => {
        const {name, value} = e.target;

        setTaskData(prevData => {
            return {...prevData, [name]: value};
        })
    }
    

    const handleSubmit = (e) => {
        e.preventDefault();
        setTasks(prevData => {
            return [...prevData, taskData];
        });
        setTaskData({
            task: "",
            status: "todo",
            tags: [],
          });
    }


    const selectTag = (tag) => {
        
        if (!(taskData.tags.some(item => item === tag ))) {
            setTaskData({...taskData, tags:[...taskData.tags, tag]})        
        }else {
            const filteredTags = taskData.tags.filter(item => item !==tag);
            setTaskData({...taskData, tags: filteredTags})
        }
    }



  return (
    <header className='app_header'>
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Add your Task!' className='task_input'
            name="task"
            value={taskData.task}
            onChange={handleChange} />

            <div className='todo_header_bottom_line'>
                <div>
                    <Tag tagName = 'HTML' selectTag = {selectTag} />
                    <Tag tagName = 'CSS' selectTag = {selectTag} />
                    <Tag tagName = 'JavaScript' selectTag = {selectTag} />
                    <Tag tagName = 'React' selectTag = {selectTag} />
                </div>
                <div>
                    <select className='task_status' name="status" value={taskData.status} onChange={handleChange} >
                        <option value="todo">Todo</option>
                        <option value="doing">Doing</option>
                        <option value="done">Done</option>
                    </select>

                    <button className='task_add'>+ Add task</button>
                </div>
            </div>
        </form>
    </header>
  )
}

export default TodoHeader