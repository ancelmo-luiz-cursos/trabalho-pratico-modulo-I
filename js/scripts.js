window.addEventListener('load', carregarPagina);

function carregarPagina() {
  var numeros = document.querySelector('#numeros');
  var numero = document.querySelector('#numero');

  numero.value = numeros.value;
}
