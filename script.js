let pages = [];
let inputValue1 = "";

//preload pages

function loadFileToPages(file){
fetch(file)
  .then(response => response.text())
  .then((data) => {
    pages.push(data);
  })
}

loadFileToPages('page1.html');
loadFileToPages('page2.html');
loadFileToPages('page3.html');

//wait till pages are loaded

setTimeout(init,1000);

function init() {
  document.body.innerHTML = pages[0];
  document.getElementById("fname").value = inputValue1;
}

function button1() {
  inputValue1 = document.getElementById("fname").value;
  document.body.innerHTML = pages[1];
}

function button2() {
  document.body.innerHTML = pages[2];
}

function button3() {
  document.body.innerHTML = pages[0];
  document.getElementById("fname").value = inputValue1;
}