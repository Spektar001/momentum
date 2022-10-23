const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const changeQuote = document.querySelector('.change-quote');

let num = Math.floor(Math.random() * (9 - 0 + 1) ) + 0;

async function getQuotes() {
  const quotes = '../js/quoteList.json';
  const res = await fetch(quotes);
  const data = await res.json();

	quote.textContent = data[num].text;
	author.textContent = data[num].author;



	changeQuote.addEventListener('click', () => {
		let jsonlength = 0;
		for (const iterator of data) {
			jsonlength++;
		}
		let num = Math.floor(Math.random() * ((jsonlength-1) - 0 + 1) ) + 0;
		quote.textContent = data[num].text;
		author.textContent = data[num].author;
	})
}
getQuotes();