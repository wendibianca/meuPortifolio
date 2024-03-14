const botaoTopo = document.querySelector(".botao-topo");
window.addEventListener("scroll", function(event){
  if (window.scrollY <= 100) {
    botaoTopo.classList.remove("botao-topo-mostrar");
  } else {
    botaoTopo.classList.add("botao-topo-mostrar");
  }
});