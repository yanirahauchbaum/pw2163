var inicioArticulos = function()
{
	
	var teclaUsuario = function(tecla)
	{
		if(tecla.which == 13) //Tecla enter.
		{
			validaUsuario(); //Función que valida al usuario.
		}	
	}

	
	var Consulta = function()
	{
		$id = $("#idArticulo").val();
		$d = $("#descripcion").val();
		$c = $("#cantidad").val();
		$p = $("#precio").val();
		$u = $("#unidad").val();
		var parametros="opcion=consultas"+
					   "&idArticulo=idArticulo"+
					   "&descripcion=descripcion"+
					   "&cantidad=cantidad"+
					   "&precio=precio"+
					   "&unidad=unidad"+
					   "&id="+Math.random();
		if(idArticulo!="" && descripcion!="" && cantidad!="" && precio!="" && unidad!="")
		{
			//Hacemos la petición remota
			$.ajax({
				cache:false,
				type:"POST",
				dataType:"json",
				url: "php/utilerias.php",
				data:parametros,
				success: function(response){
					if(response.respuesta == true)
					{    
						$("#artConsultas").hide("slow");
						$("nav").show("slow"); 
					}
					else
					{
						alert("Datos incorrectos :(");
					}
				},
				error: function(xhr,ajaxOptions,thrownError){
					//Si todo sale mal
				}
			});
		}
		else
		{
			alert("Campo obligatorio");
		}
	}
	//keypress: se ejecuta cada vez que presiono una 
	//tecla sobre el input.
	$("#idArticulo").on("keypress",teclaUsuario);
	$("#btnConsulta").on("click",Consulta);
}
//Evento inicial
$(document).on("ready",inicioArticulos);
	