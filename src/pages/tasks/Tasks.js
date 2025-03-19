import './Tasks.css'
import TaskCard from '../../components/taskCard/TaskCard'
import { useEffect, useState } from 'react'
import axios from 'axios'

function Tasks(){
    const [tasks, setTasks] = useState({todos: []})
    const [task, setTask] = useState({id: null, todo: '', completed: false})
    useEffect(() => {
        axios.get('https://dummyjson.com/todos?limit=5')
        .then(response=>setTasks(response.data))
    }, [])
    const handleAddClick = (event) => {
        event.preventDefault();
        if (task.todo === '' || !task.todo) return
        const newTask = { ...task, id: tasks.todos.length + 1 };
        setTasks(prevTasks => ({
            ...prevTasks,
            todos: [...prevTasks.todos, newTask]
        }))
        setTask({id: null, todo: '', completed: false})
    } 
    return(
        <div className="tasks-container">
            <h1 className="tasks-header">Tasks</h1>
            <form className='add-form' onSubmit={handleAddClick}>
                <input className='task-input' type='text' placeholder='New task' onChange={event=>setTask({...task, todo: event.target.value})}/>
                <div className='status-container'>
                    <label>Status:</label>
                    <span className='completed-radio'><input type='radio' value={true} checked={task.completed === true} onChange={() => setTask({...task, completed: true})}/><label>Completed</label></span>
                    <input type='radio' value={false} checked={task.completed === false} onChange={() => setTask({...task, completed: false})}/><label>Not completed</label>
                </div>
                <button className='add-button' type='submit'>Add</button>
            </form>
            <div className='tasks-cards'>
                <TaskCard tasks = {tasks} updateTasksState = {setTasks}/>
            </div>
        </div>
    )
}
export default Tasks