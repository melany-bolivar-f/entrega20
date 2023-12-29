const d = document;

function moverA(pagina) {
  fetch(pagina)
}

d.querySelector('#copyright').innerHTML = `<p>&copy; Copyright ${new Date().getFullYear()}<span class="pstr">Melany Bolivar</span>. Todos los derechos reservados</p>`