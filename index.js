const boxQod = document.getElementById("box-qod");
const qodText = document.getElementById("qodText");
const qodAutor = document.getElementById("qodAutor");
const bg = document.getElementById("bg");

const qod = new XMLHttpRequest();
qod.responseType = "json";
qod.open("GET", "https://quotes.rest/qod?language=en");
qod.send();

qod.addEventListener("load", () => {
  const questText = qod.response.contents.quotes[0].quote;
  const questImg = qod.response.contents.quotes[0].background;
  const questAuthor = qod.response.contents.quotes[0].author;

  qodText.innerText = `"${questText}"`;
  qodAutor.innerText = questAuthor;
  bg.style.backgroundImage = `url(${questImg})`;
});
