import React from 'react';
import ToDo from '../ToDo';

const ToDoList = () => {
  const listOfToDos = [
    'Ajeitar o ESLint',
    'Entender Class Components',
    'Lifecycle Methods',
  ];

  return (
    <ul>
      {listOfToDos.map((item) => (<ToDo>{item}</ToDo>))}
    </ul>
  );
};

export default ToDoList;
