import React from "react";
import Label from "./components/label";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import "./index.css";

const App = () => {
  return (
    <div className="app">
      <Label />
      <TaskInput />
      <TaskList />
    </div>
  );
};

export default App;
