import "./style.css";

document.querySelector("#app").innerHTML = `
<section class="dev_section_show">
  <img class="dev_img" src="./assets/logo_web_light.png" alt="Web Developer Logo"></img>
  <h1>Web Developer</h1>
</section>
<section class="dev_page_hide">
  <header>
    <nav>nawigacja</nav>
  </header>
  <button class="btn_back">Wróć</button>
    Strona o web deveploer
  <footer>stopka</footer>
</section>
<section class="traine_section_show">
  <img class="traine_img" src="./assets/FB_IMG_1630259240524.jpg" alt="Personal MMA Trainer Image"/>
  <h2>Personal MMA Trainer</h2>
</section>`;

const devPagePhoto = document.querySelector(".dev_img");
const btnBack = document.querySelector(".btn_back");
const devPage = document.querySelector(".dev_page_hide");
const devIntro = document.querySelector(".dev_section_show");
const traineIntro = document.querySelector(".traine_section_show");

devPagePhoto.addEventListener("click", function () {
  devPage.classList.replace("dev_page_hide", "dev_page_show");
  devIntro.classList.replace("dev_section_show", "dev_section_hide");
  traineIntro.classList.replace("traine_section_show", "traine_section_hide");
});

// traine_page_change.addEventListener("click", function () {});

btnBack.addEventListener("click", function () {
  devIntro.classList.replace("dev_section_hide", "dev_section_show");
  traineIntro.classList.replace("traine_section_hide", "traine_section_show");
  devPage.classList.replace("dev_page_show", "dev_page_hide");
});
