import React, { Fragment, useEffect, useState } from "react";

import EditarClientes from "./EditarClientes";

const MostrarBorrar = () => {
  const [clientes, setClientes] = useState([]);

  //delete todo function

  const borrarCliente = async id => {
    try {
      const deleteCliente = await fetch(`/clientes/${id}`, {
        method: "DELETE"
      });

      setClientes(clientes.filter(clientes => clientes.idcliente !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const getClientes = async () => {
    try {
      const response = await fetch("/clientes");
      const jsonData = await response.json();
      setClientes(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getClientes();
  }, []);
/*
  useEffect(() => {
    const abrController = new AbortController();
    const signal = abrController.signal;
    try {
       fetch(getClientes(),{signal:signal})
    } catch (err) {
      console.error(err.message);
    }
    return function cleanUp(){
      abrController.abort();
    }
    
  }, []);*/


  return (
    <Fragment>
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Editar</th>
            <th>Borrar</th>
          </tr>
        </thead>
        <tbody>
          
          {clientes.map(clientes => (
            <tr key={clientes.idcliente}>
              <td>{clientes.nombrecliente}</td>
              <td>{clientes.correo}</td>
              <td>
                <EditarClientes clientes={clientes} />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => borrarCliente(clientes.idcliente)}
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