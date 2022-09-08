import { useState } from 'react';
import './addtask.css';

const AddTask = ( {onAdd} ) => { 
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);

    const onSubmit = (e) => { 
        e.preventDefault();

        if(!text) { 
            alert('Please add a task to your list')

            return
        } 


        onAdd({text, day, reminder});

        // clearing the input fields 

        setText('');
        setDay('');
        setReminder(false);
    }

// * calling the .preventDefault function (or method?) prevents submitting to a page.

    return (
        <div className="add-task">
            <h2>Set a Reminder For Your Other Tasks</h2>

            <form className="add-form" onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="task">Task</label>
                    <input 
                        type="text" 
                        placeholder='Add Activity'
                        id='task'
                        value={text}
                        onChange={ (e) => setText(e.target.value)}
                    />
                </div>

                <div className="form-control">
                    <label htmlFor="day">Date and Time</label>
                    <input 
                        type="text" 
                        placeholder='Include date and time'
                        id='day'
                        value={day}
                        onChange={ (e) => setDay(e.target.value)}
                    />
                </div>

                <div className="form-control form-control-check">
                    <label htmlFor="reminder">Set Reminder</label>
                    <input 
                        type="checkbox" 
                        name="reminder"
                        id="reminder"
                        value={reminder}
                        checked={reminder}
                        onChange={(e) => setReminder(e.currentTarget.checked)}
                    />
                </div>

                <input type="submit" value="Save Task" className='btn btn-block'/>
            </form>
        </div>
    )
}

export default AddTask