import { useState } from "react";
import "./App.css";

function App() {
  const [list, setList] = useState([]);
  const [task, setTask] = useState("");

  const handleonSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      setList([...list, task]);
      setTask("");
    }
  };

  const handleOnDelete = (index) => {
    const updatedList = list.filter((item, i) => i !== index);
    setList(updatedList);
  };

  return (
    <div className="wrapper">
      <div className="container">
        <form onSubmit={handleonSubmit}>
          <input
            type="text"
            value={task}
            placeholder="Add Task"
            onChange={(e) => setTask(e.target.value)}
          />
          <button type="submit">Add Task</button>
        </form>
        <div className="list">
          <ul>
            {list.map((item, i) => (
              <li key={i}>
                {item}
                <button onClick={() => handleOnDelete(i)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
