import Tag from "./Tag"
import "./TaskCard.css"
import deleteImg from "../assets/delete.png"

function TaskCard({title, tags, deleteTask, index}) {

  return (
    <article className="task_card">
        <p className="task_text">{title}</p>
        <div className="task_card_bottom_line">

            <div className="task_card_tags">
              {tags.map((tag,index) => (<Tag key = {index} tagName = {tag} />))}
              {/* <Tag tagName = "HTML" />
              <Tag tagName = "CSS" />
              <Tag tagName = "JavaScrpt" /> */}
            </div>
            <div className="task_delete">
              <img src= {deleteImg} alt="delete icon" className="delete_icon" onClick={() => deleteTask(index)} />
            </div>

        </div>
    </article>
  )
}

export default TaskCard