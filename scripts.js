document.addEventListener('DOMContentLoaded', function () {
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

  // // Consumo de API para depoimentos


  AOS.init();


  fetch('https://randomuser.me/api/?results=3')
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro na resposta da API');
      }
      return response.json();
    })
    .then(data => {
      console.log('Dados recebidos:', data); // Verifique os dados recebidos
      const testemunhosContainer = document.querySelector('.testemunhos-container');

      const depoimentos = [
        "Eu nunca pensei que um evento corporativo pudesse ser tão memorável até que contratamos o Churrasco do Andre. A carne era tão suculenta e bem temperada, e o atendimento foi impecável. Nossos convidados ainda estão falando sobre a experiência!",
        "Contratamos a empresa de churrasco e eventos para nosso evento corporativo e foi uma experiência espetacular. Atendemos centenas de convidados, incluindo executivos, e todos ficaram impressionados. A carne era assada no local, fresquinha e suculenta, servida em espetinhos e espetões no rodízio e à la carte. Tudo foi perfeito, do sabor ao atendimento. Recomendamos de olhos fechados!",
        "Nosso evento de final de ano foi um sucesso absoluto graças à empresa de churrasco e eventos. Atendemos uma grande quantidade de pessoas e todos ficaram encantados com a qualidade do serviço e, principalmente, da carne. A diversidade do menu, com opções como rodízio, espetinho e à la carte, foi um verdadeiro diferencial. A carne assada no local, novinha e suculenta, garantiu elogios de todos os convidados. Foi uma experiência gastronômica inesquecível!"
      ];

      data.results.forEach((user, index) => {
        const card = document.createElement('div');
        card.classList.add('testemunhos-container');
        card.setAttribute('data-aos', 'fade-up');
        card.innerHTML = `
              <img src="${user.picture.large}" alt="${user.name.first} ${user.name.last}">
              <h3>${user.name.first} ${user.name.last}</h3>
              <p>${depoimentos[index]}</p>
            `;
        testemunhosContainer.appendChild(card);
      });

      AOS.refresh();
    })
    .catch(error => console.error('Erro ao carregar os depoimentos:', error));

  // Validação de formulário
  emailjs.init("tXXX-JQ7HzFBIE5Gx"); 

  const form = document.getElementById('contact-form');
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    // Validação básica
    if (form.checkValidity()) {
      // Enviar dados via EmailJS
      emailjs.sendForm('service_snogihq', 'template_ykn0tmu', form)
        .then(function () {
          alert('E-mail enviado com sucesso!');
          form.reset(); // Opcional: Limpa o formulário após o envio
        }, function (error) {
          alert('Erro ao enviar o formulário: ', error);
        });
    } else {
      alert('Por favor, preencha todos os campos obrigatórios.');
    }
  });

  document.getElementById('mobile-menu').addEventListener('click', function () {
    const navList = document.querySelector('.nav-list');
    navList.classList.toggle('active'); // Alterna a classe 'active' no menu
  });

});

