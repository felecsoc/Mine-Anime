// ===== РЕГИСТРАЦИЯ =====
function register() {
  const email = document.getElementById("email")?.value;
  const password = document.getElementById("password")?.value;

  if (!email || !password) {
    alert("Введите email и пароль");
    return;
  }

  localStorage.setItem("userEmail", email);
  localStorage.setItem("userPassword", password);
  localStorage.setItem("role", "user");
  localStorage.setItem("loggedIn", "true");

  alert("Регистрация успешна ✅");
  updateStatus();
}

// ===== ВХОД =====
function login() {
  const email = document.getElementById("email")?.value;
  const password = document.getElementById("password")?.value;

  if (
    email === localStorage.getItem("userEmail") &&
    password === localStorage.getItem("userPassword")
  ) {
    localStorage.setItem("loggedIn", "true");
    alert("Вы вошли ✅");
  } else {
    alert("Неверные данные ❌");
  }

  updateStatus();
}

// ===== ВЫХОД =====
function logout() {
  localStorage.setItem("loggedIn", "false");
  updateStatus();
}

// ===== ПРОВЕРКА РОЛИ =====
function checkRole() {
  const role = localStorage.getItem("role") || "user";
  alert("Ваша роль: " + role);
}

// ===== СОХРАНЕНИЕ ИМЕНИ =====
function saveName() {
  const name = document.getElementById("username")?.value;
  if (!name) return;

  localStorage.setItem("username", name);
  document.getElementById("welcome").textContent =
    "Добро пожаловать, " + name + " 👋";
}

// ===== СТАТУС =====
function updateStatus() {
  const status = document.getElementById("userStatus");
  if (!status) return;

  if (localStorage.getItem("loggedIn") === "true") {
    status.textContent = "Вы вошли ✅";
  } else {
    status.textContent = "Вы не вошли";
  }
}

// ===== ПАРАЛЛАКС ЭФФЕКТ =====
document.addEventListener("mousemove", function(e) {
  const content = document.querySelector(".content");
  const x = (window.innerWidth / 2 - e.clientX) / 100;
  const y = (window.innerHeight / 2 - e.clientY) / 100;
  content.style.transform = XXXINLINECODEXXX2XXXINLINECODEXXX;
});

// ===== ЗАГРУЗКА =====
window.onload = function() {
  updateStatus();

  const savedName = localStorage.getItem("username");
  if (savedName) {
    document.getElementById("welcome").textContent =
      "Добро пожаловать, " + savedName + " 👋";
  }
};