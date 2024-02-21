	
	/* A partir de la estructura de carpetas de imagenes para cada juego este sistema sirve para 
	 * programar las acciones del botón teniendo en cuenta que la id de cada juego está
	 * en su correspondiente etiqueta con la clase "videojuego", siendo esta igual al directorio respectivo para su uso.
	 * 
	 * Advertencia: la imagen "0" nunca se mostrará, pero necesita estar presente para que el programa funcione.
	 * Equivale al punto en el que la imagen del modelo 3d se mostrará. 
	 * 
	 * Esta función no estaba planeada en el proyecto, por lo que su incrustación puede parecer incoherente a nivel de programación. 
	*/ 
	
	/* Detectar pulsación de los botones */ 
		
	function esperarClickBoton() {
		let botonesPanel = document.querySelectorAll(".botonpanel");

		botonesPanel.forEach(function (botonpanel) {
			botonpanel.addEventListener("click", function () {
				
				// Averiguar el videojuego del que se trata: 
				let etiquetaPadre = botonpanel.parentNode.parentNode;
				let nombreVideojuego = etiquetaPadre.id
				
				// Saber de que tipo es la etiqueta - correspondiente a la accion [0]
				let tipoBoton= botonpanel.className.split(" ")[0];
				
				// Encontrar la etiqueta de la imagen 
				
				function imagenVideojuego () {
					
					let imagenescambiantes = document.querySelectorAll(".imagencambiante");
				
					for (let i=0; i<imagenescambiantes.length; i++) {
						let etiquetaPadreImagen = imagenescambiantes[i].parentNode.parentNode; 
						let nombreVideojuegoImagen = etiquetaPadreImagen.id
						
						if (nombreVideojuegoImagen == nombreVideojuego) {
							return imagenescambiantes[i]; 
						}
					}
				}
				
				// Encontrar la etiqueta de la flecha para la anterior imagen
				
				function flecha_anterior () {
					
					let botonespaneles = document.querySelectorAll(".imagenanterior");
				
					for (let i=0; i<botonespaneles.length; i++) {
						
						let etiquetaPadreImagen = botonespaneles[i].parentNode.parentNode; 
						let nombreVideojuegoImagen = etiquetaPadreImagen.id
		
						if (nombreVideojuegoImagen == nombreVideojuego) {
							return botonespaneles[i]; 
						}
					}
				}

				// Encontrar la etiqueta de la flecha para la posterior imagen
				
				function flecha_posterior () {
					let botonespaneles = document.querySelectorAll(".imagenposterior");
				
					for (let i=0; i<botonespaneles.length; i++) {
						
						let etiquetaPadreImagen = botonespaneles[i].parentNode.parentNode; 
						let nombreVideojuegoImagen = etiquetaPadreImagen.id
		
						if (nombreVideojuegoImagen == nombreVideojuego) {
							return botonespaneles[i]; 
						}
					}
				}

				// Encontrar la etiqueta para cambiar el modelo 
				
				function modelo () {
					let modelos = document.querySelectorAll(".modelo");
					for (let i=0; i<modelos.length; i++) { 
						let etiquetaPadreImagen = modelos[i].parentNode.parentNode; 
						
						let nombreVideojuegoImagen = etiquetaPadreImagen.id
						
						if (nombreVideojuegoImagen == nombreVideojuego) {
							return modelos[i]; 
						}
					}
					
				}
				
				// Definir la ruta de la imagen 
				
				function getPosicionImagen (fuente) {
					let posicion = fuente
					let inicioCadena = posicion.lastIndexOf("-") + 1;
					let finCadena = posicion.lastIndexOf(".");
					return posicion.substring(inicioCadena, finCadena);
				}
				
				// Reconocer si ya hay una imagen y asignarle su posición en el conjunto
				
				let posicionImagen = ""
				
				if (imagenVideojuego().src) {
					posicionImagen = parseInt (getPosicionImagen (imagenVideojuego().src))
				}		
					
				// Responder con el DOM en base a la posición de la imagen y el tipo de botón pulsado. 

				if (tipoBoton == "imagenanterior") {
					
					if (posicionImagen==0) {
						imagenVideojuego().style.display="none";
						flecha_anterior().style.visibility="hidden";
					}
					else  {
						imagenVideojuego().style.display="block";
						flecha_posterior().style.visibility="visible";
						posicionImagen= posicionImagen -1;	
					}
				}
				else {
					if (posicionImagen != 3) {
						posicionImagen= posicionImagen +1;
						flecha_anterior().style.visibility="visible";
						imagenVideojuego().style.display="block";
					}
				}

				// Asociación de la imagen y animación de opacidad. 

				imagenVideojuego().style.opacity=0.5;
				imagenVideojuego().src = `imagenes/${nombreVideojuego}/imagen-${nombreVideojuego}-${posicionImagen}.jpg`; 
				
				setTimeout (function () {
					imagenVideojuego().style.opacity=1;
				},500)

				// Tratamiento posterior en base a la posición actual
				
				if (posicionImagen == 0) {
					flecha_anterior().style.visibility="hidden";
					imagenVideojuego().style.display="none";
				}
				
				if (posicionImagen>0) {
					modelo().style.display="none";
				}
				else {
					modelo().style.display="block";
				}
					
				if (posicionImagen == 3) {
					flecha_posterior().style.visibility="hidden";
				}		
				
			})
		})
		
		
	}
	
	esperarClickBoton ();
