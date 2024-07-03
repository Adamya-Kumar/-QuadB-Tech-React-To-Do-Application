import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions';

const TaskInput = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() === '') return;
    dispatch(addTask(task));
    setTask('');
  };

  return (
    <div className='container'>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a new task"
      />
      <button type="submit" className='addtask'>Add Task</button>
    </form>
    </div>
  );
};

export default TaskInput;
