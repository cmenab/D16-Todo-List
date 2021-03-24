import React from "react";
import shortid from "shortid";

export function TodoList() {
	const [tarea, setTarea] = React.useState("");
	const [arrayTareas, setArrayTareas] = React.useState([]);
	const agregarTarea = e => {
		e.preventDefault();
		console.log(tarea);
		setArrayTareas([
			...arrayTareas,
			{
				id: shortid.generate(),
				nombreTarea: tarea
			}
		]);
		setTarea("");
	};

	const tasksLeft = () => {
		if (arrayTareas.length > 1) {
			return arrayTareas.length + " tasks left";
		} else if (arrayTareas.length == 1) {
			return arrayTareas.length + " task left";
		} else if (arrayTareas.length == 0) {
			return "No tasks left";
		}
	};

	const deleteTask = index => {
		setArrayTareas(arrayTareas.filter(task => task != arrayTareas[index]));
	};

	return (
		<div className="container">
			<h1 className="text-center">To Do list con React</h1>
			<div className="row">
				<div className="col-8">
					<h4 className="text-center">Lista de Tareas</h4>
					<ul className="list-group">
						{arrayTareas.map((item, index) => (
							<li
								className="list-group-item d-flex justify-content-between"
								key={item.id}>
								<span className="lead">
									<strong>{item.nombreTarea}</strong>
								</span>
								<button
									onClick={() => deleteTask(index)}
									type="button"
									className="btn btn-danger">
									<i className="fas fa-eraser fa-1x"></i>
								</button>
							</li>
						))}
					</ul>
					<span className="text-secondary list-group-item">
						{tasksLeft()}
					</span>
				</div>
				<div className="col-4">
					<h4 className="text-center">Añadir Tareas</h4>
					<form onSubmit={agregarTarea}>
						<input
							type="text"
							className="form-control mb-2"
							placeholder="Ingrese Tarea"
							onChange={e => setTarea(e.target.value)}
							value={tarea}
						/>
						<button
							className="btn btn-dark btn-block"
							type="submit">
							Agregar
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}
