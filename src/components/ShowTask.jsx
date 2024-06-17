import React from "react";
import "./ShowTask.css";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

export const ShowTask = ({ task, setTask, taskList, setTaskList }) => {
  const tasks = [
    { id: 1001, name: "Task A", time: "time" },
    { id: 1002, name: "Task B", time: "time" },
    { id: 1003, name: "Task C", time: "time" },
    { id: 1004, name: "Task D", time: "time" },
  ];

  const handleEdit = (id) => {
    const selectedTask = taskList.find(item => item.id === id);
    setTask(selectedTask)
  };

  const handleDelete = (id) => {
    const updatedTaskList = taskList.filter((item) => item.id !== id);
    setTaskList(updatedTaskList);
  };

  return (
    <section className="showTask">
      <div className="head">
        <div>
          <span className="title">Todo</span>
          <span className="count">{taskList.length}</span>
        </div>
        <button className="clearAll" onClick={() => setTaskList([])}>
          Clear All
        </button>
      </div>
      <ul>
        {taskList.map((item) => (
          <li key={item.id}>
            <p>
              <span className="name">{item.name}</span>
              <span className="time">{item.time}</span>
            </p>
            <span className="edit" onClick={() => handleEdit(item.id)}>
              <FaEdit />
            </span>
            <span className="delete" onClick={() => handleDelete(item.id)}>
              <MdDeleteForever />
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};
