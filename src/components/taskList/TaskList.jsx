import TaskCard from "./TaskCard";

const TaskList = ({ removeTask, setEditTask, taskToEdit, tasks }) => {
  console.log(tasks);

  const tasksToRender = tasks.filter(
    (task) => !taskToEdit || task.id !== taskToEdit.id
  );

  return (
    <div
      className="d-flex flex-wrap justify-content-center container overflow-auto"
      style={{ maxHeight: "60vh" }}
    >
      {tasks.length === 0 ? (
        <h2 className=" text-center">No task added yet</h2>
      ) : (
        tasksToRender.map((task) => (
          <TaskCard
            key={task.id}
            _task={task}
            remove={removeTask}
            edit={setEditTask}
          />
        ))
      )}
    </div>
  );
};

export default TaskList;
