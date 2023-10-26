import { TaskList } from "./components/TaskList";
import { Route, Routes } from "react-router-dom";
import { TaskForm } from "./components/TaskForm";

export const App = () => {
  return (
    <>
      <div className="bg-zinc-900 h-screen text-white">
        <div className="flex items-center justify-center h-full">
          <Routes>
            <Route path="/" element={<TaskList />} />
            <Route path="/create-task" element={<TaskForm />} />
            <Route path="/edit-task/:id" element={<TaskForm />} />
          </Routes>
        </div>
      </div>
    </>
  );
};
