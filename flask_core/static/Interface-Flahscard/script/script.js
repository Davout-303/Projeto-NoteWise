document.addEventListener("DOMContentLoaded", function () {
  
  const grafosBtn = document.getElementById("grafos-btn");
  const calendarioBtn = document.getElementById("calendario-btn");
  const respBtn = document.getElementById("mostrar-resposta");
  const caneta = document.getElementById("btn-caneta");
  const baralho = document.getElementById("btn-decks");

  const deckname = document.getElementsByClassName("deck-name");
  const acerteiBtn = document.getElementsByClassName('correct-btn')[0];
  const erreiBtn = document.getElementsByClassName('wrong-btn')[0];
  

  if (caneta) {
    caneta.addEventListener("click", function () {
      window.localizacao.href = "../Criacao-nota/index.html";
    });
  }

  if (grafosBtn) {
    grafosBtn.addEventListener("click", function () {
      window.localizacao.href = "../Anotacoes-grafos/index.html";
    });
  }

  if (calendarioBtn) {
    calendarioBtn.addEventListener("click", function () {
      window.localizacao.href = "../Calendario/calendario.html";
    });
  }
  
  if (baralho) {
    baralho.addEventListener("click", function () {
      window.localizacao.href = "interface.flashcard1.html";
    });
  }

  if (respBtn) {
    respBtn.addEventListener("click", function () {
      window.localizacao.href = "interface.flashcard3.html";
    });
  }
  
  if (acerteiBtn) {
    acerteiBtn.addEventListener("click", function () {
      window.localizacao.href = "interface.flashcard2.html";
    });
  }

  if (erreiBtn) {
    erreiBtn.addEventListener("click", function () {
      window.localizacao.href = "interface.flashcard2.html";
    });
  }

  
  const menuToggle = document.getElementById("menuToggle");
  const sidebar = document.getElementById("sidebar");

  menuToggle.addEventListener("click", () => {
    sidebar.classList.toggle("ativo");

    const icon = menuToggle.querySelector("i");
    if (sidebar.classList.contains("ativo")) {
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-times");
    } else {
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");
    }
  });

  
  const sidebarItems = document.querySelectorAll(".sidebar-item");
  sidebarItems.forEach((item) => {
    item.addEventListener("click", () => {
      if (window.innerWidth <= 768) {
        sidebar.classList.remove("ativo");
        const icon = menuToggle.querySelector("i");
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
      }
    });
  });
});
