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
      images: ["img/estrut1.jpeg", "img/estrut2.jpeg", "img/estrut3.jpeg"],
    },

    2: {
      title: "Pintura Predial",
      description:
        "Dê uma nova vida ao seu imóvel com nossos serviços de pintura predial. Especialistas em pintura industrial e residencial, oferecemos acabamentos impecáveis que protegem e embelezam suas estruturas. Trabalhamos com tintas de alta performance e processos eficientes para proporcionar um visual renovado e duradouro, valorizando seu patrimônio.",
      images: [
        "img/Stock-Condo-Exterior-Adobe-51342322-2.png",
        "img/Unica-2.png",
        "img/Unica-3.png",
      ],
    },

    3: {
      title: "Telhados",
      description:
        "Cuidamos da manutenção, reparo e instalação de telhados, assegurando que sua propriedade esteja sempre protegida contra as intempéries. Nossos serviços incluem a substituição de telhas, impermeabilização e soluções para melhorar a eficiência energética. Com a Única, você pode ter certeza de um telhado robusto e confiável.",
      images: [
        "img/Unica-3.png",
        "img/image.png",
        "img/Stock-Condo-Exterior-Adobe-51342322-2.png",
      ],
    },

    4: {
      title: "Outros Serviços",
      description:
        "Além de nossas especialidades principais, oferecemos uma gama de serviços adicionais para atender todas as necessidades de manutenção e renovação de seu imóvel: IMPERMEABILIZAÇÃO, Proteja seu prédio contra infiltrações e danos causados pela água com nossas soluções de impermeabilização de alta qualidade. REFORMAS INTERIORES, Transforme seus espaços internos com reformas que aliam funcionalidade e estética, adaptando-se às suas necessidades e estilo.",
      images: [
        "img/Stock-Condo-Exterior-Adobe-51342322-2.png",
        "img/Unica-2.png",
        "img/image.png",
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

// Funcionalidade para a seção de depoimentos
document.addEventListener("DOMContentLoaded", function () {
  // Inicializar o slider de depoimentos
  const testimonialsSlider = document.querySelector(".testimonials-slider");
  const testimonialItems = document.querySelectorAll(".testimonial-item");

  if (testimonialsSlider && testimonialItems.length > 0) {
    // Adicionar navegação por botões
    const sliderNav = document.createElement("div");
    sliderNav.className = "testimonials-nav";

    const prevBtn = document.createElement("button");
    prevBtn.className = "testimonial-nav-btn prev";
    prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';

    const nextBtn = document.createElement("button");
    nextBtn.className = "testimonial-nav-btn next";
    nextBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';

    sliderNav.appendChild(prevBtn);
    sliderNav.appendChild(nextBtn);

    testimonialsSlider.parentNode.appendChild(sliderNav);

    // Funcionalidade de navegação
    let currentIndex = 0;
    const itemWidth = testimonialItems[0].offsetWidth + 30; // 30px é o gap

    // Função para atualizar a posição do slider
    function updateSliderPosition() {
      testimonialsSlider.scrollTo({
        left: currentIndex * itemWidth,
        behavior: "smooth",
      });
    }

    // Event listeners para os botões
    prevBtn.addEventListener("click", () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateSliderPosition();
      }
    });

    nextBtn.addEventListener("click", () => {
      if (currentIndex < testimonialItems.length - 1) {
        currentIndex++;
        updateSliderPosition();
      }
    });

    // Adicionar indicadores de página
    const paginationContainer = document.createElement("div");
    paginationContainer.className = "testimonials-pagination";

    for (let i = 0; i < testimonialItems.length; i++) {
      const dot = document.createElement("span");
      dot.className = "pagination-dot";
      if (i === 0) dot.classList.add("active");

      dot.addEventListener("click", () => {
        currentIndex = i;
        updateSliderPosition();

        // Atualizar classe ativa
        document
          .querySelectorAll(".pagination-dot")
          .forEach((d) => d.classList.remove("active"));
        dot.classList.add("active");
      });

      paginationContainer.appendChild(dot);
    }

    testimonialsSlider.parentNode.appendChild(paginationContainer);

    // Atualizar a classe ativa ao rolar
    testimonialsSlider.addEventListener("scroll", () => {
      const scrollPosition = testimonialsSlider.scrollLeft;
      const newIndex = Math.round(scrollPosition / itemWidth);

      if (newIndex !== currentIndex) {
        currentIndex = newIndex;

        // Atualizar classe ativa nos indicadores
        document.querySelectorAll(".pagination-dot").forEach((dot, index) => {
          if (index === currentIndex) {
            dot.classList.add("active");
          } else {
            dot.classList.remove("active");
          }
        });
      }
    });
  }

  // Adicionar animações ao scroll
  const animateOnScroll = function () {
    const elements = document.querySelectorAll(
      ".text-column, .image-column, .testimonial-item, .project-item"
    );

    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementPosition < windowHeight * 0.85) {
        element.classList.add("animate");
      }
    });
  };

  // Executar animação ao carregar a página
  animateOnScroll();

  // Executar animação ao rolar a página
  window.addEventListener("scroll", animateOnScroll);

  // Menu mobile responsivo
  const mobileMenu = document.createElement("div");
  mobileMenu.className = "mobile-menu";
  mobileMenu.innerHTML = '<i class="fas fa-bars"></i>';

  const mobileNav = document.createElement("div");
  mobileNav.className = "mobile-nav";
  mobileNav.style.display = "none";

  // Clonar os links do menu principal
  const navLinks = document.querySelector("nav ul").cloneNode(true);
  mobileNav.appendChild(navLinks);

  // Adicionar ao container mobile
  const containerMobile = document.querySelector(".conteiner-mobile");
  if (containerMobile) {
    containerMobile.appendChild(mobileMenu);
    document.body.appendChild(mobileNav);

    // Toggle do menu mobile
    mobileMenu.addEventListener("click", () => {
      if (mobileNav.style.display === "none") {
        mobileNav.style.display = "block";
        mobileMenu.innerHTML = '<i class="fas fa-times"></i>';
      } else {
        mobileNav.style.display = "none";
        mobileMenu.innerHTML = '<i class="fas fa-bars"></i>';
      }
    });

    // Fechar menu ao clicar em um link
    mobileNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mobileNav.style.display = "none";
        mobileMenu.innerHTML = '<i class="fas fa-bars"></i>';
      });
    });
  }

  // Botão Voltar ao Topo
  const backToTopButton = document.querySelector(".back-to-top");

  if (backToTopButton) {
    // Mostrar/esconder o botão com base na posição de rolagem
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        backToTopButton.classList.add("visible");
      } else {
        backToTopButton.classList.remove("visible");
      }
    });

    // Rolar suavemente para o topo ao clicar no botão
    backToTopButton.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }
});
