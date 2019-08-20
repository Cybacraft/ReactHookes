import React, { useState } from "react";
import "./App.css";

function Todo({ todo, index, completeTodo, removeTodo}) {
  return <div style={{textDecoration: todo.isCompleted? 'line-through':''}} 
  className="todo">{todo.text}
  <div>
   <button onClick={()=>completeTodo(index)}>Completed</button>
   <button onClick={()=>removeTodo(index)}>x</button>
   </div>
   </div>;
}

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text className=input"
        value={value}
        placeholder="Add Todo"
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}

function App() {
  const [todos, setTodos] = useState([
    {
      text: "Introduction",
      isCompleted: false
    },
    {
      text: "Installation",
      isCompleted: false
    },
    {
      text: "Creating components",
      isCompleted: false
    },
    {
      text: "mutable states ",
      isCompleted: false
    },
    {
      text: "inmutable props ",
      isCompleted: false
    },
    {
      text: "Routing ",
      isCompleted: false
    },
    {
      text: "Styling ",
      isCompleted: false
    },
    {
      text: "Redux ",
      isCompleted: false
    },
    {
      text: "Firebase ",
      isCompleted: false
    },
    {
      text: "Hookes ",
      isCompleted: false
    },
    {
      text: "... ",
      isCompleted: false
    },
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo=index=>{
   const newTodos =[...todos];
   newTodos[index].isCompleted=true;
   setTodos(newTodos); 
  }

  const removeTodo=index=>{
   const newTodos =[...todos];
   newTodos.splice(index,1);
   setTodos(newTodos);
  }

  return (
    <div><h1 className="text">LEARNING REACT</h1>
    <div className="apps">
      <div className="app">
        <div className="todo-list">
          {todos.map((todo, index) => (
            <Todo key={index} index={index} todo={todo} completeTodo={completeTodo} removeTodo={removeTodo}/>
          ))}
          <TodoForm addTodo={addTodo} />
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
