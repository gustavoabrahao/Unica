const slider = document.querySelector(".image-comparison .slider");
const beforeImage = document.querySelector(".image-comparison .before-image");
const sliderLine = document.querySelector(".image-comparison .slider-line");
const sliderIcon = document.querySelector(".image-comparison .slider-icon");

slider.addEventListener("input", (e) => {
  let sliderValue = e.target.value + "%";

  beforeImage.style.width = sliderValue;
  sliderLine.style.left = sliderValue;
  sliderIcon.style.left = sliderValue;
});

// JavaScript para o popup
document.addEventListener("DOMContentLoaded", function () {
  const projectItems = document.querySelectorAll(".project-item");
  const projectPopup = document.getElementById("project-popup");
  const closeButton = document.querySelector(".close-button");
  const carousel = document.querySelector(".carousel");
  const projectTitle = document.getElementById("project-title");
  const projectDescription = document.getElementById("project-description");

  const projectsData = {
    1: {
      title: "Reforma Estrutural",
      description:
        "Transforme e fortaleça a estrutura do seu imóvel com nossas soluções de reforma estrutural. Seja para revitalizar um prédio antigo ou reforçar a infraestrutura existente, nossa equipe está equipada para lidar com projetos de qualquer tamanho e complexidade. Utilizamos técnicas avançadas e materiais de alta qualidade para garantir segurança e durabilidade em cada obra.",
      images: ["img/image.png", "img/image.png", "img/image.png"],
    },

    2: {
      title: "Pintura Predial",
      description:
        "Dê uma nova vida ao seu imóvel com nossos serviços de pintura predial. Especialistas em pintura industrial e residencial, oferecemos acabamentos impecáveis que protegem e embelezam suas estruturas. Trabalhamos com tintas de alta performance e processos eficientes para proporcionar um visual renovado e duradouro, valorizando seu patrimônio.",
      images: [
        "https://via.placeholder.com/800x600/555",
        "https://via.placeholder.com/800x600/666",
        "https://via.placeholder.com/800x600/777",
      ],
    },

    3: {
      title: "Telhados",
      description:
        "Cuidamos da manutenção, reparo e instalação de telhados, assegurando que sua propriedade esteja sempre protegida contra as intempéries. Nossos serviços incluem a substituição de telhas, impermeabilização e soluções para melhorar a eficiência energética. Com a Única, você pode ter certeza de um telhado robusto e confiável.",
      images: [
        "https://via.placeholder.com/800x600/888",
        "https://via.placeholder.com/800x600/999",
        "https://via.placeholder.com/800x600/AAA",
      ],
    },

    4: {
      title: "Outros Serviços",
      description:
        "Além de nossas especialidades principais, oferecemos uma gama de serviços adicionais para atender todas as necessidades de manutenção e renovação de seu imóvel: IMPERMEABILIZAÇÃO, Proteja seu prédio contra infiltrações e danos causados pela água com nossas soluções de impermeabilização de alta qualidade. REFORMAS INTERIORES, Transforme seus espaços internos com reformas que aliam funcionalidade e estética, adaptando-se às suas necessidades e estilo.",
      images: [
        "https://via.placeholder.com/800x600/BBB",
        "https://via.placeholder.com/800x600/CCC",
        "https://via.placeholder.com/800x600/DDD",
      ],
    },
  };

  // Função para inicializar/atualizar o Slick Carousel
  function updateSlickCarousel(images) {
    // Remove a inicialização anterior
    if (carousel.classList.contains("slick-initialized")) {
      $(carousel).slick("unslick");
    }

    // Limpa o conteúdo do carrossel
    carousel.innerHTML = "";

    // Adiciona as novas imagens ao carrossel
    images.forEach((image) => {
      const slide = document.createElement("div");
      slide.innerHTML = `<img src="${image}" alt="Projeto">`;
      carousel.appendChild(slide);
    });

    // Inicializa o Slick Carousel
    $(carousel).slick({
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      adaptiveHeight: true,
    });
  }

  projectItems.forEach((item) => {
    item.addEventListener("click", () => {
      const projectNumber = item.dataset.project;
      const project = projectsData[projectNumber];

      updateSlickCarousel(project.images);

      projectTitle.textContent = project.title;
      projectDescription.textContent = project.description;
      projectPopup.style.display = "flex";
    });
  });

  closeButton.addEventListener("click", () => {
    projectPopup.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target == projectPopup) {
      projectPopup.style.display = "none";
    }
  });
});
