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
};

// Выход
window.logout = function () {
  localStorage.removeItem("loggedIn");
  alert("Вы вышли");
  updateStatus();
};

// Обновление статуса
function updateStatus() {
  const status = document.getElementById("userStatus");

  if (localStorage.getItem("loggedIn") === "true") {
    status.textContent = "Вы вошли ✅";
  } else {
    status.textContent = "Вы не вошли";
  }
}

// Проверка при загрузке страницы
window.onload = function () {
  updateStatus();
};
