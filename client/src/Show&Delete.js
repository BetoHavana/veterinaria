import React, { Fragment, useEffect, useState } from "react";

import EditTodo from "./edit";

const ShowNDelete = () => {
  const [todos, setTodos] = useState([]);

  //delete todo function

  const deleteTodo = async id => {
    try {
      const deleteTodo = await fetch(`/gatos/${id}`, {
        method: "DELETE"
      });

      setTodos(todos.filter(todo => todo.cat_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const getTodos = async () => {
    try {
      const response = await fetch("/gatos");
      const jsonData = await response.json();

      setTodos(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <Fragment>
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map(todo => (
            <tr key={todo.cat_id}>
              <td>{todo.cat_name}</td>
              <td>{todo.cat_age}</td>
              <td>
                <EditTodo todo={todo} />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteTodo(todo.cat_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ShowNDelete;