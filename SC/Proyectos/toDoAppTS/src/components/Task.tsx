type Props = {
  tarea: string;
  handleDelete: () => void;
};
export const Task = ({ tarea, handleDelete }: Props) => {
  return (
    <div className="task">
      <span>{tarea}</span>
      <button onClick={() => handleDelete()}>Borrar</button>
    </div>
  );
};
