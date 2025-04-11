$(document).ready(function () {
  $("#mobile-btn").on("click", function () {
    $("#mobile-menu").toggleClass("active");
    $("#mobile-btn").find("i").toggleClass("fa-x");
  });
});

// dark mode //

let darkMode = localStorage.getItem("darkmode");
const themeSwitch = document.getElementById("switch-theme");

const enableDarkmode = () => {
  document.body.classList.add("darkmode");
  localStorage.setItem("darkmode", "active");
};

const disableDarkmode = () => {
  document.body.classList.remove("darkmode");
  localStorage.setItem("darkmode", null);
};

if (darkMode === "active") enableDarkmode();

themeSwitch.addEventListener("click", () => {
  darkMode = localStorage.getItem("darkmode");
  darkMode !== "active" ? enableDarkmode() : disableDarkmode();
});

//---------------------------------------------------------------------------------------------------------------------------------------------------------//

//filtro - busca//
 
const items = [
  { name: "Reinações de Narizinho", url: "http://books.google.com.br/books?id=JZ-DDwAAQBAJ&newbks=0&lpg=PT2&hl=pt-BR&pg=PT5&output=embed" },
  { name: "Avesso da Pele", url: "http://www.google.com.br/books/edition/O_avesso_da_pele_Vencedor_Jabuti_2021/cC_tDwAAQBAJ?hl=pt-BR&gbpv=1&dq=avesso%20da%20pele&pg=PP1&printsec=frontcover" },
  { name: "Dom Quixote", url: "http://www.google.com.br/books/edition/Dom_Quixote/4855DwAAQBAJ?hl=pt-BR&gbpv=1&dq=Dom%20Quixote&pg=PP1&printsec=frontcover" },
  { name: "A Hora da Estrela", url: "http://www.google.com.br/books/edition/A_hora_da_estrela_de_Clarice/EcgOEAAAQBAJ?hl=pt-BR&gbpv=1&dq=A%20hora%20da%20estrela&pg=PP1&printsec=frontcover" },
  { name: "Morte e Vida Severina", url: "http://www.google.com.br/books/edition/Morte_e_vida_severina/Ahj7XZhJxvcC?hl=pt-BR&gbpv=1&dq=morte%20e%20vida%20severina&pg=PP1&printsec=frontcover" },
];
 
const searchBar = document.getElementById("search");
const popup = document.getElementById("popup");
const lup = document.getElementById("lupa");
 
function showResults(searchTerm) {
    popup.innerHTML = '';  
    if (searchTerm.trim() === '') {
        popup.style.display = 'none'; 
        return;
    }

    const filteredItems = items.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (filteredItems.length > 0) {
        filteredItems.forEach(item => {
            const div = document.createElement('div');
            div.className = 'item';
            div.textContent = item.name;
 
            div.addEventListener('click', () => {
                window.open(item.url, '_blank');  
            });

            popup.appendChild(div);
        });
        popup.style.display = 'block';  
    } else {
        popup.style.display = 'none';  
    }
}
 
searchBar.addEventListener('input', function () {
    showResults(this.value);  
  
    lup.style.display = 'none';
    if (this.value.trim() === '') {
        setTimeout(() => lup.style.display = 'block', 0);  
    }
});

searchBar.addEventListener('focus', function () {
    if (this.value.trim() !== '') {
        popup.style.display = 'block';  
        lup.style.display = 'none';
    }    
});

searchBar.addEventListener('blur', function () {
    setTimeout(() => popup.style.display = 'none', 200);  
    
    if (this.value.trim() === '') {
    setTimeout(() => lup.style.display = 'block', 100);  
    }
});


