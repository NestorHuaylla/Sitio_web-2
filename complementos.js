
const lista = document.getElementById("miLista");
const enlaces = lista.querySelectorAll("a");
enlaces.forEach(enlace => {
  enlace.setAttribute("target", "_blank");
  enlace.setAttribute("rel", "noopener noreferrer");
});
