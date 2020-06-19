import React, { Fragment, useEffect, useState } from "react";

import EditarMascota from "./EditarMascota";

const MostrarBorrar = () => {
  const [mascotas, setMascotas] = useState([]);

  //delete todo function

  const borrarMascota = async id => {
    try {
      const deleteMascota = await fetch(`/gatos/${id}`, {
        method: "DELETE"
      });

      setMascotas(mascotas.filter(mascotas => mascotas.cat_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const getMascotas = async () => {
    try {
      const response = await fetch("/gatos");
      const jsonData = await response.json();

      setMascotas(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getMascotas();
  }, []);

  return (
    <Fragment>
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Editar</th>
            <th>Borrar</th>
          </tr>
        </thead>
        <tbody>
          {mascotas.map(mascotas => (
            <tr key={mascotas.cat_id}>
              <td>{mascotas.cat_name}</td>
              <td>{mascotas.cat_age}</td>
              <td>
                <EditarMascota mascotas={mascotas} />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => borrarMascota(mascotas.cat_id)}
                >
                  Borrar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default MostrarBorrar;