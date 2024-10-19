document.addEventListener('DOMContentLoaded', function() {
    // Inicializar Swiper.js
    var swiper = new Swiper('.swiper-container', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      loop: true, // Para permitir que o carrossel funcione em loop
      autoplay: {
          delay: 3000, // Tempo em milissegundos entre as transições
          disableOnInteraction: false, // Não desabilitar autoplay após interação
      },
    });
  
    // Consumo de API para serviços
    fetch('URL_DA_API_DE_SERVICOS')
      .then(response => response.json())
      .then(data => {
        const servicosContainer = document.querySelector('.servicos-container');
        data.servicos.forEach(servico => {
          const card = document.createElement('div');
          card.classList.add('servico-card');
          card.innerHTML = `<h3>${servico.nome}</h3><p>${servico.descricao}</p>`;
          servicosContainer.appendChild(card);
        });
      })
      .catch(error => console.error('Erro ao carregar os serviços:', error));
  
    // Consumo de API para depoimentos
    fetch('URL_DA_API_DE_DEPOIMENTOS')
      .then(response => response.json())
      .then(data => {
        const testemunhosContainer = document.querySelector('.testemunhos-container');
        data.depoimentos.forEach(depoimento => {
          const card = document.createElement('div');
          card.classList.add('depoimento-card');
          card.innerHTML = `<img src="${depoimento.foto}" alt="${depoimento.nome}"><p>${depoimento.texto}</p><h4>${depoimento.nome}</h4>`;
          testemunhosContainer.appendChild(card);
        });
      })
      .catch(error => console.error('Erro ao carregar os depoimentos:', error));
  
    // Validação de formulário
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      // Validação básica
      if (form.checkValidity()) {
        // Enviar dados via EmailJS ou outra API
        console.log('Formulário válido e enviado!');
      } else {
        console.log('Por favor, preencha todos os campos obrigatórios.');
      }
    });
    
      document.getElementById('mobile-menu').addEventListener('click', function() {
          const navList = document.querySelector('.nav-list');
          navList.classList.toggle('active'); // Alterna a classe 'active' no menu
      });
   
  });
  
    