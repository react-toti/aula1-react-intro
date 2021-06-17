import React from 'react';
import Task from '../Task';

const ListAlta = ({todos, remove}) =>{
  if(todos.length===0){
    return <div></div>
  }else
  return(
    <>
      <h1>Prioridade Alta:</h1>
      <ul>
        {todos.map((todo, index) =>{
          return(<Task todo={todo} remove={remove} key={index}></Task>)
          
        })}
      </ul>
    </>
  )
};

export default ListAlta;