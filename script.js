window.onload = function () {
  console.log("hola mundo!");

}


var numeroTemporal = '';
var listaOperadores = [];
var bandera = false;

var addNumero = function (numero) {
  if (bandera) {
    numeroTemporal = '';
    listaOperadores = [];
    actualizarLista();
    bandera = false;
  }
  numeroTemporal = numeroTemporal + ('' + numero);
  var resultado = document.getElementById("resultadoTotal");
  resultado.innerText = numeroTemporal;
  console.log(numeroTemporal);
}

var calcular = function () {
  let numero = Number.parseFloat(numeroTemporal);
  listaOperadores.push(numero);
  actualizarLista();
  numeroTemporal = eval(listaOperadores.reduce((prev, cur) =>{ return prev+""+cur}));
  actualizarLista();
  bandera = true;
}


var actualizarLista = function () {
  var resultadoLista = document.getElementById("resultadoLista");
  if (listaOperadores.length > 0) {
    resultadoLista.innerText = listaOperadores.reduce((prev, cur) =>{ return prev+" "+cur});
  } else {
    resultadoLista.innerHTML = '&nbsp;'
  }
  
  var resultadoTotal = document.getElementById("resultadoTotal");
  resultadoTotal.innerText = numeroTemporal;
};

var actualizarCero = function () {
  var resultadoTotal = document.getElementById("resultadoTotal");
  resultadoTotal.innerText = '0';
};


var agregarOperador = function (operador) {
  listaOperadores.push(Number.parseFloat(numeroTemporal));
  listaOperadores.push(operador);
  numeroTemporal = '';
  actualizarLista();
  actualizarCero();
};