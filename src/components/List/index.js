import React from 'react';
import Task from '../Task';

const List = ({todos, remove}) =>{
  return(
    <dev>
      <dev>
        <h2>Prioridade Alta</h2>
        <ul>
          {todos.map((todo, index, priority) =>{
            if(priority !== "media" && priority !== "baixa") {
              return (<Task todo={todo} remove={remove} key={index}></Task>)
            }
          })}
        </ul>
      </dev>  
      <dev>
        <h2>Prioridade Media</h2>
        <ul>
          {todos.map((todo, index, priority) =>{
            if(priority.value !== "alta" && priority.value !== "baixa") {
              return (<Task todo={todo} remove={remove} key={index}></Task>)
            }
          })}
        </ul>
      </dev>  
      <dev>
        <h2>Prioridade Baixa</h2>
        <ul>
          {todos.map((todo, index, priority) =>{
            if(priority.value !== "medio" && priority.value !== "alta") {
              return (<Task todo={todo} remove={remove} key={index}></Task>)
            }
          })}
        </ul>
      </dev>  
    </dev>
  )
};

export default List;