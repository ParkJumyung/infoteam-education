import './App.css';
import React, { useState } from 'react';
function Work({ name, finish, onClick }) {

  return (
    <li className='list' onClick={onClick}>
      {finish ? (
        <del>
          &#9633; {name}
        </del>
      ) : (
        <span>
          &#9633; {name}
        </span>

      )}
    </li>
  );
}

function App() {
  const [tasks, setTasks] = useState([
    { name: "화학과제 하기", finish: false },
    { name: "심화글쓰기  과제하기", finish: false },
    { name: "운동하기", finish: false },
    { name: "미적분 복습하기", finish: false },
    { name: "물리학 과제하기", finish: false }
  ]);
  const [newTask, setNewTask] = useState("");
  const [taskCount, setTaskCount] = useState(tasks.length);
  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };
  const handleInsert = () => {
    if (newTask.trim() !== "") {
      const updatedTasks = [...tasks, { name: newTask, finish: false }];
      setTasks(updatedTasks);
      setNewTask("");
      setTaskCount(taskCount + 1);
    }
  };
  const handleTaskClick = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].finish = !updatedTasks[index].finish;
    setTasks(updatedTasks);
    if (updatedTasks[index].finish) {
      setTaskCount(taskCount - 1);
    } else {
      setTaskCount(taskCount + 1);
    }
  };

  return (
    <section>
      <h1> To do list</h1>
      <ul>
        {tasks.map((task, index) => (
          <Work key={index} name={task.name} finish={task.finish} onClick={() => handleTaskClick(index)} />
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={newTask}
          onChange={handleInputChange}
          placeholder="일정 추가"
        />
        <button onClick={handleInsert}>Insert</button>
      </div>
      <h2 className='number'>{taskCount}</h2>
    </section>
  );
}


export default App;

