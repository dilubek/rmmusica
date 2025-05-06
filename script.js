const menu = document.getElementById("instrument-menu");
const content = document.getElementById("content");
const backButton = document.getElementById("back-button");
const slider = document.getElementById("slider");
const sliderImage = document.getElementById("slider-image");
const sliderTitle = document.getElementById("slider-title");
const sliderDescription = document.getElementById("slider-description");

const instrumentos = {
  violino: { imagens: ["violino.png"], nome: "Violino", desc: "Instrumento clássico de cordas.", preco: "R$ 1.500,00" },
  saxofone: {
    imagens: ["soprano.png", "alto.png", "Tenor.png", "baritono.png"],
    nome: "Saxofones",
    desc: "Coleção completa: soprano, alto, tenor e barítono.",
    preco: "a partir de R$ 2.300,00"
  },
  clarineta: { imagens: ["clarineta.png"], nome: "Clarineta", desc: "Ideal para bandas e orquestras.", preco: "R$ 1.400,00" },
  tuba: { imagens: ["Tuba.png"], nome: "Tuba", desc: "Som encorpado para bandas marciais.", preco: "R$ 3.800,00" },
  trombone: { imagens: ["trombone.png"], nome: "Trombone", desc: "Popular em jazz e orquestras.", preco: "R$ 2.000,00" },
  acordeon: { imagens: ["acordeon.png"], nome: "Acordeon", desc: "Versátil e expressivo.", preco: "R$ 2.700,00" }
};

// Mostrar galeria ao clicar em um instrumento
menu.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    const tipo = e.target.dataset.instrument;
    const info = instrumentos[tipo];

    content.innerHTML = info.imagens.map(src => `
      <div>
        <img src="images/${src}" alt="${info.nome}">
        <div class="item-description">
          <strong>${info.nome}</strong><br/>
          ${info.desc}<br/>
          <span class="price">${info.preco}</span>
        </div>
      </div>
    `).join("");

    slider.style.display = "none";
    content.style.display = "grid";
    backButton.style.display = "block";
  }
});

// Voltar ao início
backButton.addEventListener("click", () => {
  slider.style.display = "block";
  content.style.display = "none";
  backButton.style.display = "none";
});

// Slider automático
const sliderData = Object.values(instrumentos).map(i => ({
  img: i.imagens[0],
  nome: i.nome,
  desc: i.desc,
  preco: i.preco
}));

let current = 0;
function changeSlide() {
  current = (current + 1) % sliderData.length;
  sliderImage.src = `images/${sliderData[current].img}`;
  sliderTitle.textContent = sliderData[current].nome;
  sliderDescription.innerHTML = `${sliderData[current].desc}<br><span class="price">${sliderData[current].preco}</span>`;
}
setInterval(changeSlide, 4000);
