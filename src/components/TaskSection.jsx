import TaskCard from "./TaskCard";
import "./TaskSection.css";



function TaskSection({title, icon, tasks, status, deleteTask}) {

  return (
    <section className='task_section'>
      <h2 className="task_section_heading">
        <img className="task_section_icon" src={icon} alt="TodoImg" />{title}
      </h2>

      {tasks.map((task, index) => 
      (task.status === status && <TaskCard key={index} title = {task.task} tags = {task.tags} deleteTask = {deleteTask} index = {index} />)
      )}

    </section>
  )
}

export default TaskSection