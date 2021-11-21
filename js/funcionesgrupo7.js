function findme(){
    var output= document.getElementById("map");
    if(navigator.geolocation){
      output.innerHTML = " <p> tu navegador soporta geolocalizacion </p> ";
    }else
      { output.innerHTML ="<p> tu navegador no soporta geolocalizacion</p>";

      }
      function localizacion (posicion){
        var latitude = posicion.coords.latitude;
        var longitude = posicion.coords.longitude; 
        output.innerHTML ="<p> latitud:"+latitude+"<br> longitud:"+longitude+"</p>";
      }
      function error (){
        output.innerHTML ="<p> no se pudo obtener tu ubicacion</p>"




      }
      navigator.geolocation.getCurrentPosition(localizacion,error);

      }
    
  

    function alerta(){
            alert("REGISTRADO CORRECTAMENTE");
            
        }
    
    // Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()
 
function checkLength() {
  var nombre = document.getElementById ("nombre");
  if (nombre.value.length >2) {
    true;
  }
  else { alert ("Debe contener mas de 2 caracteres")
}
}


function checkLength(){
  var apellido = document.getElementById("apellido");

  if(apellido.value.length >= 2){
     true;
  }
  else{
      alert("Debe contener mas de 2 caracteres")
  }
}
function CambiarColor(){
  const parrafouno=document.getElementById ("parrafouno")

  parrafouno.style.color="red"
}
function cambiarImagen(){
  const imagen=document.getElementById ("logo")
  imagen.src="img/balon.png"
}
function mostrarOriginal(){
  const imagen=document.getElementById ("logo")
  imagen.src="img/logo_canchitas.png"
}
function mostrarDatos () {
  const nombre2=document.getElementById ("nombre2")

  new URL(location.href).searchParams.get('nombre')
  const params = new URL(location.href).searchParams
  const nombre = params.get('nombre')

 nombre2.innerHTML=`El nombre de tu equipo es ${nombre}`;
 nombre2.style.color=black;

}

 


  function calculateAge() {
    var d = document.getElementById("nacimiento").value;
       var inDate = new Date(d);
       var anio = inDate.getFullYear();
       var fec_actual = new Date() ; 
    var fec_anio = fec_actual.getFullYear() ;
       var edad   =  fec_anio -anio ;
        if (edad >= 18) {
          alert("Acceso permitido, cumplis la edad minima")
        }else
       {
       alert("ACCESO NO VALIDO: no cumplis la edad minima")
       }
   }








