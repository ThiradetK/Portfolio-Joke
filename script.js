const btnMenu = document.querySelector("#menu");

btnMenu.addEventListener("click", () => {
  const showMenu = document.querySelector(".box-show-menu");

  const mobileNav = document.querySelector(".nav");

  if (btnMenu.src.includes("menu.svg")) {
    btnMenu.src = "assets/icon/close.svg";
    showMenu.classList.add("nav-mobile");
  } else {
    btnMenu.src = "assets/icon/menu.svg";
    showMenu.classList.remove("nav-mobile");
  }
});

////////////////////////////////////////////////////////////////////////

const navList = document.querySelector(".box-show-menu");

navList.addEventListener("click", (e) => {
  e.preventDefault();

  const target = e.target;
  if (target.tagName.toLowerCase() !== "a") return;

  const sections = ["about me", "skill", "project", "contact me"];
  const text = target.textContent.trim().toLowerCase();

  if (sections.includes(text)) {
    document
      .querySelectorAll(".box-show-menu a")
      .forEach((link) => link.classList.remove("activateNav"));
    target.classList.add("activateNav");
  }
});

//////////////////////////////////////////////////////////////////////////

navList.addEventListener("click", (e) => {
  e.preventDefault();
  const target = e.target;
  const text = target.textContent;

  const sections = {
    "about me": document.querySelector("#hero"),
    project: document.querySelector("#project"),
    "contact me": document.querySelector("#contact"),
    skill: document.querySelector("#skill"),
  };

  Object.values(sections).forEach((section) => section.classList.add("hidden"));

  if (sections[text]) {
    sections[text].classList.remove("hidden");
  }
});
