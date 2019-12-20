"use strict";

function validar(){

var user = document.getElementById('iduser').value;
var pass = document.getElementById('idpass').value;

if(user=="admin" && pass=="12345"){

    alert("Bienvenido usuario y contraseña correctos");
}
else {

    alert ("error al ingresar");
}
}

