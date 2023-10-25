import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteTask } from "../features/tasks/taskSlice";

export const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <div>
      <header>
        <h1>Tasks ({tasks.length})</h1>

        <Link to="/create-task">Create Task</Link>
      </header>

      <div>
        {tasks.map((task) => (
          <div key={task.id}>
            <header>
              <h3>{task.title}</h3>
              <div>
                <Link to={`/edit-task/${task.id}`}>Edit</Link>
                <button onClick={() => handleDelete(task.id)}>delete</button>
              </div>
            </header>
            <p>{task.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
