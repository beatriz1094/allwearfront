const key = "5627c578b85e4022fcddd89adefdd8db";

function colocarDadosNaTela(dados) {
  document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name;
  document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "ºC";
  document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description;
  document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%";
  document.querySelector(".img-previsao").src =
    "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png";

  // adicionando dicas de roupas
  const temperatura = Math.floor(dados.main.temp);
  let dica = "";

  if (temperatura >= 30) {
    dica = "☀️ Está bem quente! Use roupas leves, como camiseta e shorts.";
  } else if (temperatura >= 20) {
    dica = "🌤 Clima agradável! Aposte em roupas confortáveis, como calça leve e camisa.";
  } else if (temperatura >= 10) {
    dica = "🌥 Está fresco! Use jaqueta leve ou moletom.";
  } else {
    dica = "❄️ Frio! Vista um casaco pesado, cachecol e roupas quentinhas.";
  }

  document.querySelector(".roupa").innerHTML = dica;
}

async function buscarCidade(cidade) {
  const dados = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`
  ).then(resposta => resposta.json());

  colocarDadosNaTela(dados);
}

function cliqueiNoBotao() {
  const cidade = document.querySelector(".input-cidade").value;
  buscarCidade(cidade);
}