import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AllTasks from "./pages/AllTasks";
import CategoryTasks from "./pages/CategoryTasks";

const App = () => {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );
  const [categories] = useState(["Work", "Personal", "School"]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <Router>
      <Header />
      <div className="container my-5">
        <Routes>
          <Route
            path="/"
            element={<AllTasks tasks={tasks} setTasks={setTasks} categories={categories} />}
          />
          <Route
            path="/category/:category"
            element={<CategoryTasks tasks={tasks} setTasks={setTasks} />}
          />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;