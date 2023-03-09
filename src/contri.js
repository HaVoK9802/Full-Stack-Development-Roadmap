let navB = document.getElementById("navbar");
let headr = document.getElementById("headr");
const n = document.querySelectorAll("div.expContr");
let exp = document.querySelectorAll("svg.expand");
let ret = document.querySelectorAll("svg.retract");
let sub = document.querySelectorAll("div.subAccordtion");
let signUpOrLogIn = document.getElementById("suOli");
let close = document.querySelectorAll("svg.close");
let suBox = document.getElementById("suBox");
let liBox = document.getElementById("liBox");

function signUp() {
  signUpOrLogIn.style.display = "flex";
  document.body.style.position = "fixed";
  suBox.style.display = "flex";
  liBox.style.display = "none";
}
function clos(i) {
  signUpOrLogIn.style.display = "none";
  document.body.style.position = "unset";
}

function logIn() {
  signUpOrLogIn.style.display = "flex";
  document.body.style.position = "fixed";
  liBox.style.display = "flex";
  suBox.style.display = "none";
}

function d(j, l) {
  if (exp[j].style.display == "none") {
    exp[j].style.display = "block";
    ret[j].style.display = "none";
    for (let i = 0; i < l.length; i++) {
      sub[l[i]].style.display = "flex";
    }
  } else {
    exp[j].style.display = "none";
    ret[j].style.display = "block";
    for (let i = 0; i < l.length; i++) {
      sub[l[i]].style.display = "none";
    }
  }
}

function chk(i) {
  checkBoxU[i].style.display = "none";
  checkBox[i].style.display = "block";
}
function unChk(i) {
  checkBoxU[i].style.display = "block";
  checkBox[i].style.display = "none";
}

function changeBg() {
  var scrollValue = window.scrollY;
  console.log(scrollValue);
  if (scrollValue > 50) {
    navB.style.backgroundColor = "white";
    navB.style.transitionDuration = "0.4s";
  } else {
    navB.style.backgroundColor = "#e1f4f3";
    navB.style.transitionDuration = "0.4s";
  }
}
window.addEventListener("scroll", changeBg);
