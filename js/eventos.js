// DOM = Modelo de objetos del documento
var inicio = function() //Main
{
	var dameclic = function()
	{
		alert("Le di clic a un botón");
	}
	$("#dameClic").on("click",dameclic);
}

//slow motion
//Inicializar nuestro Documento
$(document).on("ready",inicio);
	//código o más funciones 
