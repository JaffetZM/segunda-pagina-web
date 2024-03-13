//alert("Hola este es mi Javascript");
//const nombre="JAFFET";

//alert(nombre);

//
const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  parrafo.innerHTML = "";

  if (nombre.value.length < 4) {
    warnings += `El nombre debe contener más de 4 carcateres`;
    valido = false;
  }

  if (!valido) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "Enviado";
  }
  return valido;
}

form.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});

//console.log(nombre);
//let contenidoTitulo ="NOMBRE";
//let titulo=document.querySelector(".logo ");
//titulo.innerHTML = contenidoTitulo;
//condicionales
//let textoTitulo=titulo.innerText;
//console.log(textoTitulo);
//if(textoTitulo == "NOMBRE"){
//    titulo.innerHTML = "OTRO";
//}else{
//    console.log("no se cumple")
//}
