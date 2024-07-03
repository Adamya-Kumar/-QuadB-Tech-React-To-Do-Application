const initialState = {
    tasks: []
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TASK':
        return {
          ...state,
          tasks: [...state.tasks, action.payload]
        };
      case 'DELETE_TASK':
        return {
          ...state,
          tasks: state.tasks.filter((task, index) => index !== action.payload)
        };
      case 'EDIT_TASK':
        return {
          ...state,
          tasks: state.tasks.map((task, index) =>
            index === action.payload.index ? action.payload.newTask : task
          )
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  