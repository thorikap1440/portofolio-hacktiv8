// humburger Menu pada device smartphone
function hamburgerMenu() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// Fungsi inputan form data pada portofolio
function getInputValue(elementId) {
  return document.getElementById(elementId).value;
}

function TampilkanData() {
  var Nama = getInputValue("inputnama");
  var Role = getInputValue("inputRole");
  var Avaibility = getInputValue("inputAvaibility");
  var Usia = getInputValue("inputAge");
  var Lokasi = getInputValue("inputLokasi");
  var Experience = getInputValue("inputExperience");
  var Email = getInputValue("inputEmail");

  // Jika form tidak di isi, maka default tidak hilang
  if (Nama) {
    document.getElementById("nama").innerHTML = Nama;
  }
  if (Role) {
    document.getElementById("role").innerHTML = Role;
  }
  if (Avaibility) {
    document.getElementById("avaibility").innerHTML = Avaibility;
  }
  if (Usia) {
    document.getElementById("age").innerHTML = Usia;
  }
  if (Lokasi) {
    document.getElementById("lokasi").innerHTML = Lokasi;
  }
  if (Experience) {
    document.getElementById("experience").innerHTML = Experience;
  }
  if (Email) {
    document.getElementById("email").innerHTML = Email;
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  return false;
}

// Action untuk Edit
var editButton = document.getElementById("editButton");

var form = document.querySelector(".form");

editButton.addEventListener("click", function (event) {
  event.preventDefault();
  form.scrollIntoView({ behavior: "smooth" });
});
