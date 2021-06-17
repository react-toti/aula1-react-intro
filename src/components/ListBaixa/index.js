import React from 'react';
import Task from '../Task';

const ListBaixa = ({todos, remove}) =>{
  if(todos.length===0){
    return <div></div>
  }else
  return(
    <div>
      <h1>Prioridade Baixa:</h1>
      <ul>
        {todos.map((todo, index) =>{
          return(<Task todo={todo} remove={remove} key={index}></Task>)
        })}
      </ul>
    </div>
  )
};

export default ListBaixa;