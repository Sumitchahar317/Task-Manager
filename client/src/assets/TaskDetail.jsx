import { Link } from 'react-router-dom'

const TaskDetail = ({ task, onTaskDeleted }) => {

const delButton = async()=>{
    try {
        const res = await fetch(`http://localhost:8000/api/tasks/${task._id}` , {
            method : "delete",
        });
        
        if(res.ok){
            onTaskDeleted(task._id);
        }   
    }catch{
        console.log(" Error is generated")
    }
}
  return (
    <div className="task-card">
        <div className="task-card-body">
            <div>
                <h4>{task.title}</h4>
                <p>{task.description}</p>
            </div>
            <div>
                <span className={`status-badge ${task.isCompleted ? 'completed' : 'pending'}`}>
                {task.isCompleted ? 'Completed' : 'Pending'}
                </span>
            </div>
            
        </div>
        <div className="task-actions">
            <button className='delBtn btn btn-danger' type='button' onClick={delButton}>Delete</button>
            <Link to={`/task/${task._id}`} className="btn btn-info editBtn">Edit Task</Link>
        </div>
    </div>
      
  )
}

export default TaskDetail
