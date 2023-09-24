import React from 'react';
import ToDoItem from './ToDoItem';
const ToDos = (props) => {
  let myStyle = {
    minHeight: '100vh',
    margin: '40px auto',
  };
  return (
    <div className="container" style={myStyle}>
      <h3 className="my-3">ToDos List</h3>
      {props.todos.length === 0
        ? 'No ToDos to Display'
        : props.todos.map((todo) => {
            return (
              <ToDoItem key={todo.sno} todo={todo} onDelete={props.onDelete} />
            );
          })}
    </div>
  );
};

export default ToDos;
