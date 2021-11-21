

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Guardar datos del Cliente</title>
    <script type="text/javascript" src="js/script.js"></script>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/login.css">
    <link rel="stylesheet" href="css/registro.css">
</head>
<body>
    <br><br><br>
<center> <button id= "inscribirse"  > <a href="index.html" class = "botones0" > Regresar </a> </button> </center>

 
 <!-- Message -->
 <div id="mensaje"></div>
 
<?php

$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$email = $_POST['email'];
$usuarioA = $_POST['usuarioA'];
$pass = $_POST['pass'];
$nacimiento = $_POST['nacimiento'];
$coordenadas = $_POST['coordenadas'];

print "  <p>Su Usuario es <strong>$usuarioA</strong>.</p>\n";
print "\n";

print "  <p>Su nombre es <strong>$nombre</strong>.</p>\n";
print "\n";
print "  <p>Su apellido es <strong>$apellido</strong> .</p>\n";
print "\n";
print "  <p>Su mail es <strong>$email</strong>.</p>\n";
print "\n";
print "  <p>Su contraseña es <strong>$pass</strong>.</p>\n";
print "\n";
print "  <p>Su fecha de nacimiento es <strong>$nacimiento</strong>.</p>\n";
print "\n";
print "  <p>Su coordenada es <strong>$coordenadas</strong>.</p>\n";
print "\n";

// Incluimos los datos de conexión y las funciones:

include ("configuracion.php");
$conexion = new mysqli ($server,$user,$pass,$bd);
if (mysqli_connect_errno ()){
   echo "No conectado", mysqli_connect_error ();
   exit ();

} else {
    echo "conectado";
}





$consulta = "INSERT INTO registro (Usuario, Nombre, Apellido, Correo, Contraseña, Fechanacimiento, posicion) VALUES ('$usuarioA', '$nombre', '$apellido', '$email', '$pass', '$nacimiento', '$coordenadas' )";

// Usamos esas variables:
if (mysqli_query ($conexion, $consulta)){
    echo "<h3>Registro agregado.</h3>";
    } else {
    echo "<h3>No se agregó nuevo registro</h3>";
    echo "Error: " . $consulta . "<br>" . mysqli_error($conexion);
 }
 mysqli_close($conexion);


?>



<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns" crossorigin="anonymous"></script>

<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>

</body>
</html>