// // carrossel//
// const carouselContainer = document.querySelector('.carousel-container');
// const indicators = document.querySelectorAll('.indicator');
// const totalItems = document.querySelectorAll('.carousel-item').length;
// const itemWidth = 1430;
// let currentIndex = 0;
// const intervalTime = 3000;
// let autoSlide;

// function updateCarousel(instant = false) {
//     const offset = -currentIndex * itemWidth;
//     carouselContainer.style.transition = instant ? "none" : "transform 0.5s ease-in-out";
//     carouselContainer.style.transform = `translateX(${offset}px)`;

//     indicators.forEach((indicator, index) => {
//         indicator.classList.toggle('active', index === currentIndex);
//     });
// }

// function validateIndex() {
//     if (currentIndex >= totalItems) {
//         currentIndex = 0;
//     } else if (currentIndex < 0) {
//         currentIndex = totalItems - 1;
//     }
//     updateCarousel(true);
// }

// function startAutoSlide() {
//     autoSlide = setInterval(() => {
//         currentIndex++;
//         if (currentIndex >= totalItems) {
//             currentIndex = 0;
//             updateCarousel(true);
//         } else {
//             updateCarousel();
//         }
//     }, intervalTime);
// }

// function stopAutoSlide() {
//     clearInterval(autoSlide);
//     startAutoSlide();
// }

// indicators.forEach((indicator, index) => {
//     indicator.addEventListener('click', () => {
//         stopAutoSlide();
//         currentIndex = index;
//         updateCarousel();
//     });
// });

// startAutoSlide();

const carousel = document.querySelector(".carousel");
const dots = document.querySelectorAll(".dot");
const tempoPadrao = 3000; // 3000ms = 3 segundos
const tempoPausa = 5000; // 5 segundos de pausa após o clique
let loop;

function iniciarLoop(tempo) {
  clearInterval(loop); // Limpa qualquer loop ativo para evitar duplicidade
  loop = setInterval(autoScroll, tempo);
}

if (dots) {
  function atualizarIndicadores(index) {
    dots.forEach((dot) => dot.classList.remove("active"));
    if (dots[index]) dots[index].classList.add("active");
  }

  function irParaSlide(index) {
    const largura = carousel.offsetWidth;
    clearInterval(loop);
    // 2. Move para o slide clicado
    carousel.scrollTo({ left: largura * index, behavior: "smooth" });
    atualizarIndicadores(index);
    // 3. Agenda para recomeçar o giro automático após 5 segundos
    // Usamos setTimeout para esperar a pausa e depois reiniciar o setInterval
    setTimeout(() => {
      iniciarLoop(tempoPadrao);
    }, tempoPausa);
  }
}

if (carousel) {
  // function autoScroll() {
  //   const larguraItem = carousel.offsetWidth;
  //   const posicaoAtual = carousel.scrollLeft;
  //   const larguraTotal = carousel.scrollWidth;

  //   // Se a posição atual + a largura do item for igual ou maior que a largura total,
  //   // significa que a última imagem já está na tela e o próximo passo deve ser o reset.
  //   if (posicaoAtual + larguraItem >= larguraTotal - 5) {
  //     carousel.scrollTo({ left: 0, behavior: "auto" }); // Volta instantâneo
  //   } else {
  //     carousel.scrollBy({ left: larguraItem, behavior: "smooth" }); // Avança suave
  //   }
  // }

  // let loop = setInterval(autoScroll, intervalo);

  function autoScroll() {
    const larguraItem = carousel.offsetWidth;
    const larguraTotal = carousel.scrollWidth;
    let proximoIndex = Math.round(carousel.scrollLeft / larguraItem) + 1;

    if (proximoIndex * larguraItem >= larguraTotal) {
      carousel.scrollTo({ left: 0, behavior: "auto" });
      atualizarIndicadores(0);
    } else {
      carousel.scrollTo({
        left: larguraItem * proximoIndex,
        behavior: "smooth",
      });
      atualizarIndicadores(proximoIndex);
    }
  }

  iniciarLoop(tempoPadrao);

  // Inicia o timer

  // OPCIONAL: Pausa o carrossel quando o usuário coloca o mouse em cima
  carousel.addEventListener("mouseenter", () => clearInterval(loop));
  carousel.addEventListener(
    "mouseleave",
    () => (loop = setInterval(autoScroll, tempoPadrao)),
  );
}
