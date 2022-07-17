let newsDetails = JSON.parse(localStorage.getItem("newsData"));
append(newsDetails);
let user_data = JSON.parse(localStorage.getItem("user1"));
let side_bar = document.getElementById("sidebar");
import userappend from "./fetch.js";

userappend(user_data, side_bar);

function append(data) {
  let container = document.getElementById("detailed_news");
  data.forEach((element) => {
    let img = document.createElement("img");
    img.src = element.urlToImage;
    img.style.height = "70%";
    img.style.width = "100%";

    let h4 = document.createElement("h3");
    h4.innerText = element.description;

    container.append(img, h4);
  });
}
