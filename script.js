// Регистрация
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


// Вход
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
function updateStatus() {
  const status = document.getElementById("userStatus");
  const registerBtn = document.getElementById("registerBtn");
  const loginBtn = document.getElementById("loginBtn");
  const logoutBtn = document.getElementById("logoutBtn");

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
// Установка роли при регистрации
// (добавь ЭТУ строку внутрь register перед alert)


// Проверка роли
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
// Сохранение имени
window.saveName = function () {
...
}
window.changeEpisode = function (ep) {
    const player = document.getElementById("player");

    if (ep === 1) {
        player.src = https://youtube.com/shorts/6zOwYQTOb_c?si=zygdcnBu_uX5oQrf    }
    if (ep === 2) {
        player.src = https://youtube.com/shorts/_ONCVX9JCk4?si=Xbs0FA_JKbjeP8ei    }
    if (ep === 3) {
        player.src = https://youtube.com/shorts/gb48QzicN8s?si=W5mcU1cQexXDg2V-    }
};
