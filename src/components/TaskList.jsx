import React from 'react';
import { useSelector } from 'react-redux';
import TaskItem from './TaskItem';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);

  return (
    <div>
      {tasks.map((task, index) => (
        <TaskItem key={index} task={task} index={index} />
      ))}
    </div>
  );
};

export default TaskList;
