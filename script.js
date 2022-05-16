const quoteEl = document.querySelector(".content-quote");
const authorEl = document.querySelector(".content-author");
const btnNext = document.querySelector(".btn");

btnNext.addEventListener("click", generateContent);
generateContent();

async function generateContent() {
  const res = await fetch("https://www.breakingbadapi.com/api/quote/random");
  const data = await res.json();
  //   console.log(data);
  //   console.log(data[0].quote);
  quoteEl.innerHTML = data[0].quote;
  authorEl.innerHTML = data[0].author;
}
