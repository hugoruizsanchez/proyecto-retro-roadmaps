

	// La segmentación de los cuadrantes debe realizarse con el comando convert genesis_cartucho.jpeg -crop 640x genesis_cartucho-%d.jpg
	// ... en una terminal de linux .

	// PROGRAMACIÓN PARA MODELOS 3D
	// -> Cada modelo consta de un set de 15 imágenes que, al recorrerse, dan la impresión de una animación tridimensional
	// -> El usuario puede desplazar el puntero a la izquierda y a la derecha, posibilitando un desplazamiento a través de la detección de la posición del mouse en javascript. 
	// -> Los modelos (sets) deben introducirse en carpetas individuales, que contendrán las 15 imagenes que los conforman
	// -> La estructura es la siguiente: modelos > consola > carpeta_modelo > (15 imagenes)
	// Es IMPORTANTE seguir la estructura definida, porque el programa itera presuponiendo el nombre de los archivos 

	// En función de la ubicación de los archivos, cambia la imagen al numero deseado.


	function cambiarImagen (archivo, numero) {
		fuente = `../../modelos/genesis/${archivo}/${archivo}-${numero}.jpg`
		document.getElementById(archivo).src=fuente;
	}

	// En base a una imagen, determina la posicion que tiene respecto al set
	function getPosicionImagen (imagen) {
		let posicion = document.getElementById(imagen).src
		let inicioCadena = posicion.lastIndexOf("-") + 1;
		let finCadena = posicion.lastIndexOf(".");
		return posicion.substring(inicioCadena, finCadena);
	}

	// Rota la imagen a la derecha (+1)
	function rotarImagenDerecha (imagen) {
		posicion = getPosicionImagen (imagen); 
		if (posicion>13) posicion = 0; 
		else posicion++;
		cambiarImagen (imagen, posicion );
	}

	// Rota la imagen a la izquierda (-1)
	function rotarImagenIzquierda (imagen) {
		posicion = getPosicionImagen (imagen); 
		if (posicion==0) posicion = 14; 
		else posicion--;
		cambiarImagen (imagen, posicion );
	}

	// Detecta el id del elemento sobre el que se hace hover el ratón, para poder adecuar el script
	var id = ""; 
	var clase = "";
	function idElemento (elemento){
		clase = elemento.classList
		id = elemento.id;
	}

	// Variables globales para almacenar el estado del mouse
	let lastX = 0;

	// Función para detectar el movimiento del ratón y rotar la imagen en consecuencia
	function rotarSegunMovimiento(event, imagen) {
		let currentX = event.clientX || event.touches[0].clientX; // Posición en X
		if (lastX !== null) {
			let diferenciaX = Math.abs(currentX - lastX);
			if (diferenciaX > 15) { // El valor de la diferencia determina la sensibilidad
				if (currentX > lastX) {
					rotarImagenIzquierda(imagen); 
				} else if (currentX < lastX) {
					rotarImagenDerecha(imagen);
				}
				lastX = currentX;
			}
		} else {
			lastX = currentX; // Asignar el ultimo valor de last en el ultimo desplazamiento (current)
		}
	}

	// Imágenes  que contendrán el efecto de rotación

	sonic1_cartucho.addEventListener('mousemove', (event) => {
		rotarSegunMovimiento(event, id);
	});

	castlevania_cartucho.addEventListener('mousemove', (event) => {
		rotarSegunMovimiento(event, id);
	});
	
	goldenaxe_cartucho.addEventListener('mousemove', (event) => {
		rotarSegunMovimiento(event, id);
	});
	
	alteredbeast_cartucho.addEventListener('mousemove', (event) => {
		rotarSegunMovimiento(event, id);
	});
	
	mortalkombat_cartucho.addEventListener('mousemove', (event) => {
		rotarSegunMovimiento(event, id);
	});
