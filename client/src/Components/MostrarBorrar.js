import React, { Fragment, useEffect, useState } from "react";

import EditarMascota from "./EditarMascota";

const MostrarBorrar = () => {
  const [mascotas, setMascotas] = useState([]);

  //delete todo function

  const borrarMascota = async id => {
    try {
      const deleteMascota = await fetch(`/mascotas/${id}`, {
        method: "DELETE"
      });

      setMascotas(mascotas.filter(mascotas => mascotas.idmascota !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const getMascotas = async () => {
    try {
      const response = await fetch("/mascotas");
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
            <tr key={mascotas.idmascota}>
              <td>{mascotas.nombremascota}</td>
              <td>{mascotas.edad}</td>
              <td>
                <EditarMascota mascotas={mascotas} />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => borrarMascota(mascotas.idmascota)}
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