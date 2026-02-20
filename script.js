// ================= РЕГИСТРАЦИЯ =================
window.register = function () {
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
};

// ================= ВХОД =================
window.login = function () {
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
};

// ================= ВЫХОД =================
window.logout = function () {
    localStorage.setItem("loggedIn", "false");
    alert("Вы вышли");
    updateStatus();
};

// ================= ПРОВЕРКА РОЛИ =================
window.checkRole = function () {
    const role = localStorage.getItem("role") || "user";
    alert("Ваша роль: " + role);
};

// ================= ОБНОВЛЕНИЕ СТАТУСА =================
function updateStatus() {
    const status = document.getElementById("userStatus");
    const registerBtn = document.getElementById("registerBtn");
    const loginBtn = document.getElementById("loginBtn");
    const logoutBtn = document.getElementById("logoutBtn");

    if (!status) return;

    if (localStorage.getItem("loggedIn") === "true") {
        status.textContent = "Вы вошли ✅";
        if (registerBtn) registerBtn.style.display = "none";
        if (loginBtn) loginBtn.style.display = "none";
        if (logoutBtn) logoutBtn.style.display = "inline-block";
    } else {
        status.textContent = "Вы не вошли";
        if (registerBtn) registerBtn.style.display = "inline-block";
        if (loginBtn) loginBtn.style.display = "inline-block";
        if (logoutBtn) logoutBtn.style.display = "none";
    }
}

// ================= СОХРАНЕНИЕ ИМЕНИ =================
window.saveName = function () {
    const name = document.getElementById("username")?.value;

    if (!name) return;

    localStorage.setItem("username", name);

    const welcome = document.getElementById("welcome");
    if (welcome) {
        welcome.textContent = "Добро пожаловать, " + name + " 👋";
    }
};

// ================= СМЕНА СЕРИИ =================
window.changeEpisode = function (ep) {

    const videos = {
        1: "6zOwYQTOb_c",
        2: "_ONCVX9JCk4",
        3: "gb48QzicN8s"
    };

    const player = document.getElementById("player");
    if (player) {
        player.src = "https://www.youtube.com/embed/" + videos[ep];
    }
};

// ================= ПАРАЛЛАКС ПЕРСОНАЖЕЙ =================
document.addEventListener("mousemove", function (e) {

    const leftChar = document.querySelector(".left");
    const rightChar = document.querySelector(".right");

    const x = (window.innerWidth / 2 - e.clientX) / 30;
    const y = (window.innerHeight / 2 - e.clientY) / 30;

    if (leftChar) {
        leftChar.style.transform = XXXINLINECODEXXX0XXXINLINECODEXXX;
    }

    if (rightChar) {
        rightChar.style.transform = XXXINLINECODEXXX1XXXINLINECODEXXX;
    }
});

// ================= ЭФФЕКТ КЛИКА =================
document.addEventListener("click", function (e) {

    const ripple = document.createElement("span");
    ripple.style.position = "fixed";
    ripple.style.width = "20px";
    ripple.style.height = "20px";
    ripple.style.borderRadius = "50%";
    ripple.style.background = "rgba(255,0,60,0.5)";
    ripple.style.left = e.clientX + "px";
    ripple.style.top = e.clientY + "px";
    ripple.style.pointerEvents = "none";
    ripple.style.animation = "ripple 0.6s linear";

    document.body.appendChild(ripple);

    setTimeout(() => ripple.remove(), 600);
});

// ================= ЗАГРУЗКА СТРАНИЦЫ =================
window.onload = function () {
    updateStatus();

    const savedName = localStorage.getItem("username");
    const welcome = document.getElementById("welcome");

    if (savedName && welcome) {
        welcome.textContent = "Добро пожаловать, " + savedName + " 👋";
    }
};