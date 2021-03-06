import React, { Fragment, useState } from "react";
import TodoInput from "./components/todoInput";
import TodosList from "./components/todosList";

function App() {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    try {
      const response = await fetch("/todos");
      const jsonData = await response.json();
      setTodos(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <div className="container mx-auto px-4">
        <TodoInput getTodos={getTodos} />
        <TodosList todos={todos} getTodos={getTodos} setTodos={setTodos} />
      </div>
    </Fragment>
  );
}

export default App;
