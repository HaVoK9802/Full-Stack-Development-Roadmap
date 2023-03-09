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
  0: 0,
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
  7: 0,
  8: 0,
  9: 0,
  10: 0,
  11: 0,
  12: 0,
  13: 0,
  14: 0,
  15: 0,
};

function logOut() {
  fetch("/logout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(CBObj),
  })
    .then(console.log(done))
    .catch((e) => console.error(e));
  // .then(response => response.text())
  // .then(data => console.log(data))
  // .catch(error => console.error(error));
}

function sendUrl(url,idx) {
  // console.log(url)
  fetch('/vtab',{
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ url: url , idx: idx })
  })
  .then(console.log("done"))
  .catch((e) => console.error(e));

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
  if (CBObj[i] == 0) {
    CBObj[i] = 1;
  } else {
    CBObj[i] = 0;
  }
}
function unChk(i) {
  checkBoxU[i].style.display = "block";
  checkBox[i].style.display = "none";
  if (CBObj[i] == 0) {
    CBObj[i] = 1;
  } else {
    CBObj[i] = 0;
  }
}

function changeBg() {
  var scrollValue = window.scrollY;
  // console.log(scrollValue);
  if (scrollValue > 525) {
    navB.style.backgroundColor = "white";
    navB.style.transitionDuration = "0.4s";
  } else {
    navB.style.backgroundColor = "#e1f4f3";
    navB.style.transitionDuration = "0.4s";
  }
}
window.addEventListener("scroll", changeBg);
