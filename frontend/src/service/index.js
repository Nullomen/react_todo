import axios from 'axios';

export const getAllTodos = async () => {
  const response = await axios.get(`/todo/gettodos`);
  console.log(response.data);
  return response.data;
}

export const createTodo = async (text) => {
  const response = await axios.post(`/todo/addtodo?text=${text}`)
  return response.data;
};

export const toggleTodo = async (id) => {
  const response = await axios.put(`/todo/toggleTodo?id=${id}`);
  return response;
};

export const checkAll = async () => {
  const response = await axios.put(`/todo/checkAll`);
  return response;
};

export const deleteItem = async (id) => {
  const response = await axios.delete(`/todo/deleteTodo?id=${id}`);
  return response;
};

export const deleteCompleted = async () => {
  const response = await axios.delete(`/todo/deleteChecked`);
  return response;
};
