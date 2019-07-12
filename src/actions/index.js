export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

let nextTodoId = 0;
export const addTodo = text => {
  return {
    type: ADD_TODO,
    id: nextTodoId++,
    text,
    //text: text,
  };
};

export const toggleTodo = id => {
  return {
    type: TOGGLE_TODO,
    id,
    //id: id
  };
};
