import "./App.css";
import Header from "./MyComponents/Header";
import { Addtodo } from "./MyComponents/Addtodo";
import { Todos } from "./MyComponents/Todos";
import { Footer } from "./MyComponents/Footer";
import React, { useState } from 'react';

function App() {
  const onDelete = (todo) => {
    console.log("I am onDelete Function of todo", todo);
    // Deleting this way in react does not work
    // let index = todos.indexOf(todo);
    // todos.splice(index,1);

    setTodos(todos.filter((e) => {
      return e!==todo;
    }))
  }

  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  };

  const [todos, setTodos] =useState([
    {
      sno: 1,
      title: "Go to the market",
      description: "You need to buy stuff",
    },
    {
      sno: 2,
      title: "Update Portfolio",
      description: "You need to Update your online portfolio",
    },
    {
      sno: 3,
      title: "Enigma Induction Mock Test",
      description: "You need to test the enigma induction mock test",
    }
  ]);

  return (
    <>
      <Header title="My Tods List" searchBar={true} />
      <Addtodo addTodo={addTodo}/>
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer />
    </>
  );
}

export default App;
