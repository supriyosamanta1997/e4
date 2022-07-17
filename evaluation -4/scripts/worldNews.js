let user_data = JSON.parse(localStorage.getItem("user1"));
async function getdata() {
  try {
    // console.log(user_data.country);
    let url = `https://masai-mock-api.herokuapp.com/news/top-headlines?country=${user_data.country}`;
    let response = await fetch(url);
    let Data = await response.json();
    console.log(Data.articles);
    append(Data.articles);
  } catch (err) {
    console.log(error);
  }
}
getdata();

function append(data) {
  let container = document.getElementById("news_result");
  container.innerHTML = null;
  data.forEach((element) => {
    let image = document.createElement("img");
    image.src = element.urlToImage;
    image.style.height = "15%";
    image.style.width = "20%";

    let p = document.createElement("p");
    p.innerText = element.title;

    let p2 = document.createElement("p");
    p2.innerText = element.author;

    let div = document.createElement("div");
    div.setAttribute("class", "news");
    div.addEventListener("click", function () {
      showNews(element);
    });

    div.append(image, p, p2);
    container.append(div);
  });
}

let side_bar = document.getElementById("sidebar");
import userappend from "./fetch.js";

userappend(user_data, side_bar);

let newsdata = [];
function showNews(elem) {
  newsdata.push(elem);
  localStorage.setItem("newsData", JSON.stringify(newsdata));
  window.location.href = "news.html";
}

//

document.getElementById("india").addEventListener("click", function () {
  indianNews();
});

function indianNews() {
  let indian = document.getElementById("india").innerText;
  if (indian == "India") {
    let country = "in";
    console.log(country);

    async function getnewsI() {
      let url = `https://masai-mock-api.herokuapp.com/news/top-headlines?country=${country}`;
      let res = await fetch(url);
      let data = await res.json();
      console.log(data.articles);
      append(data.articles);
    }
    getnewsI();
  }
}

document.getElementById("china").addEventListener("click", function () {
  chiniseNews();
});
function chiniseNews() {
  let indian = document.getElementById("china").innerText;
  if (indian == "China") {
    let country = "ch";
    console.log(country);

    async function getnewsC() {
      let url = `https://masai-mock-api.herokuapp.com/news/top-headlines?country=${country}`;
      let res = await fetch(url);
      let data = await res.json();
      console.log(data.articles);
      append(data.articles);
    }
    getnewsC();
  }
}

document.getElementById("newzeland").addEventListener("click", function () {
  newzelandNews();
});
function newzelandNews() {
  let indian = document.getElementById("newzeland").innerText;
  if (indian == "Newzeland") {
    let country = "nz";
    console.log(country);

    async function getnewsN() {
      let url = `https://masai-mock-api.herokuapp.com/news/top-headlines?country=${country}`;
      let res = await fetch(url);
      let data = await res.json();
      console.log(data.articles);
      append(data.articles);
    }
    getnewsN();
  }
}

document.getElementById("usa").addEventListener("click", function () {
  usaNews();
});
function usaNews() {
  let indian = document.getElementById("usa").innerText;
  if (indian == "USA") {
    let country = "us";
    console.log(country);

    async function getnewsA() {
      let url = `https://masai-mock-api.herokuapp.com/news/top-headlines?country=${country}`;
      let res = await fetch(url);
      let data = await res.json();
      console.log(data.articles);
      append(data.articles);
    }
    getnewsA();
  }
}

document.getElementById("uk").addEventListener("click", function () {
  ukNews();
});

function ukNews() {
  console.log("uk");
  let indian = document.getElementById("uk").innerText;
  if (indian == "UK") {
    let country = "uk";
    console.log(country);

    async function getnewsE() {
      let url = `https://masai-mock-api.herokuapp.com/news/top-headlines?country=${country}`;
      let res = await fetch(url);
      let data = await res.json();
      console.log(data.articles);
      append(data.articles);
    }
    getnewsE();
  }
}

let search = document.getElementById("search_box");
search.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    async function get() {
      let url = `https://masai-mock-api.herokuapp.com/news?q=${e.target.value}`;
      let res = await fetch(url);
      let data = await res.json();
      console.log(data.articles);
      append(data.articles);
    }
    get();
  }
});
