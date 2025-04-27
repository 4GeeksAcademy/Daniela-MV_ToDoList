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

	return (

	
	 <div className="d-flex justify-content-center" id="fondo" style={{backgroundColor: "#f0f0f0", minHeight: "100vh"}} >
	 	<div className="form text-center fs-1 mt-5" style={{width: "900px"}}>
	 	<label type="text">Todos</label>
	 		<input 
	 		type="text" 
	 		className="form-control" 
	 		value={nuevaTarea}  
	 		placeholder="Añade una tarea" 
	 		onChange={entrada} 	
	 		onKeyDown={inputEnter}/>	

                <ul className="bg-light-subtle" style={{width: "900px"}}>
				{tareas.map((tarea, index)=> 
				<li className="d-flex justify-content-between align-items-center px-3 py-2 border-bottom rounded-3" id="homework" key={index} onMouseEnter={()=>setBorrarBoton(index)} onMouseLeave={() =>setBorrarBoton(null)}> 
				<span className="text">
				<i className="bi bi-check-circle me-2 fs-4"></i>{tarea}</span>
				{borrarBoton === index && (
				<button type="button" class="btn btn-light" onClick={()=>borrarTarea(index)}>
				<i className="bi bi-clipboard-x"></i> 
				</button> )}
				
				</li>)}
			    </ul>
			</div>
		</div>
	);
};

export default Home;