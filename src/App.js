import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import AddTask from './components/addtask/AddTask';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Tasks from './components/tasks/Tasks';
import About from './components/about/About';

function App() {

  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([]);

  useEffect( () => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();

      setTasks(tasksFromServer)
    }

    getTasks()
  }, [])  //* adding an empty dependency array.

  // asynchronous function to fetch tasks from json server
  const fetchTasks  = async () => {
    const res = await fetch('http://localhost:5000/tasks');
    const data = await res.json();

    return data
  }
//  add task function

const addTask = async (task) => {
  const res = await fetch('https://localhost:5000/tasks', {
    method: 'POST', 
    headers: {
      'Content-type': 'application/json'
    }, 
    body: JSON.stringify(task)
  })

  const data = await res.json()

  setTasks([...tasks, data]) //* setTasks spreads through the existing tasks in the array and appends data to the array, which is the data input by the user.


   // todo commented out code section. the above operations allow data to persist to the database when added 

    /** const id = Math.floor(Math.random() * 1000) + 1

   const newTask = { id, ...task};

   setTasks([...tasks, newTask]);
   **/
} 

// fetch task
const fetchTask  = async (id) => {
  const res = await fetch(`http://localhost:5000/tasks/${id}`);
  const data = await res.json();

  return data
}

// delete task function

const deleteTask = async (id) => {
  await fetch(`https://localhost:5000/tasks/${id}`, {
    method: 'DELETE'
  })

  setTasks(tasks.filter( (task) => task.id !== id));
}

//  toggle reminder function

const toggleReminder = async (id) => {
  const taskToToggle = await fetchTask(id)

  const updatedTask = {...taskToToggle, reminder: !taskToToggle.reminder}

  const res = await fetch(`https://localhost:5000/tasks/${id}`, 
  {
    method: 'PUT', 
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(updatedTask) 
  })

  const data = await res.json()

  

  setTasks(
    tasks.map(task =>
      task.id === id
      ? {...task, reminder: !data.reminder}
      : task ))
}

  return (
    <Router>
      <div className="App">
        <Header
          subtitle='This is a task manager'
          onAdd={(e) => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        /> 
        
        <Route path='/' exact render={ (props) => (
          <>
            {showAddTask && <AddTask onAdd={addTask} />}
            {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'There are no tasks to display'}
          </>
        )}/>
        
        <Route path='/about' component={About} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;


// todo: Find out why the onToggle function isn't changing the value of the reminder on double click as it's supposed to
// * all components to be rendered should be wrapped around the router component 
// * attributes can be passed into the components and later accessed through the defined properties passed as parameters