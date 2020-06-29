import React, { Fragment, useState } from "react";
const EditarMascota = ({ clientes }) => {
  const [nombre, setNombre] = useState(clientes.nombrecliente);
  const [direccion, setDir] = useState(clientes.direccion);
  const [telefono, setTel] = useState(clientes.telefono);
  const [celular, setCel] = useState(clientes.celular);
  const [correo, setCorreo] = useState(clientes.correo);
  //edit description function
  const updateName = async (e) => {
    e.preventDefault();
    try {
      const nombrec = { nombre };
      const correoc = { correo }; 
      const direccionc = { direccion };
      const telefonoc = { telefono };
      const celularc = { celular };
      const response = await fetch(`/clientes/${clientes.idcliente}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({nombrec,correoc,direccionc,telefonoc,celularc})
        }
      );
      window.location = "/path3";
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <Fragment>
      <button
        type = "button"
        className = "btn btn-warning"
        data-toggle = "modal"
        data-target = {`#id${clientes.idcliente}`}> Editar </button>
      <div className="modal" id={`id${clientes.idcliente}`} onClick={() => setNombre(clientes.nombrecliente)}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Editar Cliente</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={() => setNombre(clientes.nombrecliente)}>
                &times;
              </button>
            </div>
            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                value={nombre}
                onChange={e => setNombre(e.target.value)}/>
            </div>
            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                value={direccion}
                onChange={e => setDir(e.target.value)}/>
            </div>
            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                value={telefono}
                onChange={e => setTel(e.target.value)}/>
            </div>
            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                value={celular}
                onChange={e => setCel(e.target.value)}/>
            </div>
            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                value={correo}
                onChange={e => setCorreo(e.target.value)}/>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-warning"
                data-dismiss="modal"
                onClick={e => updateName(e)}>
                Editar
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
                onClick={() => setNombre(clientes.nombrecliente)}>
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditarMascota;