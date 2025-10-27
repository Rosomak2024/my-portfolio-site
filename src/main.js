import "./style.css";

document.querySelector("#app").innerHTML = `
<section class="dev_section">
    <h1>Web Developer</h1>
    <img class="dev_img" src="./assets/logo_web_light.png" alt="dev_img"></img>
    </section>
    <section class="traine_section">
    <h2>Personal MMA Trainer</h2>
    <img class="traine_img" src="./assets/FB_IMG_1630259240524.jpg" alt="karateka_img"/>
</section>`;

const dev_page_change = document.querySelector(".traine_img");
const traine_page_change = document.querySelector(".dev_section");

dev_page_change.addEventListener("click", function () {
  console.log("on click traine page");
});

traine_page_change.addEventListener("click", function () {
  console.log("on click dev page");
});
