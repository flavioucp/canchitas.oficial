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

  parrafouno.style.color="greenyellow";
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
  const jugadores2=document.getElementById("jugadores2")
  const cancha2=document.getElementById("cancha2")
  

  new URL(location.href).searchParams.get('nombre')
  const params = new URL(location.href).searchParams
  const nombre = params.get('nombre')
  const jugadores = params.get('jugadores')
  const cancha= params.get('cancha')

 nombre2.innerHTML=`El nombre de tu equipo es "${nombre}"`;
 jugadores2.innerHTML=`la cantidad de jugadores es "${jugadores}"`;
 cancha2.innerHTML=`en la cancha de  "${cancha}" `;
 

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
    function datosregistro(){
      const nombre3=document.getElementById ("nombre3")
      const apellido2=document.getElementById("apellido2")
      const email2=document.getElementById("email2")
      const usuario2=document.getElementById("usuario2")
      const contrase??a2=document.getElementById("contrase??a2")
      const nacimiento2=document.getElementById("nacimiento2")
      const coordenadas2=document.getElementById("coordenadas2")
      const provincia2=document.getElementById("provincia2")
      const pais2=document.getElementById("pais2")



      new URL (location.href).searchParams.get('name')
      const params= new URL(location.href).searchParams
      const nombre=params.get('name')
      const apellido = params.get('apellido')
      const email = params.get('email')
      const usuario= params.get('usuario')
      const contrase??a= params.get('contrase??a')
      const nacimiento= params.get('nacimiento')
      const coordenadas= params.get('coordenadas')
      const provincia= params.get('provincia')
      const pais= params.get('pais')
      

      nombre3.innerHTML=`Tu nombre es "${nombre}"`;
      apellido2.innerHTML=`Tu apellido "${apellido}"`;
      email2.innerHTML=`Tu email es "${email}"`;
      usuario2.innerHTML=`Tu usuario es"${usuario}"`;
      contrase??a2.innerHTML=`La contrase??a es"${contrase??a}"`;
      nacimiento2.innerHTML=`Tu fecha de nacimiento es"${nacimiento}"`;
      coordenadas2.innerHTML=`Tu posicion es"${coordenadas}"`;
      provincia2.innerHTML=`Tu provincia es"${provincia}"`;
      pais2.innerHTML=`Tu pais"${pais}"`;



    }







