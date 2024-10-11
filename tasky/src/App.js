import React, { useState } from 'react';
import './App.css';
import Task from './components/Task';

function App() {
  const [ taskState, setTaskState ] = useState({
    tasks: [
      { title:"Dishes", description: "Empty dishwasher", deadline: "Today" },
      { title: "Laundry", description: "Fold clothes and put away", deadline: "Tomorrow" },
      { title: "Tidy up", deadline: "Today" }
    ]
  });
  return (
    <div className="container">
      <h1>Tasky</h1>
      <Task title="Laundry" deadline="Tomorrow">
Fold laundry and put away
      </Task>
      <Task title="Dishes" deadline="Today" >
      emptydishwasher
        </Task>
      <Task title="Laundry" deadline="Tomorrow" />
      <Task title="Tidy" deadline="Today" />

    </div>
  );
}

export default App;

