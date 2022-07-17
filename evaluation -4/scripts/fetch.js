let user_data = JSON.parse(localStorage.getItem("user1"));

function userappend(user_data, side_bar) {
  let img = document.createElement("img");
  img.src = user_data.image;

  let p = document.createElement("h4");
  p.innerText = user_data.email;

  let q = document.createElement("h4");
  if (user_data.country == "in") {
    q.innerText = "India";
  }
  if (user_data.country == "ch") {
    q.innerText = "China";
  }
  if (user_data.country == "nz") {
    q.innerText = "Newzeland";
  }
  if (user_data.country == "us") {
    q.innerText = "USA";
  }
  if (user_data.country == "uk") {
    q.innerText = "UK";
  }

  side_bar.append(img, p, q);
}

export default userappend;
