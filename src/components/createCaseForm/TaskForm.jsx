import { useState, useEffect } from "react";
import "./TaskForm.scss";
const CreateCaseForm = ({ addTask, taskToEdit }) => {
  const [topic, setTopic] = useState("");
  const [task, setTask] = useState("");
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (taskToEdit) {
      setTopic(taskToEdit.topic);
      setTask(taskToEdit.task);
      setIsDone(taskToEdit.isDone);
    }
  }, [taskToEdit]);

  const onStatusChange = (e) => {
    setIsDone(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (topic.trim() && task.trim()) {
      const newCase = {
        id: taskToEdit ? taskToEdit.id : Date.now(),
        topic: topic,
        task: task,
        isDone: isDone,
      };

      addTask(newCase);
      setTopic("");
      setTask("");
      setIsDone(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 mb-4 caseForm">
      <div className="container  border-bottom pb-4">
        <input
          type="text"
          className="form-control mb-1"
          placeholder="Task topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />
        <textarea
          type="text"
          className="form-control mb-1 "
          placeholder="Task text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <div>
          <h5>
            isDone
            <input
              type="checkbox"
              onChange={onStatusChange}
              className="container"
              checked={isDone}
            />
          </h5>
        </div>
        <button className="btn btn-info container" type="submit">
          {taskToEdit ? "Save" : "Add"}
        </button>
      </div>
    </form>
  );
};

export default CreateCaseForm;
