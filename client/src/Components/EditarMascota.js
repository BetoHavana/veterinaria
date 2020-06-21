import React, { Fragment, useState } from "react";
const EditarMascota = ({ mascotas }) => {
  const [nombre, setNombre] = useState(mascotas.nombremascota);
  const [edad, setEdad] = useState(mascotas.edadmascota);
  const [sexo, setSexo] = useState("");
  const [color, setColor] = useState("");
  const [especie, setEspecie] = useState("");
  const [raza, setRaza] = useState("");
  const [numcartillam, setCartilla] = useState("");
  const [fechanacimientom, setFecha] = useState("");
  const [propietariom, setPropietario] = useState("");
  //edit description function
  const updateName = async (e) => {
    e.preventDefault();
    try {
      const nombrem = { nombre };
      const edadm = { edad };
      const response = await fetch(`/mascotas/${mascotas.idmascota}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({nombrem,edadm})
        }
      );
      window.location = "/path2";
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
        data-target = {`#id${mascotas.mascotaid}`}> Editar </button>

      <div className="modal" id={`id${mascotas.mascotaid}`} onClick={() => setNombre(mascotas.nombremascota)}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Editar mascota</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={() => setNombre(mascotas.nombremascota)}>
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
                value={edad}
                onChange={e => setEdad(e.target.value)}/>
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
                onClick={() => setNombre(mascotas.nombremascota)}>
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