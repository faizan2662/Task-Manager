import React from "react";
import AddTaskForm from "../components/AddTaskForm";
import TaskList from "../components/TaskList";

const AllTasks = ({ tasks, setTasks, categories }) => {
    const addTask = (newTask) => setTasks([...tasks, newTask]);
    const toggleComplete = (index) => {
        const updatedTasks = tasks.map((task, i) =>
            i === index ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
    };
    const deleteTask = (index) => setTasks(tasks.filter((_, i) => i !== index));

    return (
        <div>
            <AddTaskForm addTask={addTask} categories={categories} />
            <TaskList tasks={tasks} toggleComplete={toggleComplete} deleteTask={deleteTask} />
        </div>
    );
};

export default AllTasks;