const express = require("express");
const server = express();
const cors = require("cors");
const pool = require("./Connection");
const path = require("path");
const PORT = process.env.PORT || 5000;
//middleware
server.use(cors());
server.use(express.json()); //req.body

if (process.env.NODE_ENV === "production") {
  //server static content
  //npm run build
  server.use(express.static(path.join(__dirname, "client/build")));
  console.log("Production");
}else{
  server.use(express.static("./client/build"));
  console.log("Local");
}
console.log(__dirname);
console.log(path.join(__dirname, "client/build"));
//ROUTES//
//create a gato
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
//get all gatos
server.get("/gatos", async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM gatos");
    res.json(allTodos.rows);
    console.log(res);
  } catch (err) {
    console.error(err.message);
  }
});
//get a gato
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
//update a gato
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
//delete a gato
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
server.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build/index.html"));
});
server.listen(PORT, () => {
  console.log(`Server is starting on port ${PORT}`);
});