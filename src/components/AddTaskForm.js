import React, { useState } from "react";

const AddTaskForm = ({ addTask, categories }) => {
    const [text, setText] = useState("");
    const [category, setCategory] = useState(categories[0]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim() !== "") {
            addTask({ text, category, completed: false });
            setText("");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-light p-3 rounded shadow-sm mb-4">
            <h4 className="mb-3">Add New Task</h4>
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Task description"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    required
                />
            </div>
            <div className="mb-3">
                <select
                    className="form-select"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    {categories.map((cat) => (
                        <option key={cat} value={cat}>{cat}</option>
                    ))}
                </select>
            </div>
            <button type="submit" className="btn btn-primary w-100">Add Task</button>
        </form>
    );
};

export default AddTaskForm;