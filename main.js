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
document.addEventListener('DOMContentLoaded', function () {
    const projectItems = document.querySelectorAll('.project-item');
    const projectPopup = document.getElementById('project-popup');
    const closeButton = document.querySelector('.close-button');
    const carousel = document.querySelector('.carousel');
    const projectTitle = document.getElementById('project-title');
    const projectDescription = document.getElementById('project-description');

    const projectsData = {
        1: {
            title: 'Projeto Residencial Moderno',
            description: 'Um projeto inovador com foco em sustentabilidade e design moderno. Destaque para o uso de materiais ecologicamente corretos e soluções de iluminação natural.',
            images: [
                'https://via.placeholder.com/800x600/444',
                'https://via.placeholder.com/800x600/333',
                'https://via.placeholder.com/800x600/222'
            ]
        },
        2: {
            title: 'Reforma de Fachada Histórica',
            description: 'Restauração cuidadosa de uma fachada centenária, preservando elementos originais e revitalizando a estética do prédio. Inclui tratamento de pedras, pintura e iluminação.',
            images: [
                'https://via.placeholder.com/800x600/555',
                'https://via.placeholder.com/800x600/666',
                'https://via.placeholder.com/800x600/777'
            ]
        },
        3: {
            title: 'Espaço Comercial Inovador',
            description: 'Design de interiores para um espaço comercial, com layout funcional e identidade visual marcante. Soluções personalizadas para otimizar o fluxo de clientes e valorizar a marca.',
            images: [
                'https://via.placeholder.com/800x600/888',
                'https://via.placeholder.com/800x600/999',
                'https://via.placeholder.com/800x600/AAA'
            ]
        },
        4: {
            title: 'Projeto de Paisagismo Urbano',
            description: 'Criação de áreas verdes em ambiente urbano, com seleção de plantas nativas e soluções para permeabilidade do solo. Espaços que promovem o bem-estar e a qualidade de vida na cidade.',
            images: [
                'https://via.placeholder.com/800x600/BBB',
                'https://via.placeholder.com/800x600/CCC',
                'https://via.placeholder.com/800x600/DDD'
            ]
        }
    };

    projectItems.forEach(item => {
        item.addEventListener('click', () => {
            const projectNumber = item.dataset.project;
            const project = projectsData[projectNumber];

            // Limpar o carrossel antes de adicionar novas imagens
            carousel.innerHTML = '';

            project.images.forEach(image => {
                const slide = document.createElement('div');
                slide.innerHTML = `<img src="${image}" alt="${project.title}">`;
                carousel.appendChild(slide);
            });

            // Inicializar o Slick Carousel
            $(carousel).slick('unslick');  // Remove a inicialização anterior
            $(carousel).slick({
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                adaptiveHeight: true
            });

            projectTitle.textContent = project.title;
            projectDescription.textContent = project.description;
            projectPopup.style.display = 'flex';
        });
    });

    closeButton.addEventListener('click', () => {
        projectPopup.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == projectPopup) {
            projectPopup.style.display = 'none';
        }
    });
});