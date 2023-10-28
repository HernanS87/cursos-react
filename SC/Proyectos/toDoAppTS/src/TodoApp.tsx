import { useState } from "react";
import { v4 as uuid } from "uuid";
import { TaskList } from './components/TaskList';

export type Tarea = {
  tarea: string;
  id?: string;
};

export const TodoApp = () => {

  const initialState: Tarea = {
    tarea: "",
  };

  const [nuevaTarea, setNuevaTarea] = useState<Tarea>(initialState);
  const [listaTareas, setListaTareas] = useState<Tarea[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (nuevaTarea.tarea.trim() === '') return
    setListaTareas([...listaTareas, { ...nuevaTarea, id: uuid() }]);
    setNuevaTarea(initialState)
  };

  const handleDelete = (id?: string) => {
    setListaTareas((lista) => lista.filter((t) => t.id !== id));
  };

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <form onSubmit={handleSubmit} className='flex'>
        <input
          type="text"
          value={nuevaTarea.tarea}
          onChange={(e) =>
            setNuevaTarea({ ...nuevaTarea, tarea: e.target.value })
          }
        />
      <button>Agregar</button>
      </form>
      <TaskList listaTareas={listaTareas} handleDelete={handleDelete}/>
    </div>
  );
};
