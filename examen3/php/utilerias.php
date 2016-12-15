<?php
	//Limpiar parámetros - contra ataques
	function GetSQLValueString($theValue, $theType, $theDefinedValue = "", $theNotDefinedValue = "") 
	{
	  $theValue = get_magic_quotes_gpc() ? stripslashes($theValue) : $theValue;
	  $theValue = function_exists("mysql_real_escape_string") ? mysql_real_escape_string($theValue) : mysql_escape_string($theValue);
	  switch ($theType) {
	    case "text":
	      $theValue = ($theValue != "") ? "'" . $theValue . "'" : "NULL";
	      break;    
	    case "long":
	    case "int":
	      $theValue = ($theValue != "") ? intval($theValue) : "NULL";
	      break;
	    case "double":
	      $theValue = ($theValue != "") ? "'" . doubleval($theValue) . "'" : "NULL";
	      break;
	    case "date":
	      $theValue = ($theValue != "") ? "'" . $theValue . "'" : "NULL";
	      break;
	    case "defined":
	      $theValue = ($theValue != "") ? $theDefinedValue : $theNotDefinedValue;
	      break;
	  }
	  return $theValue;
	}
	function validaArticulo()
	{		
		$respuesta = false;			
		$id = GetSQLValueString($_POST["idArticulo"],"int"); //limpieza
		//Conexión al servidor
		$conexion  = mysql_connect("localhost","root","");
		//Conexión a la base de datos
		mysql_select_db("examenpw");
		$consulta  = sprintf("select idArticulo from articulos ",$id);
		$resultado = mysql_query($consulta);
		//Esperamos un solo resultado
		if(mysql_num_rows($resultado) == 1)
		{
			$respuesta = true;
		}
		$arregloJSON = array('respuesta' => $respuesta );
		print json_encode($arregloJSON);
	}
	function Consultas()
	{
		$respuesta = true;
		$id = GetSQLValueString($_POST["idArticulo"],"int");
		$d = GetSQLValueString($_POST["descripcion"],"text");
		$c = GetSQLValueString($_POST["cantidad"],"int");
		$p = GetSQLValueString($_POST["precio"],"int");
		$u = GetSQLValueString($_POST["unidad"],"text");
		$conexion = mysql_connect("localhost","root","");
		mysql_select_db("examenpw");
		$consulta = sprintf("select * from articulos order by idArticulo");
		$resultado = mysql_query($consulta);
		if(mysql_num_rows($resultado)>0)
		{
			$respuesta = true;
		}
		$arregloJSON = array('respuesta' => $respuesta);
		print json_encode($arregloJSON);
	}
	//Menú principal
	$opc = $_POST["opcion"];
	switch ($opc) {
		case 'valida':
			validaArticulo();
			break;
		case 'consultas':
			Consultas();
			break;
		default:
			# code...
			break;
	}
?>