import React from 'react';

const Task = ({todo, remove}) =>{
  return(
    <li>
      {todo.text}
      <button onClick={(e)=>remove(e, todo.text)}>-</button>
    </li>
  )
}

export default Task;