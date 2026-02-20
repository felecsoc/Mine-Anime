// =================== РЕГИСТРАЦИЯ ===================
window.register = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!email || !password) {
    alert("Введите email и пароль");
    return;
  }

  localStorage.setItem("userEmail", email);
  localStorage.setItem("userPassword", password);
  localStorage.setItem("role", "user");

  alert("Регистрация успешна!");
  updateStatus();
};


// =================== ВХОД ===================
window.login = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const savedEmail = localStorage.getItem("userEmail");
  const savedPassword = localStorage.getItem("userPassword");

  if (email === savedEmail && password === savedPassword) {
    localStorage.setItem("loggedIn", "true");
    alert("Вы вошли!");
  } else {
    alert("Неверный email или пароль");
  }

  updateStatus();
};


// =================== ВЫХОД ===================
window.logout = function () {
  localStorage.setItem("loggedIn", "false");
  alert("Вы вышли");
  updateStatus();
};


// =================== ОБНОВЛЕНИЕ СТАТУСА ===================
function updateStatus() {
  const status = document.getElementById("userStatus");
  const registerBtn = document.getElementById("registerBtn");
  const loginBtn = document.getElementById("loginBtn");
  const logoutBtn = document.getElementById("logoutBtn");

  if (!status) return; // чтобы не было ошибки на anime.html

  if (localStorage.getItem("loggedIn") === "true") {
    status.textContent = "Вы вошли ✅";
    registerBtn.style.display = "none";
    loginBtn.style.display = "none";
    logoutBtn.style.display = "inline-block";
  } else {
    status.textContent = "Вы не вошли";
    registerBtn.style.display = "inline-block";
    loginBtn.style.display = "inline-block";
    logoutBtn.style.display = "none";
  }
}


// =================== ПРОВЕРКА РОЛИ ===================
window.checkRole = function () {
  const role = localStorage.getItem("role");

  if (role === "admin") {
    alert("Вы администратор 👑");
  } else if (role === "vip") {
    alert("Вы VIP ⭐️");
  } else {
    alert("Обычный пользователь");
  }
};


// =================== СОХРАНЕНИЕ ИМЕНИ ===================
window.saveName = function () {
  const name = document.getElementById("username").value;

  if (!name) {
    alert("Введите имя");
    return;
  }

  localStorage.setItem("username", name);
  document.getElementById("welcome").textContent =
    "Добро пожаловать, " + name + "!";
};


// =================== СМЕНА СЕРИИ ===================
window.changeEpisode = function (ep) {
  const player = document.getElementById("player");
  if (!player) return;

  if (ep === 1) {
    player.src = "https://www.youtube.com/embed/6zOwYQTOb_c";
  }

  if (ep === 2) {
    player.src = "https://www.youtube.com/embed/_ONCVX9JCk4";
  }

  if (ep === 3) {
    player.src = "https://www.youtube.com/embed/gb48QzicN8s";
  }
};


// =================== ЗАГРУЗКА ПРИ СТАРТЕ ===================
window.onload = function () {
  updateStatus();

  const savedName = localStorage.getItem("username");
  if (savedName && document.getElementById("welcome")) {
    document.getElementById("welcome").textContent =
      "Добро пожаловать, " + savedName + "!";
  }
};