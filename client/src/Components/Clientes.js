import React, { Fragment, useState } from "react";
import MostrarBorrarClientes from './MostrarBorrarClientes';
const Clientes = () => {
    const [id, setId] = useState(Math.round(Math.random()*999999).toString());
    const [nombre, setNombre] = useState("");
    const [direccion, setDir] = useState("");
    const [telefono, setTel] = useState("");
    const [celular, setCel] = useState("");
    const [correo, setCorreo] = useState("");
    const onSubmitForm = async (e) => {
      e.preventDefault();
      try {
        const idc = {id};
        const nombrec = {nombre};
        const direccionc = {direccion};
        const telefonoc = {telefono};
        const celularc = {celular};
        const correoc = {correo};
        const response = await fetch("/clientes", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({idc,nombrec,direccionc,telefonoc,celularc,correoc})
        });
        window.location = "/path3";
      } catch (err) {
        console.error('error:' + err.message);
      }
    };
    return (
      <Fragment>
        <h1 className="text-center mt-5">Registro de Clientes</h1>
        <form onSubmit={onSubmitForm}>
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">Nombre </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Michi"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}/>
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">Direccion</label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="1"
                value={direccion}
                onChange={(e) => setDir(e.target.value)}/>
            </div>
            <button className="btn btn-success"> Registrar</button>
          </form>
        <h1 className="text-center mt-5">Clientes Registrados</h1>
        <MostrarBorrarClientes/>
      </Fragment>
    );
  };
export default Clientes;
