import { Tarea } from "../TodoApp";
import { Task } from "./Task";

type Props = {
  listaTareas: Tarea[];
  handleDelete: (id?: string) => void;
};
export const TaskList = ({ listaTareas, handleDelete }: Props) => {
  return (
    <div className="taskList">
      {listaTareas.map((t) => (
        <Task
          key={t.id}
          tarea={t.tarea}
          handleDelete={() => handleDelete(t.id)}
        />
      ))}
    </div>
  );
};
