import React, { useState } from "react";

//include images into your bundle


//create your first component
const Home = () => {

	const [tareas, setTareas] = useState([]);
	const [nuevaTarea, setNuevaTarea] = useState("");
	const [borrarBoton, setBorrarBoton] = useState (null);
    
	
	function entrada(evento){
       setNuevaTarea(evento.target.value);
	}

	function inputEnter(e){
		if (e.key === "Enter" && nuevaTarea.trim() !== "") {
			setTareas([...tareas, nuevaTarea]);
			setNuevaTarea("");
		}
	}

	function borrarTarea(index){
		const nuevasTareas = tareas.filter((_, i)=> i !== index);
		setTareas(nuevasTareas);
	}

	function tareasActivas (){
		return tareas.length;
	}

	return (
	 <div className="fondo d-flex justify-content-center">
	 	<div className="form text-center font-monospace fs-1 mt-5" style={{width: "700px"}}>
	 	<label htmlFor="tareaInput" className="estilo" >Tareas</label>
	 		<input 
	 		type="tareaInput" 
	 		className="form-control" 
	 		value={nuevaTarea}  
	 		placeholder="Añade una tarea" 
	 		onChange={entrada} 	
	 		onKeyDown={inputEnter}/>	

                <ul className="bg-light-subtle" style={{width: "700px"}}>
				{tareas.map((tarea, index)=> 
				<li className="d-flex justify-content-between align-items-center px-3 py-2 border-bottom rounded-3" id="homework" key={index} onMouseEnter={()=>setBorrarBoton(index)} onMouseLeave={() =>setBorrarBoton(null)}> 
				<span className="text">
				<i className="bi bi-check-circle me-2 fs-4 text-success"></i>{tarea}</span>
				{borrarBoton === index && (
				<button type="button" class="btn btn-light" onClick={()=>borrarTarea(index)}>
				<i className="bi bi-clipboard-x"></i> 
				</button> )}
				</li>)}
				<span className="d-flex justify-content-start fs-5 text-secondary">{tareasActivas()} tareas</span>
			    </ul>
			</div>
		</div>
	);
};

export default Home;