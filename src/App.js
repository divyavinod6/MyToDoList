import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './MyComponents/Header';
import AddToDo from './MyComponents/AddToDo';
import ToDos from './MyComponents/ToDos';
import Footer from './MyComponents/Footer';
import About from './MyComponents/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  let initTodo;
  if (localStorage.getItem('todos') === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem('todos'));
  }
  const onDelete = (todo) => {
    console.log('i am on delete ', todo);

    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem('todos', JSON.stringify(todos));
  };
  const addTodo = (title, desc) => {
    console.log('i am adding this to todo ', title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 1;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    let myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
    console.log('myTodo ', myTodo);
  };
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  return (
    <div>
      <Router>
        <Header title="MyToDoList" searchbar={false} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <AddToDo addTodo={addTodo} />
                <ToDos todos={todos} onDelete={onDelete} />
              </>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
