import React, { Fragment, useState } from "react";
import MostrarBorrar from './MostrarBorrar';

const Clientes = () => {
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
        <h1 className="text-center mt-5">Registro de Usuarios</h1>
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
            <button className="btn btn-success"> Registrar</button>
          </form>
        <h1 className="text-center mt-5">Clientes Registrados</h1>
        <MostrarBorrar/>
      </Fragment>
    );
  };
export default Clientes;
