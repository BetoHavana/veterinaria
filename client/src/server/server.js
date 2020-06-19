const express = require("express");
const server = express();
const cors = require("cors");
const pool = require("./Connection");

//middleware
server.use(cors());
server.use(express.json()); //req.body

//ROUTES//

//create a todo

server.post("/gatos", async (req, res) => {
  try {

    const { name } = req.body.catname;
    const { age } = req.body.catage;
    const newTodo = await pool.query(
      "INSERT INTO gatos (cat_name,cat_age) VALUES($1,$2) RETURNING *",
      [name,age]
    );

    res.json(newTodo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});
//create table gatos
server.post("/create", async (req, res) => {
  try {
    const newTodo = await pool.query(
      "CREATE TABLE gatos (cat_id INT GENERATED ALWAYS AS IDENTITY,cat_name VARCHAR  NULL,cat_age VARCHAR NULL)");

    res.json(newTodo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});
//get all todos

server.get("/gatos", async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM gatos");
    res.json(allTodos.rows);
    console.log(res);
  } catch (err) {
    console.error(err.message);
  }
});

//get a todo

server.get("/gatos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await pool.query("SELECT * FROM gatos WHERE cat_id = $1", [
      id
    ]);

    res.json(todo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//update a todo

server.put("/gatos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body.cat_name;
    const { age } = req.body.cat_age;

    const updateTodo = await pool.query(
      "UPDATE gatos SET cat_name = $1, cat_age = $2 WHERE cat_id = $3",
      [name,age, id]
    );

    res.json("Todo was updated!");
    console.log('actualizado');
  } catch (err) {
    console.error(err.message);
  }
});

//delete a todo

server.delete("/gatos/:id", async (req, res) => {
  try {
    console.log('entrando');
    const { id } = req.params;
    const deleteTodo = await pool.query("DELETE FROM gatos WHERE cat_id = $1", [
      id
    ]);
    res.json("Todo was deleted!");
  } catch (err) {
    console.log(err.message);
  }
});

server.listen(5000, () => {
  console.log("server has started on port 5000");
});