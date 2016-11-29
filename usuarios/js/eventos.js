var inicioUsuarios = function()
{
	alert("holahola");
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
			}
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
	$("#btnValidaUsuario".on("click",validaUsuario);
}
//Evento inicial
$(document).on("ready",inicioUsuarios);