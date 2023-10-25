import "./App.css";
import { TaskList } from "./components/TaskList";
import { Route, Routes } from "react-router-dom";
import { TaskForm } from "./components/TaskForm";

export const App = () => {
  return (
    <>
      <div>
        <div>
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
