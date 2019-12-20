"use strict";

function validar(){

let user = document.getElementById('iduser').value;
let pass = document.getElementById('idpass').value;

if(user=="admin" && pass=="12345"){

    alert("Bienvenido usuario y contraseña correctos");
}
else {

    alert ("error al ingresar");
}
}

