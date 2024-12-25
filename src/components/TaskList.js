import React from "react";
import Task from "./Task";

const TaskList = ({ tasks, toggleComplete, deleteTask }) => {
    return (
        <div>
            {tasks.length > 0 ? (
                tasks.map((task, index) => (
                    <Task
                        key={index}
                        task={task}
                        toggleComplete={() => toggleComplete(index)}
                        deleteTask={() => deleteTask(index)}
                    />
                ))
            ) : (
                <p className="text-center text-muted">No tasks to display.</p>
            )}
        </div>
    );
};

export default TaskList;