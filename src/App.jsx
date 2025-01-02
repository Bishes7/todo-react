import { useState } from "react";
import "./App.css";

function App() {
  // first make a state to store a task typed by the users
  const [task, setTask] = useState("");
  // lets make a list to store the attay of the tasks
  const [list, setList] = useState([]);

  const handleOnchange = (e) => {
    const { value } = e.target;
    setTask(value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setList([...list, { text: task, isCompleted: false }]);
    setTask("");
  };

  // lets add a delete functionality
  const handleOnDelete = (index) => {
    const updatedList = list.filter((item, i) => i !== index);
    setList(updatedList);
  };

  // now lets add a toggle completed function

  const toggleCompleted = (index) => {
    const updatedList = list.map((item, i) =>
      i === index ? { ...item, isCompleted: !item.isCompleted } : item
    );
    setList(updatedList);
  };

  return (
    <div className="wrapper">
      <div className="container">
        <form onSubmit={handleOnSubmit}>
          <input
            type="text"
            placeholder="Add Task"
            value={task}
            onChange={handleOnchange}
          />
          <button>Add Task</button>
        </form>
        <div className="list">
          <ul>
            {list.map((item, i) => (
              <li
                key={i}
                style={{
                  textDecoration: item.isCompleted ? "line-through" : "none",
                }}
              >
                {item.text}
                <button onClick={() => toggleCompleted(i)}>
                  {" "}
                  {item.isCompleted ? "Completed" : "Mark"}
                </button>
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
