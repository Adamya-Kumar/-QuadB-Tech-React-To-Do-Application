import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, editTask } from '../redux/actions';

const TaskItem = ({ task, index }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTask, setNewTask] = useState(task);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(index));
  };

  const handleEdit = () => {
    if (isEditing) {
      dispatch(editTask(index, newTask));
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className='item'>
      {isEditing ? (
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
      ) : (
        <span>{task}</span>
      )}
      <div>
      <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
      <button onClick={handleDelete}className='delete'>Delete</button>
      </div>
    </div>
  );
};

export default TaskItem;
