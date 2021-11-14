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
