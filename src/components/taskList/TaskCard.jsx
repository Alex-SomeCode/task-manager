const TaskCard = ({ _task, remove, edit }) => {
  const { id, isDone, task, topic, result } = _task;
  const date = new Date(id);

  return (
    <div
      key={id}
      className="card m-3 "
      style={{ width: "18rem", backgroundColor: "bisque" }}
    >
      <div className="card-body border-black">
        <h5 className="card-title">{topic}</h5>
        <p className="card-text">{task}</p>
        <p className="card-text">is done: {isDone ? "YES" : "NO"}</p>
        <p>begin: {date.toLocaleString()}</p>
        <p>{!result ? "Unknown Result" : result}</p>

        <div className="d-flex justify-content-between">
          <button
            onClick={() => remove(id)}
            className="btn btn-outline-danger mt-1"
          >
            remove task
          </button>
          <button
            onClick={() => edit({ topic, task, id, isDone, result })}
            className="btn btn-outline-primary mt-1"
          >
            edit task
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
