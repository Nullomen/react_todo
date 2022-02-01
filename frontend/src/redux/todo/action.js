import * as types from './constants';
import '../../service/index';
import * as service from '../../service/index';

export const getTodosList = () => async (dispatch) => {
  try {
    dispatch({ type: types.GET_ALL_TODOS_START, });
    const responce = await service.getAllTodos();
    dispatch({
      type: types.GET_ALL_TODOS_SUCCESS,
      payload: responce,
    });
  } catch (error) {
    dispatch({
      type: types.GET_ALL_TODOS_ERROR,
      payload: error,
    });
  }
};

export const addTodo = text => async (dispatch) => {
  try {
    dispatch({ type: types.ADD_TODO_START, });
    const responce = await service.createTodo(text);
    dispatch({
      type: types.ADD_TODO_SUCCESS,
      payload: responce,
    });
  } catch (error) {
    dispatch({
      type: types.ADD_TODO_ERROR,
      payload: error,
    });
  }
};

export const toggleTodo = id => async (dispatch) => {
  try {
    dispatch({ type: types.TOGGLE_TODO_START, });
    const responce = await service.toggleTodo(id);
    dispatch({
      type: types.TOGGLE_TODO_SUCCESS,
      payload: responce.data,
    });
  } catch (error) {
    dispatch({
      type: types.TOGGLE_TODO_ERROR,
      payload: error,
    });
  }
};

export const checkAll = () => async (dispatch) => {
  try {
    dispatch({ type: types.CHECK_ALL_START, });
    const responce = await service.checkAll();
    dispatch({
      type: types.CHECK_ALL_SUCCESS,
      payload: responce.data,
    });
  } catch (error) {
    dispatch({
      type: types.CHECK_ALL_ERROR,
      payload: error,
    });
  }
};

export const deleteItem = (id) => async (dispatch) => {
  try {
    dispatch({ type: types.DELETE_COMPLETED_START, });
    const responce = await service.deleteItem(id);
    dispatch({
      type: types.DELETE_ITEM_SUCCESS,
      payload: responce.data,
    });
  } catch (error) {
    dispatch({
      type: types.DELETE_COMPLETED_ERROR,
      payload: error,
    });
  }
};

export const deleteCompleted = () => async (dispatch) => {
  try {
    dispatch({ type: types.DELETE_COMPLETED_START, });
    const responce = await service.deleteCompleted();
    dispatch({
      type: types.DELETE_COMPLETED_SUCCESS,
      payload: responce.data,
    });
  } catch (error) {
    dispatch({
      type: types.DELETE_COMPLETED_ERROR,
      payload: error,
    });
  }
};
