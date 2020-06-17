import React, { Fragment, useState } from "react";
import SnD from './Show&Delete';
const Page2 = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const catname = {name};
      const catage = {age};
      const response = await fetch("/gatos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({catname,catage})
        
      });
      window.location = "/path2";
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <Fragment>
      <h1 className="text-center mt-5">Registro de Gatos</h1>
      <form onSubmit={onSubmitForm}>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Nombre </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Michi"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Edad</label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="1"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <button className="btn btn-success"> Insertar</button>
        </form>
      <h1 className="text-center mt-5">Gatos Registrados</h1>
      <SnD/>
    </Fragment>
  );
};
export default Page2;
