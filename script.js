// ======= Регистрация =======

function register() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!email || !password) return alert("Заполни поля");

  localStorage.setItem("userEmail", email);
  localStorage.setItem("userPassword", password);

  alert("Регистрация успешна!");
}

function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const savedEmail = localStorage.getItem("userEmail");
  const savedPassword = localStorage.getItem("userPassword");

  if (email === savedEmail && password === savedPassword) {
    localStorage.setItem("loggedIn", true);
    updateStatus();
  } else {
    alert("Неверные данные");
  }
}

function logout() {
  localStorage.removeItem("loggedIn");
  updateStatus();
}

function updateStatus() {
  const status = document.getElementById("userStatus");
  const welcome = document.getElementById("welcome");
  const name = localStorage.getItem("username");

  if (localStorage.getItem("loggedIn")) {
    status.innerText = "✅ Вы вошли";
    if (name) welcome.innerText = "Добро пожаловать, " + name;
  } else {
    if(status) status.innerText = "Вы не вошли";
    if(welcome) welcome.innerText = "";
  }
}

function saveName() {
  const username = document.getElementById("username").value;
  localStorage.setItem("username", username);
  updateStatus();
}

// ======= Сезоны и серии =======

const seasons = {
  1: [
    {id:"6zOwYQTOb_c", title:"Эпизод 1"},
    {id:"ONCVX9JCk42", title:"Эпизод 2"},
    {id:"gb48QziCN8s", title:"Эпизод 3"}
  ],
  2: [
    {id:"6zOwYQTOb_c", title:"Эпизод 1"},
    {id:"ONCVX9JCk42", title:"Эпизод 2"}
  ]
};

function createCards() {
  for (let s in seasons) {
    const container = document.getElementById("season"+s);
    if (!container) continue;

    container.innerHTML = "";

    seasons[s].forEach(ep => {
      const watched = localStorage.getItem(ep.id);

      container.innerHTML += `
        <div class="card">
          <img src="https://img.youtube.com/vi/${ep.id}/hqdefault.jpg">
          <div class="cardContent">
            <h3>${ep.title}</h3>
            <a href="https://www.youtube.com/watch?v=${ep.id}" 
               target="_blank" 
               class="watchBtn"
               onclick="markWatched('${ep.id}')">
               ▶ Смотреть
            </a>
            <div class="watched">
              ${watched ? "✅ Смотрел" : ""}
            </div>
          </div>
        </div>
      `;
    });
  }
}

function markWatched(id) {
  localStorage.setItem(id, true);
}

function showSeason(num) {
  document.querySelectorAll(".season").forEach(el=>el.classList.remove("activeSeasonBlock"));
  document.querySelectorAll(".seasonSwitch button").forEach(el=>el.classList.remove("activeSeason"));

  document.getElementById("season"+num).classList.add("activeSeasonBlock");
  document.getElementById("s"+num).classList.add("activeSeason");
}

// Запуск
updateStatus();
createCards();