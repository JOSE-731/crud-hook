import React, { useState } from 'react';
import shortid from 'shortid';
function App() {

  const [tarea, setTarea] = useState('');
  const [tareas, setTareas] = useState([]);

  const agregarTarea = e => {
    e.preventDefault();

    if (!tarea.trim()) {
      
      return
    }

    setTareas([
      ...tareas,
      { id: shortid.generate(), nombre: tarea }
    ])
    
    setTarea('')

  }

  return (
    <div className="conatiner  mt-5">
      <h1 className="text-center">Mis tareas</h1>
      <hr />
      <div className="row">
        <div className="col-8">
          <h4 className="text-center">Lista de tareas</h4>
          <ul className="list-group">
            {
              tareas.map(item => (
                <li className="list-group-item" key={item.id}>
                  <span>{item.nombre}</span>
                  <button className="btn  btn-danger btn-sm float-right mx-2">Eliminar</button>
                  <button className="btn  btn-warning btn-sm float-right">Editar</button>
                </li>
              ))
            }
          </ul>
        </div>
        <div className="col-4">
          <h4 className="text-center">Formulario</h4>
          <form className="mx-4" onSubmit={agregarTarea}>
            <input
              type="text"
              placeholder="Escriba una tarea"
              className="form-control mb-2"
              onChange={e => setTarea(e.target.value)}
              value={tarea}
            />
            <button type="submit" className="btn btn-dark btn-block">Agregar</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
