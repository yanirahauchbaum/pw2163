
<h1>Alta de usuarios</h1>
<form action="registro_ejemplo.php" method="POST">
	<input type="hidden" name="txtOculto" value="guardaUsuario">
	<input type="text" name="txtUsuario" id="txtUsuario">
	<input type="text" name="txtNombre" id="txtNombre">
	<input type="password" name="txtClave" id="txtClave">
	<select name="txtTipo" id="txtTipo">
		<option value="administrador">Administrador</option>
		<option value="invitado">Invitado</option>
		<option value="colado">Colado</option>
	</select>
	<input type="submit" value="Enviar">
</form>
<hr>
<?php
	//Conecto al servidor
	$conexion = mysql_connect("localhost","root","");
	mysql_select_db("bd2163");
	$consulta = "select * from usuarios order by usuario";
	$resultado = mysql_query($consulta); //Ejecutando la consulta
	$registro = mysql_fetch_array($resultado);
	$tabla = "<table border=1>";
	$tabla.="<tr>"; //.= concatenacion de datos
	$tabla.="<th>Usuario</th><th>Nombre</th><th>Clave</th><th>Tipo</th>";
	$tabla.="</tr>";
	while($registro = mysql_fetch_array($resultado))
	{
		$tabla.="<tr>";
		$tabla.="<td>".$registro["usuario"]."</td>";
		$tabla.="<td>".$registro["nombre"]."</td>";
		$tabla.="<td>".$registro["clave"]."</td>";
		$tabla.="<td>".$registro["tipousuario"]."</td>";
		$tabla.="</tr>";
	}
	$tabla.="</table>";
	print $tabla;
?>
