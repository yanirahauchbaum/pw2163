var inicioUsuarios = function()
{
	var validaUsuario = function()
	{
		//Extraer los datos de los input en el HTML
		var usuario = $("#txtUsuario").val();
		var clave = $("#txtClave").val();
		//Preparamos los parámetros para AJAX
		var parametros ="opcion=valida"+
						"&usuario="+usuario+
						"&clave="+clave+
						"&id="+Math.random();
		//Hacemos la peticion remota
		
		//Validamos que no esten vacios
		if(usuario!="" && clave!="")
		{
			$.ajax({
			cache:false,
			type:"POST",
			dataType:"json",
			url: "php/utilerias.php",
			data:parametros,
			success:function(response){
				//Si todo sale bien
				if (response.respuesta == true) 
				{
					$("#entradaUsuario").hide();
					$("nav").show();
				}
				else
				{
					alert("Datos incorrectos :(");					
				}
			},
			error:function(xhr,ajaxOptions,thrownError){
				//Si todo sale mal 
			}
		});
		}
		else
		{
			alert("Usuario y clave son obligatorios");
		}
	}
	$("#btnValidaUsuario").on("click",validaUsuario);
	var teclaClave = function(tecla)
	{
		if(tecla.which == 13) //Tecla enter
		{
			validaUsuario(); //Función que valida al usuario
		}
	}
	var Alta = function()
	{
		$("#artAltaUsuarios").show("slow");
	}
	//keypress: se ejecuta cada vez que presiono una
	//teclea sobre el input
	$("#txtClave").on("keypress",teclaClave);
	$("#btnAlta").on("click",Alta);
	$("#btnGuardaUsuario").on("click",GuardaUsuario);
}
//Evento inicial
$(document).on("ready",inicioUsuarios);