const slide1 = document.getElementById('slide1');
const slide2 = document.getElementById('slide2');
const slide3 = document.getElementById('slide3');
var roupas = JSON.parse(localStorage.getItem("colecao"));
var contSlide = [0, 0, 0];

async function exibirRoupas() {
  slide1.src = roupas[contSlide[0]].imagemUrl
  slide2.src = roupas[contSlide[1]].imagemUrl
  slide3.src = roupas[contSlide[2]].imagemUrl
}
