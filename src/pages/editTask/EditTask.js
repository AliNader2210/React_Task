import { useNavigate, useParams } from 'react-router-dom'
import './EditTask.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
function EditTask(){
    const { id } = useParams()
    const navigate = useNavigate()
    const [task, setTask] = useState({id: id, todo: '', completed: false, userId: null})
    useEffect(()=>{
        axios.get(`https://dummyjson.com/todos/${id}`)
        .then(response => setTask(response.data))
    }, [id])
    const handleSave = async () => {
        try{
            await axios.put(`https://dummyjson.com/todos/${id}`, task)
            navigate('/')
        }catch(error){
            console.error('Error updating task', error)
        }
    }
    return(
        <div className='edit-container'>
            <h1 className='edit-header'>Edit Task</h1>
            <form className='edit-form' onSubmit={handleSave}>
                <input className='edit-input' type='text' placeholder='Edit task' value={task.todo} onChange={event => setTask({...task, todo: event.target.value})}/>
                <div className='status-container'>
                    <label>Status:</label>
                    <span className='completed-radio'><input type='radio' checked={task.completed === true} onChange={()=>setTask({...task, completed: true})}/><label>Completed</label></span>
                    <input type='radio' checked={task.completed === false} onChange={()=>setTask({...task, completed: false})}/><label>Not completed</label>
                </div>
                <button className='save-btn' type='submit'>Save</button>
            </form>
        </div>
    )
}
export default EditTask
