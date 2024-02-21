function textoProgresivo (label, retardo_inicio ,intervalo) {
	
	// Asignación de variables
	let etiqueta = document.getElementById (label); 
	let texto = document.getElementById (label).innerHTML
	
	// Eliminar texto del interior del HTML
	etiqueta.innerHTML = ""; 

	// Iterar sobre el texto e introducirlo intercalando el tiempo con un delay determinado en el intervalo. 
	
	setTimeout (function () {
		for (let i=0; i<texto.length; i++) {
			setTimeout (function () {
				let textoActual = document.getElementById (label).innerHTML; 
				textoActual = textoActual + texto.charAt(i); 
				etiqueta.innerHTML = textoActual; 
			},intervalo*i)
		}
	}, retardo_inicio)
	
	
}

textoProgresivo ("texto-progresivo", 0, 100);
setTimeout (function () {
	imagen_logo.style.opacity="1";	
}, 3200)
