/*
Save the user to local storage with key "user", in following format:- 
{
name: "",
image: "",
email: "",
country: "" (store country code "in", "ch", "nz", "us", "uk")
}
*/
let submit = () => {
  let name = document.getElementById("user_name").value;
  let image = document.getElementById("user_pic").value;
  let email = document.getElementById("user_email").value;
  let country = document.getElementById("user_country").value;

  function userData(n, i, e, c) {
    this.name = n;
    this.image = i;
    this.email = e;

    if (c === "India") {
      id = "in";
      this.country = id;
    }
    if (c === "China") {
      id = "ch";
      this.country = id;
    }
    if (c === "Newzeland") {
      id = "nz";
      this.country = id;
    }
    if (c === "USA") {
      id = "us";
      this.country = id;
    }
    if (c === "UK") {
      id = "uk";
      this.country = id;
    }
  }

  let u1 = new userData(name, image, email, country);

  console.log(u1);
  //   let userdata = [];
  //   userdata.push(u1);
  localStorage.setItem("user1", JSON.stringify(u1));

  window.location.reload();
};
