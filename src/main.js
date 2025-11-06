import "./style.css";
import "./styles/dev_page.css";

const devPagePhoto = document.querySelector(".dev_img");
const trainePagePhoto = document.querySelector(".traine_img");
const devPage = document.querySelector(".dev_page_hide");
const devHeader = document.querySelector(".dev_header");
const traineHeader = document.querySelector(".traine_header");
const trainePage = document.querySelector(".traine_page_hide");
const devIntro = document.querySelector(".dev_section_show");
const traineIntro = document.querySelector(".traine_section_show");

devPagePhoto.addEventListener("click", function () {
  devPage.classList.replace("dev_page_hide", "dev_page_show");
  devIntro.classList.replace("dev_section_show", "dev_section_hide");
  traineIntro.classList.replace("traine_section_show", "traine_section_hide");

  const button = document.createElement("button");
  devHeader.appendChild(button);
  button.classList.add("btn_back");
  button.innerText = "Wróć";

  const btnBack = document.querySelector(".btn_back");
  btnBack.addEventListener("click", function () {
    devIntro.classList.replace("dev_section_hide", "dev_section_show");
    traineIntro.classList.replace("traine_section_hide", "traine_section_show");
    devPage.classList.replace("dev_page_show", "dev_page_hide");
    btnBack.remove();
  });
});

trainePagePhoto.addEventListener("click", function () {
  trainePage.classList.replace("traine_page_hide", "traine_page_show");
  devIntro.classList.replace("dev_section_show", "dev_section_hide");
  traineIntro.classList.replace("traine_section_show", "traine_section_hide");

  const button = document.createElement("button");
  traineHeader.appendChild(button);
  button.classList.add("btn_back");
  button.innerText = "Wróć";

  const btnBack = document.querySelector(".btn_back");
  btnBack.addEventListener("click", function () {
    console.log("działam działam w dev");
    devIntro.classList.replace("dev_section_hide", "dev_section_show");
    traineIntro.classList.replace("traine_section_hide", "traine_section_show");
    trainePage.classList.replace("traine_page_show", "traine_page_hide");
    btnBack.remove();
  });
});
