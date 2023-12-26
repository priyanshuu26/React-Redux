import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToDo, clearAll, removeToDo } from './todoListSlice';

function TodoList() {
  const [val, setVal] = useState('');
  const dispatch = useDispatch();
  const datas = useSelector((state) => state.todoList);
  const handleClick = () => {
    dispatch(addToDo(val));
    setVal('');
  };
  const remove = (value) => {
    dispatch(removeToDo(value));
  };
  const clear = () => {
    dispatch(clearAll());
  };
  return (
    <div>
      <div>
        <h2>Todo List </h2>
      </div>
      <div>
        <input
          type="text"
          onChange={(e) => setVal(e.target.value)}
          value={val}
        />
        <button type="button" onClick={() => handleClick()}>
          add
        </button>
      </div>
      <ul>
        {datas &&
          datas.map((data, index) => (
            <div>
              <li key={index}>{data}</li>
              <button type="button" onClick={(key) => remove(index)}>
                remove
              </button>
            </div>
          ))}
        <hr />
        <button type="button" onClick={() => clear()}>
          Clear all
        </button>
      </ul>
    </div>
  );
}

export default TodoList;
