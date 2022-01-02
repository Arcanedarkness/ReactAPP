import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle }) => {
    return (
        // wierd syntax he used : {`task ${task.reminder ? 'reminder' : ''}`}
        <div className={ task.reminder ? 'task reminder' : 'task'} onDoubleClick={() => onToggle(task.id)}>
            <h3>
                {task.text}{' '}
                <FaTimes 
                    style={{ color: 'red', cursor: 'pointer'}} 
                    onClick={() => onDelete(task.id)}
                />
            </h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
