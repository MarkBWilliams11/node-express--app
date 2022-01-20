//set local storage for dark mode
let darkMode = localStorage.getItem("darkMode");

//enable darkmoe
enableDarkMode = () => {
  document.body.classList.add("dark-mood");

  let toggle_dark = document.querySelectorAll(".toggle-dark");
  let navLinks = document.querySelectorAll(".nav-link");
  let navBrand = document.querySelectorAll(".navbar-brand");
  let dropdownItem = document.querySelectorAll(".dropdown-item");
  let btnClose = document.querySelectorAll(".btn-close");

  toggle_dark.forEach((item) => {
    item.classList.add("dark-mood");
  });
  navLinks.forEach((item) => {
    item.classList.add("text-white");
  });
  dropdownItem.forEach((item) => {
    item.classList.add("text-white");
  });
  btnClose.forEach((item) => {
    item.classList.add("bg-light");
  });

  navBrand.forEach((item) => {
    item.classList.add("text-white");
  });
  localStorage.setItem("darkMode", "enable");
};

//diable
disableDarkMode = () => {
  document.body.classList.remove("dark-mood");
  let toggle_dark = document.querySelectorAll(".toggle-dark");
  let navLinks = document.querySelectorAll(".nav-link");
  let navBrand = document.querySelectorAll(".navbar-brand");
  let dropdownItem = document.querySelectorAll(".dropdown-item");
  let btnClose = document.querySelectorAll(".btn-close");

  dropdownItem.forEach((item) => {
    item.classList.remove("text-white");
  });
  btnClose.forEach((item) => {
    item.classList.remove("bg-light");
  });

  navLinks.forEach((item) => {
    item.classList.remove("text-white");
  });
  navBrand.forEach((item) => {
    item.classList.remove("text-white");
  });

  toggle_dark.forEach((item) => {
    item.classList.remove("dark-mood");
  });

  localStorage.setItem("darkMode", null);
};

//checkif dark mode is enabled
if (darkMode === "enable") {
  enableDarkMode();
} else {
  disableDarkMode();
}

document.querySelector(".dark-mode-toggler").addEventListener("click", () => {
  darkMode = localStorage.getItem("darkMode");
  if (darkMode !== "enable") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});
