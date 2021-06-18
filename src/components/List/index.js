import React from 'react';
import Task from '../Task';

const List = ({todos, remove}) =>{
  return(
    <div>
      <div>
        <h2>Prioridade Alta</h2>
        <ul>
          {todos.map((todo, index) =>{
            if(todo.priority === "alta") {
              return (<Task todo={todo} remove={remove} key={index}></Task>)
            }
          })}
        </ul>
      </div>  
      <div>
        <h2>Prioridade Media</h2>
        <ul>
          {todos.map((todo, index) =>{
            if(todo.priority === "media") {
              return (<Task todo={todo} remove={remove} key={index}></Task>)
            }
          })}
        </ul>
      </div>  
      <div>
        <h2>Prioridade Baixa</h2>
        <ul>
          {todos.map((todo, index) =>{
            if(todo.priority === "baixa") {
              return (<Task todo={todo} remove={remove} key={index}></Task>)
            }
          })}
        </ul>
      </div>  
    </div>
  )
};

export default List;