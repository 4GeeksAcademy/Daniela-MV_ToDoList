import React, { useState } from "react";

//include images into your bundle


//create your first component
const Home = () => {

	const [tareas, setTareas] = useState([""]);
	const [nuevaTarea, setNuevaTarea] = useState("");

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

	}

	return (

// 		<div class="accordion accordion-flush" id="accordionFlushExample">
//   <div class="accordion-item">
//     <h2 class="accordion-header">
//       <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
//         Accordion Item #1
//       </button>
//     </h2>
	
	 <div className="d-flex justify-content-center" style={{backgroundColor: "#f0f0f0", minHeight: "100vh"}} >
	 	<div className="form text-center fs-1 mt-5" style={{width: "900px"}}>
	 	<label type="text">Todos</label>
	 		<input 
	 		type="text" 
	 		className="form-control" 
	 		value={nuevaTarea}  
	 		placeholder="Añade una tarea" 
	 		onChange={entrada} 	
	 		onKeyDown={inputEnter}/>	

                <ul>
				{tareas.map((tarea, index)=> 
				<li key={index}> 
				<span className="text">{tarea}</span>
				<button type="button" class="btn btn-light">
				<i className="bi bi-clipboard-x"></i>
				</button>
				</li>)}
			    </ul>
			</div>
		</div>
	);
};

export default Home;