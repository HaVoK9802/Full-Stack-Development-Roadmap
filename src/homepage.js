let navB = document.getElementById("navbar");
let headr = document.getElementById("headr");
const n = document.querySelectorAll("div.expContr");
let exp = document.querySelectorAll("svg.expand");
let ret = document.querySelectorAll("svg.retract");
let sub = document.querySelectorAll("div.subAccordtion");
let checkBoxU = document.querySelectorAll("svg.unchecked");
let checkBox = document.querySelectorAll("svg.checked");
let signUpOrLogIn = document.getElementById("suOli");
let close = document.querySelectorAll("svg.close");
let suBox = document.getElementById("suBox");
let liBox = document.getElementById("liBox");

let CBObj = {
  0: 1,
  1: 1,
  2: 0,
  3: 1,
  4: 1,
  5: 1,
  6: 1,
  7: 0,
  8: 0,
  9: 0,
  10: 1,
  11: 0,
  12: 1,
  13: 1,
  14: 1,
  15: 0,
};

function signUp() {
  // signUpOrLogIn.style.display = "flex";
  // document.body.style.position = "fixed";
  // suBox.style.display="flex";
  // liBox.style.display="none";
  fetch("/signUp")
    .then((response) => response.json())
    .then((data) => console.log(data));
}

function clos(i) {
  signUpOrLogIn.style.display = "none";
  document.body.style.position = "unset";
}

function logIn() {
  // signUpOrLogIn.style.display = "flex";
  // document.body.style.position = "fixed";
  // liBox.style.display="flex";
  // suBox.style.display="none";
  result.innerText = "Loading....";
  fetch("https://api.github.com/users/gulshansainis")
    .then((res) => res.json())
    .then((data) => {
      result.innerText = JSON.stringify(data, null, 2);
    })
    .catch((error) => console.log(error));
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

function checkLoader(i) {
  console.log(i, CBObj[i]);
  if (CBObj[i] == 1) {
    checkBox[i].style.display = "block";
    checkBoxU[i].style.display = "none";
  }
}

function load() {
  for (let k in CBObj) {
    checkLoader(k);
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
  if (scrollValue > 525) {
    navB.style.backgroundColor = "white";
    navB.style.transitionDuration = "0.4s";
  } else {
    navB.style.backgroundColor = "#e1f4f3";
    navB.style.transitionDuration = "0.4s";
  }
}
window.addEventListener("scroll", changeBg);

//n[0].addEventListener("click", d);
//checkBoxU[0].addEventListener("click",chk);
//checkBox[0].addEventListener("click",unChk);

// n[0].addEventListener("click", e);
