import { useNavigate } from 'react-router-dom'
import './TaskCard.css'

function TaskCard(props){
    const navigate = useNavigate()
    const handleDeleteClick = (indx) => {
        const updatedTasks = props.tasks.todos.filter((task, index) => indx !== index)
        props.updateTasksState({todos: updatedTasks})
    }
    return (
        props.tasks.todos && props.tasks.todos.map((task, index) => {
            return (
                <div className="card-container" key={index}>
                    <h3>{task.todo}</h3>
                    <p className={task.completed? 'completed' : 'not-completed'}>Status: {task.completed? 'Completed' : 'Not Completed'}</p>
                    <div>
                        <button className='edit-button' onClick={()=>navigate(`/edit/${task.id}`)}>Edit</button><button className='delete-button' onClick={() => handleDeleteClick(index)}>Delete</button>
                    </div>
                </div>
            )
        })
    )
}
export default TaskCard