import React, { Fragment, useState } from 'react';

const Formulario = () => {

	// Crear state de citas
	const { citas, actualizarCita } = useState({
		mascota:'',
		propietario:'',
		fecha:'',
		hora:'',
		sintomas:''
	});

	// Función que se ejecuta cada vez que el usuario escribe en un input
	const actualizarState = () => {
		console.log('escribiendo')
	}

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
				/>

				<label>Nombre Dueño</label>
				<input 
					type="text"
					name="propietario"
					className="u-full-width"
					placeholder="Nombre dueño de la mascota"
					onChange={actualizarState}
				/>

				<label>Fecha</label>
				<input 
					type="date"
					name="fecha"
					className="u-full-width"
					onChange={actualizarState}
				/>

				<label>Nombre Dueño</label>
				<input 
					type="time"
					name="hora"
					className="u-full-width"
					onChange={actualizarState}
				/>

				<label>Síntomas</label>
				<textarea
					className="u-full-width"
					name="sintomas"
					onChange={actualizarState}
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