import React from 'react';
import { useState } from 'react';
import './App.css';
import AddTask from './components/addtask/AddTask';
import Header from './components/header/Header';
import Tasks from './components/tasks/Tasks';

function App() {

  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Go to my guitar practice', 
        day: '4th September at 5:00pm', 
        reminder: true
    },
    {
        id: 2,
        text: 'Read the latest release of People Daily', 
        day: '6th September at 6:00pm', 
        reminder: false
    },
    {
        id: 3,
        text: 'Attend the React Leaders conference at Strathmore University', 
        day: '11th September at 10:00am', 
        reminder: false
    },
    {
        id: 4,
        text: 'Do a mockup of my project presentation', 
        day: '1st August at 2:00pm', 
        reminder: true
    },
    {
        id: 5,
        text: 'Apply for the open React developer role at Cognizant', 
        day: '16th July at 8:00am', 
        reminder: true
    },
    {
        id: 6,
        text: `Finish reading Nelson Mandela's "Long Walk To Freedom"`, 
        day: '3rd September at 1:00pm', 
        reminder: true
    },

]);

//  add task function 

const addTask = (task) => { 
   const id = Math.floor(Math.random() * 1000) + 1

   const newTask = { id, ...task};

   setTasks([...tasks, newTask]);
}

// delete task function 

const deleteTask = (id) => { 
  setTasks(tasks.filter( (task) => task.id !== id));
}

//  toggle reminder function 

const toggleReminder = (id) => { 
  setTasks(
    tasks.map(task => 
      task.id === id 
      ? {...task, reminder: !task.reminder}
      : task ))
}
  
  return (
    <div className="App">
      <Header 
        subtitle='This is a task manager'
        onAdd={(e) => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />  {/* attributes can be passed into the components and later accessed through the defined properties passed as parameters*/}
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'There are no tasks to display'}
    </div>
  );
}

export default App;


// todo: Find out why the onToggle function isn't changing the value of the reminder on double click as it's supposed to