let pagesUrls = ['page1.html', 'page2.html', 'page3.html'];
let pages = [];
let inputValue1 = "";

async function loadFileToPages() {
  const response = await fetch(pagesUrls[pages.length]);
  const data = await response.text();
  pages.push(data);
  pages.length < pagesUrls.length ? loadFileToPages() : init();
}

loadFileToPages();

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
  document.getElementById("darkmode").checked = localStorage.getItem("darkMode")=="true"?true:false;
}

function button3() {
  document.body.innerHTML = pages[0];
  document.getElementById("fname").value = inputValue1;
}

function toggleDarkMode(){
    localStorage.setItem("darkMode", document.getElementById("darkmode").checked);
}