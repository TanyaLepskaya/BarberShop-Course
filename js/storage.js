var form = popup.querySelector("form");
var login = popup.querySelector("[name=login]");
var password = popup.querySelector("[name-password]");

var link = document.querySelector(".login-link");

var isStorageSupport = true;
var storage = "";

    try {
    storage = localStorage.getItem("login");
} catch (err) {
    isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
   
    if (storage) {
        login.value = storage;
        password.focus();
    } else {
        login.focus();
    }
    });

form.addEventListener("submit", function (evt) {
        if (!login.value || !password.value) {
        evt.preventDefault();
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-error");
        } else { 
            if (isStorageSupport) {
            localStorage.setItem("login", login.value);
            }
        }
    });