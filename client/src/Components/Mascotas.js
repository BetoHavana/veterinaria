import React, { Fragment, useState } from "react";
import MostrarBorrar from './MostrarBorrar';
const Mascotas = () => {
  const [nombre, setNombre] = useState("");
  const [edad,setEdad] = useState("");
  const [sexo, setSexo] = useState("");
  const [color, setColor] = useState("");
  const [especie, setEspecie] = useState("");
  const [raza, setRaza] = useState("");
  const [numcartilla, setCartilla] = useState("");
  const [fechanacimiento, setFecha] = useState("");
  const [propietario, setPropietario] = useState("");
  const [id,setId] = useState("");

  function UUID(){
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (dt + Math.random()*16)%16 | 0;
        dt = Math.floor(dt/16);
        return (c=='x' ? r :(r&0x3|0x8)).toString(16);
    });
    return uuid;
}
  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      setId(UUID().replace(/[-]/g,""));
      const nombrem = {nombre};
      const edadm = {edad};
      const idm =  {id};
      const sexom = { sexo };
      const colorm = { color };
      const especiem = { especie };
      const razam = { raza };
      const numcartillam = { numcartilla};
      const fechanacimientom = { fechanacimiento};
      const propietariom = { propietario};
      const response = await fetch("/mascotas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({nombrem,edadm,idm,sexom,colorm ,especiem, razam,numcartillam,fechanacimientom,propietariom})
      });
      window.location = "/path2";
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <Fragment>
      <h1 className="text-center mt-5">Registro de Mascotas</h1>
      <form onSubmit={onSubmitForm}>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Nombre </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Name"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Edad</label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="1"
              value={edad}
              onChange={(e) => setEdad(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Color </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder=""
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Sexo </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder=""
              value={sexo}
              onChange={(e) => setSexo(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Especie </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder=""
              value={especie}
              onChange={(e) => setEspecie(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Raza </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder=""
              value={raza}
              onChange={(e) => setRaza(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Numero cartilla </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder=""
              value={numcartilla}
              onChange={(e) => setCartilla(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1"> Fecha Nacimiento </label>
            <input
              type="date"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder=""
              value={fechanacimiento}
              onChange={(e) => setFecha(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1"> Propietario </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder=""
              value={propietario}
              onChange={(e) => setPropietario(e.target.value)}
            />
          </div>
          <button className="btn btn-success"> Insertar</button>
        </form>
      <h1 className="text-center mt-5">Mascotas Registrados</h1>
      <MostrarBorrar/>
    </Fragment>
  );
};
export default Mascotas;
