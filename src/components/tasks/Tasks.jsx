import Task from '../task/Task';
import './tasks.css';

const Tasks = ( { tasks, onDelete, onToggle} ) => {

  return (
    <>
        {tasks.map((task) => (
            <Task 
                style={{fontWeight: 400}}
                key={task.id}
                task={task} 
                onDelete={onDelete}
                onToggle={onToggle}
            />
        ))}
    </>
  )
}

export default Tasks

// using the normal parenthesis instead of the curly brackets when using array methods to use jsx
// <></> is the short form syntax of <React.fragment></React.fragment> - however, the empty shortened syntax cannot accept attributes