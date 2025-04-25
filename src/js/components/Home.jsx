import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {



	return (
	
		<div className="d-flex justify-content-center" style={{backgroundColor: "#f0f0f0", minHeight: "100vh"}} >
			<div className="form text-center fs-1 mt-5" style={{width: "900px"}}>
			<label htmlfor="text">Todos</label>
				<input type="text" className="form-control" id="Password" placeholder="Añade una tarea"/>	
			</div>
		</div>
	);
};

export default Home;