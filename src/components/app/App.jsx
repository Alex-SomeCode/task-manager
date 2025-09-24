import { useState, useEffect } from "react";

import "./App.css";

import Header from "../header/Header.jsx";
import Footer from "../footer/Footer.jsx";
import CreateCaseForm from "../createCaseForm/TaskForm.jsx";
import CaseList from "../taskList/TaskList.jsx";

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const [taskToEdit, setEditTask] = useState(null);

  const handleRemoveTask = (taskIdToRemove) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskIdToRemove);
    setTasks(updatedTasks);
  };

  const handleAddTask = (newTask) => {
    if (taskToEdit) {
      console.log(taskToEdit);
      tasks[tasks.findIndex((task) => task.id == taskToEdit.id)] = newTask;
      setTasks([...tasks]);
      setEditTask(null);
      return;
    }

    setTasks([...tasks, newTask]);
  };

  return (
    <div className="App bg-dark" style={{ minHeight: "100vh" }}>
      <Header />
      <CreateCaseForm addTask={handleAddTask} taskToEdit={taskToEdit} />
      <CaseList
        removeTask={handleRemoveTask}
        setEditTask={setEditTask}
        taskToEdit={taskToEdit}
        tasks={tasks}
      />
      <Footer />
    </div>
  );
}

export default App;
