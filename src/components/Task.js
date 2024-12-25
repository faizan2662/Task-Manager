import React from "react";

const Task = ({ task, toggleComplete, deleteTask }) => {
    return (
        <div className="d-flex justify-content-between align-items-center bg-light p-3 rounded shadow-sm mb-2">
            <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
                {task.text} - <em>{task.category}</em>
            </span>
            <div>
                <button className="btn btn-sm btn-success mx-1" onClick={toggleComplete}>
                    {task.completed ? "Undo" : "Complete"}
                </button>
                <button className="btn btn-sm btn-danger" onClick={deleteTask}>Delete</button>
            </div>
        </div>
    );
};

export default Task;