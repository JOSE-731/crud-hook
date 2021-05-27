import React, { useState } from 'react';
import shortid from 'shortid';
function App() {

  const [tarea, setTarea] = useState('');
  const [tareas, setTareas] = useState([]);
  const [editar, setEditar] = useState(false);
  const [id, setId] = useState('');
  

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

  const eliminarTarea = id =>{
    const deleteTareas = tareas.filter(item => item.id !== id)

    setTareas(deleteTareas)
    setEditar(false)
  } 

  const editarTarea = item =>{
    setEditar(true)
    setTarea(item.nombre)
    setId(item.id)
  }


  const editarTareas = e =>{
    e.preventDefault();

    if (!tarea.trim()) {
      
      return
  }
    const addTareas = tareas.map(item => item.id === id ? {
      id:id, nombre:tarea} : item)

      setTareas(addTareas)
      editar(false)
      setTareas('')
      setId('')
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
                <li className="list-group-item list-group-item-primary mt-2" key={item.id}>
                  <span>{item.nombre}</span>
                  <button className="btn  btn-danger btn-sm float-right mx-2" onClick={() => eliminarTarea(item.id)}>Eliminar</button>
                  <button className="btn  btn-warning btn-sm float-right" onClick={() => editarTarea(item)}>Editar</button>
                </li>
              ))
            }
          </ul>
        </div>
        <div className="col-4">
          <h2 className="text-center">
            {
              editar ? 'Editar tarea' : 'Nueva tarea'  
            }
          </h2>
          <form className="mx-4" onSubmit={editar ? editarTareas : agregarTarea}>
            <input
              type="text"
              placeholder="Escriba una tarea"
              className="form-control mb-2"
              onChange={e => setTarea(e.target.value)}
              value={tarea}
            />
            {
              editar ? (
                 <button type="submit" className="btn btn-warning btn-block">Editar</button>
              ):(
                <button type="submit" className="btn btn-danger btn-block">Agregar</button>
              )
            }
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
