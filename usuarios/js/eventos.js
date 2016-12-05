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
		$("h2").html("Alta de Usuarios");
		$("#artAltaUsuarios").show("slow");
		//Escondo todos los botones
		//contenidos en artAltaUsuarios
		$("#artAltaUsuarios > button").hide();
		$("#btnAltaUsuario").slow();
	}

	var Baja = function()
	{
		$("h2").html("Baja de Usuarios");
		$("#artBajaUsuarios").show("slow");
		//Escondo todos los botones
		//contenidos en artAltaUsuarios
		$("#artBajaUsuarios > button").hide();
		$("#btnBajaUsuario").slow();
	}
	var Cambio = function()
	{
		$("h2").html("Cambio de Usuarios");
		$("#artCambioUsuarios").show("slow");
		//Escondo todos los botones
		//contenidos en artAltaUsuarios
		$("#artCambioUsuarios > button").hide();
		$("#btnCambioUsuario").slow();
	}
	var teclaUsuario = function(tecla)
	{
		if(tecla.which == 13) //Enter
		{
			var usuario = $("#txtUsuarioNombre").val();
			var parametros = "opcion=buscaUsuario"+
							 "&usuario="+usuario+
							 "&id="+Math.random();
			$.ajax({
				cache:false,
				type:"POST",
				dataType:"json",
				url:"php/utilerias.php",
				data:parametros,
				success:function(response){
					if(response.respuesta == true)
					{
						$("#txtNombre").val(response.nombre);
						$("#txtClaveNombre").val(response.clave);
						$("#txtTipo option:selected").text(response.tipo);

					}
				},
				error:function(xhr,ajaxOptions,thrownError){
					console.log("Fallo en el servidor");

				}
			});
		}	
	}

	//keypress: se ejecuta cada vez que presiono una
	//teclea sobre el input
	$("#txtClave").on("keypress",teclaClave);
	$("#btnAlta").on("click",Alta);
	$("#btnBaja").on("click",Baja);
	$("#btnCambio").on("click",Cambio);
	$("#txtUsuarioNombre").on("keypress",teclaUsuario);
	$("#btnGuardaUsuario").on("click",GuardaUsuario);
}
//Evento inicial
$(document).on("ready",inicioUsuarios);