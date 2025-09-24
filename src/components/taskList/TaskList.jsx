import TaskCard from "./TaskCard";

const CaseList = ({ removeTask, setEditTask, taskToEdit, tasks }) => {
  console.log(tasks);

  const tasksToRender = tasks.filter(
    (task) => !taskToEdit || task.id !== taskToEdit.id
  );

  return (
    <div
      className="d-flex flex-wrap justify-content-center container overflow-auto "
      style={{ maxHeight: "45vh" }}
    >
      {tasks.length === 0 ? (
        <h2 className=" text-center">No task added yet</h2>
      ) : (
        tasksToRender.map((_case) => (
          <TaskCard
            remove={removeTask}
            edit={setEditTask}
            key={_case.id}
            id={_case.id}
            topic={_case.topic}
            task={_case.task}
            isDone={_case.isDone}
          />
        ))
      )}
    </div>
  );
};

export default CaseList;
