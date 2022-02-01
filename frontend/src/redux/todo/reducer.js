import * as types from './constants';

const initialState = {
  todoData: [],
};

const todo = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ALL_TODOS_SUCCESS:
      return {
        ...state,
        todoData: action.payload,
      };
    case types.ADD_TODO_SUCCESS:
      return {
        ...state,
        todoData: state.todoData.concat([action.payload]),
      };
    case types.TOGGLE_TODO_SUCCESS:
      return {
        ...state,
        todoData: state.todoData.map(item => (item._id === action.payload._id) ? {...item, isChecked: !item.isChecked} : item),
      };
    case types.CHECK_ALL_SUCCESS:
      return {
        ...state,
        todoData: state.todoData.map(item => ({...item, isChecked: true})),
      };
    case types.DELETE_ITEM_SUCCESS:
      return {
        ...state,
        todoData: state.todoData.filter(item => (item._id !== action.payload._id)),
      };
    case types.DELETE_COMPLETED_SUCCESS:
      return {
        ...state,
        todoData: state.todoData.filter(item => (item.isChecked === false)),
      };
    default:
      return state;
  };
};
export default todo;
