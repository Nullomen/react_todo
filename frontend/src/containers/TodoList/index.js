import React, { useState, useEffect } from 'react';
import Item from '../../components/Item/index';
import FilterPanel from '../../components/FilterPanel/index';
import Input from '../../components/Input/index';
import { useDispatch, useSelector } from 'react-redux';
import * as action from "../../redux/todo/action";
import './styles.css';

const TodoList = () => {
  const dispatch = useDispatch();
  const {todoData} = useSelector((state) => state.todo);
  const [filterFlag, setFilterFlag] = useState(null);

  const handleAddNewItem =  (value) => {  dispatch(action.addTodo(value)) };
  const handleToggleItem =  (id) => {  dispatch(action.toggleTodo(id)) };
  const handleCheckAll =  () => {  dispatch(action.checkAll()) };
  const handleDeleteItem =  (id) => {  dispatch(action.deleteItem(id)) };
  const handleDeleteCompleted =  () => {  dispatch(action.deleteCompleted()) };
  const handleOnChangeFlag = (flag) => { setFilterFlag(flag) };
    
  // const filteredList = useMemo(() => {
  //   console.log(todoData, 'memo');
  //   return (filterFlag == null) ? todoData : todoData.filter((item) => item.isChecked === filterFlag)
  // }, [todoData, filterFlag]
  // );
  // console.log(filteredList, 'out', todoData);

  const filteredList = (filterFlag == null) ? todoData : todoData.filter((item) => item.isChecked === filterFlag);
    
  useEffect(() => {
    dispatch(action.getTodosList())
  }, []);
  
  return (
    <div className='main-div'>
      <h4>Your todo list</h4>
      <div className='shadow-lg p-0 mb-5 bg-grey rounded'>
        <Input onAddNews={handleAddNewItem} />
        {
          !!todoData.length &&
          <>
            <div className='todo-list-div'>
              {filteredList.map((item) => (
                <Item
                  key={item._id}
                  text={item.text}
                  isChecked={item.isChecked}
                  changeChecked={() => handleToggleItem(item._id)}
                  delItem={() => handleDeleteItem(item._id)} />
              ))}
            </div>
            <div className='footer-div'>
              <span onClick={handleCheckAll}>
                {(todoData.filter((it) => !it.isChecked)).length} task left
              </span>
              <FilterPanel setFilterFlag={handleOnChangeFlag} />
              {!!todoData.filter((it) => it.isChecked).length ?
                <span onClick={handleDeleteCompleted} > Clear completed </span> : <span className='none-span'> Clear completed </span>}
            </div>
          </>
        }
      </div>
    </div>
  );
}

export default TodoList;
