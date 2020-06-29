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
        <h1 className="text-center mt-5">Clientes Registrados</h1>
        <button
        type = "button"
        className = "btn btn-success"
        data-toggle = "modal"
        data-target = "#modal_agregar"> Registrar Cliente </button>
        <div className="modal" id="modal_agregar" >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Agregar Cliente</h4>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit={onSubmitForm}>
                  <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Nombre </label>
                    <input
                      required
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Nombre cliente"
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Direccion</label>
                    <input
                      required
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Direcccion"
                      value={direccion}
                      onChange={(e) => setDir(e.target.value)}/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Telefono</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Numero de telefono"
                      value={telefono}
                      onChange={(e) => setTel(e.target.value)}/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Celular</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Numero de celular"
                      value={celular}
                      onChange={(e) => setCel(e.target.value)}/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Correo</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Correo"
                      value={correo}
                      onChange={(e) => setCorreo(e.target.value)}/>
                  </div>
                  <button className="btn btn-success">Registrar</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <MostrarBorrarClientes/>
      </Fragment>
    );
  };
export default Clientes;
