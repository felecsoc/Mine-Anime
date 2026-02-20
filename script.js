// РЕГИСТРАЦИЯ
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
  localStorage.setItem("loggedIn", "true");

  alert("Регистрация успешна!");
  updateStatus();
};

// ВХОД
window.login = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (
    email === localStorage.getItem("userEmail") &&
    password === localStorage.getItem("userPassword")
  ) {
    localStorage.setItem("loggedIn", "true");
    alert("Вы вошли!");
  } else {
    alert("Неверные данные");
  }

  updateStatus();
};

// ВЫХОД
window.logout = function () {
  localStorage.setItem("loggedIn", "false");
  alert("Вы вышли");
  updateStatus();
};

// СТАТУС
function updateStatus() {
  const status = document.getElementById("userStatus");
  const registerBtn = document.getElementById("registerBtn");
  const loginBtn = document.getElementById("loginBtn");
  const logoutBtn = document.getElementById("logoutBtn");

  if (!status) return;

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

// РОЛЬ
window.checkRole = function () {
  const role = localStorage.getItem("role") || "user";
  alert("Ваша роль: " + role);
};

// ИМЯ
window.saveName = function () {
  const name = document.getElementById("username").value;

  if (!name) return;

  localStorage.setItem("username", name);
  document.getElementById("welcome").textContent =
    "Добро пожаловать, " + name + "!";
};

// СЕРИИ
window.changeEpisode = function (ep) {
  const player = document.getElementById("player");
  if (!player) return;

  const videos = {
    1: "6zOwYQTOb_c",
    2: "_ONCVX9JCk4",
    3: "gb48QzicN8s"
  };

  player.src = "https://www.youtube.com/embed/" + videos[ep];
};

// ЗАГРУЗКА
window.onload = function () {
  updateStatus();

  const savedName = localStorage.getItem("username");
  if (savedName && document.getElementById("welcome")) {
    document.getElementById("welcome").textContent =
      "Добро пожаловать, " + savedName + "!";
  }
};