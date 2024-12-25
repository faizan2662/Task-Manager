import React from "react";
import { useParams } from "react-router-dom";
import TaskList from "../components/TaskList";

const CategoryTasks = ({ tasks, setTasks }) => {
    const { category } = useParams();

    const filteredTasks = tasks.filter((task) => task.category === category);

    const toggleComplete = (index) => {
        const taskIndex = tasks.findIndex(
            (task) => task.category === category && tasks.indexOf(task) === index
        );
        const updatedTasks = tasks.map((task, i) =>
            i === taskIndex ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
    };

    const deleteTask = (index) => {
        const taskIndex = tasks.findIndex(
            (task) => task.category === category && tasks.indexOf(task) === index
        );
        setTasks(tasks.filter((_, i) => i !== taskIndex));
    };

    return (
        <div>
            <h4 className="text-center mb-4">Tasks in Category: {category}</h4>
            <TaskList
                tasks={filteredTasks}
                toggleComplete={toggleComplete}
                deleteTask={deleteTask}
            />
        </div>
    );
};

export default CategoryTasks;
