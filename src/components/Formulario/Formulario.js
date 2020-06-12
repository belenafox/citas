import React, { Fragment, useState } from 'react';

const Formulario = () => {

	// Crear state de citas
	const [cita, actualizarCita] = useState({
		mascota: '',
		propietario: '',
		fecha: '',
		hora: '',
		sintomas: ''
	});

	// Función que se ejecuta cada vez que el usuario escribe en un input
	const actualizarState = e => {

		// se ve en que campo de esta escribiendo
		// console.log(e.target.name);

		// se ve que escribe el usuario
		// console.log(e.target.value);
	
		actualizarCita({
			// COPIA DEL OBJETO CITA
			...cita,
				// se escribe correctamente la información del input en la propiedad que se quiera agreagar
				[e.target.name]: e.target.value 
		})
	}

	// Extraer los valores
	const { mascota, propietario, fecha, hora, sintomas } = cita;

	return ( 
		<Fragment>
			<h2>Crear cita</h2>

			<form>
				<label>Nombre Mascota</label>
				<input 
					type="text"
					name="mascota"
					className="u-full-width"
					placeholder="Nombre mascota"
					onChange={actualizarState}
					value={mascota}
				/>

				<label>Nombre Dueño</label>
				<input 
					type="text"
					name="propietario"
					className="u-full-width"
					placeholder="Nombre dueño de la mascota"
					onChange={actualizarState}
					value={propietario}
				/>

				<label>Fecha</label>
				<input 
					type="date"
					name="fecha"
					className="u-full-width"
					onChange={actualizarState}
					value={fecha}
				/>

				<label>Nombre Dueño</label>
				<input 
					type="time"
					name="hora"
					className="u-full-width"
					onChange={actualizarState}
					value={hora}
				/>

				<label>Síntomas</label>
				<textarea
					className="u-full-width"
					name="sintomas"
					onChange={actualizarState}
					value={sintomas}
				></textarea>

				<button
					type="submit"
					className="u-full-width button-primary"
				>Agregar cita</button>
			</form>
		</Fragment>
		);
}
 
export default Formulario;