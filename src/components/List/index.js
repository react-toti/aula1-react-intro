import React from 'react';
import Task from '../Task';

const List = ({todos, remove}) =>{
  return(
    <ul>
      {todos.map((todo, index) =>{
        return(<Task todo={todo} remove={remove} key={index}></Task>)
      })}
    </ul>
  )
};

export default List;