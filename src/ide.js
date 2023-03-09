function run() {
  let htmlCode = document.querySelector(".editor #html").value;
  let cssCode =
    "<style>" + document.querySelector(".editor #css").value + "</style>";
  let jsCode = document.querySelector(".editor #js").value;
  let output = document.querySelector(".editor #op");
  output.contentDocument.body.innerHTML = htmlCode + cssCode;
  output.contentWindow.eval(jsCode);
}

function reloadIframe() {
  document.getElementById("op").contentDocument.location.reload(true);
}

document.querySelector(".editor #html").addEventListener("keyup", run);

document.querySelector(".editor #css").addEventListener("keyup", run);

document.querySelector(".editor #js").addEventListener("keyup", run);
